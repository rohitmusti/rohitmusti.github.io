---
title: "Security on the Edge"
date: "2023-01-17"
---

As a software engineer at [Read AI](https://read.ai/), I recently had the opportunity to design an authenticaction system for accessing video recordings served through AWS Cloudfront. I was incredibly excited to apply my skills as a cryptographer to this real world problem. This is the sort of real world problem that I had spent hours trying to simulate through homework assignments I created for my students. To any other cryptography instructors, feel free to use the brief!

## Prompt

You are a software engineer at start up.
You need to serve a video recording through AWS Cloudfront.
The benefit of serving through a CDN is that it ensures caching in global regions so that all of our cutomers have speedy video streaming! Your system should prserve this performance benefit.

1. We also only want only customers to be able to load the recordings of videos they are authorized for.
1. The system needs to also preserve as much of the original speed of the cache as possible

## My approach

When a customer requests access to a video recording, after verifying they have access to the recording, we issue them a token. Encoded in this token is the recording ID and the expiration datetime (3 hours after issuance). This token contains a signed hash. The final token structure is:

`<token_encoding_method>.<base64_encoded_token>.<Hash(token_encoding_method, base64_encoded_token_information, secret_key)>`

The customer can then hit our recordings end point and present the token. We then take advantage of lambda edge functions to verify the request coming into cloudfront. To verify the token is valid, we access our secret key and compute the hash on the token encoding method and base 64 encoded token and verify it matches the hash signature on the token. If the request is invalid, we throw an error and prevent the user from accessing the cached recording; if the token is valid, we pass their request through

## Cryptographic Primtives

This is a HMAC system. If you are interested in learning more about HMAC systems, check out my slides from a [cryptography class](https://rohitmusti.github.io/intro-to-crypto/) I taught at CUNY. We do leak information about the information inside of the token - the recording id and expiration datetime - but none of that information is secret. Additionally, the point of the system is to make sure the user authenticated to our system. not to hide information contained in the token. The security system guarantees that we at Read AI issued the token allowing the bearer to access a specific recording for an allotted period of time. Therefore, only authorized users can access a recording. This system is also stateless, it only relies upon access to a secret key and doesn't require any database calls. This makes it very fast.

## Did we meet the brief?

Security: Only we at Read AI have access to the secret key used for encryption and we periodically rotate the key. This ensures that no one can forge a signature. We also entrust the actual hashing and comparison logic to the [jwt](https://jwt.io/) library, following the golden rule of never rolling your own security.

Speed: This implementation relies upon a hash function, string, and integer comparisons. These are all extremely fast operations that do not add significant time to the request of resources through the CDN.

## Implementation Curiosities

- By declaring secrets outside of the main body function, it would only be run once on initialization, not everytime the function was run. This translates to only retrieving the JWT secret once on deploy/intiialization instead of on every function run. This means we don't need to make the round trip call to AWS Secrets Manager every time we want to authenticate!

- Where are my logs? Even though lambda edge function are deployed to `us-east-1`, their logs populate in whichever region the requests are made. For a while, I was making requests in `us-west-2` and going mad trying to find them in `us-east-1`! Surprisingly, this was the most time consuming and frustrating part of the process.
