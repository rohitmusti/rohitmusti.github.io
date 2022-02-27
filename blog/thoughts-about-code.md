---
title: "Loose Thoughts about 'Good' Code"
date: "2022-02-26"
---

I write a mix of software and data engineering code. I also like to experiment around with different languages and am becoming more and more interested in systems programming and firmware. As such, I find that my code tends to frequently change style based on whatever is most appropriate for what I am writing. By contstantly switching contexts, I have built up a few beliefs.

## Belief #1

**Belief #1**: use auto-formatting tools to format code wherever possible. Tools like prettier (for javascript and typescript), black (for python), and cargo fmt (for rust), make writing consistently formatted code easily and immediately adopt to whatever the dominant preferences are of the community around a particular language or format.

## Belief #2

**Belief #2**: it is good to minimize dependencies wherever possible. I recently tried to write a small python API that took in some numbers, generated a couple of graphs, and returned a PDF. Between numpy, pandas, fpdf, plotly, and plotly-express, pytest, and kaleido, I quickly racked up something north of 879 MB of dependencies. Not only is this massive bloat shocking, but it made it nearly impossible to deploy this toy API to as serverless endpoints. Aside: I recognize that serverless endpoints are a little bit hyped up right now, but I do think they're useful for prototyping. It is also a little shameful that it required me so many dependencies to do something so basic.

## Belief #3

**Belie #3**: document your code before you write it. This is the belief that I am most hypocritical about. I am becoming better at documenting my code, but oftentimes fall short of my standards. An approach that works for me is actually writing out, in comments, all of the steps, functions, and systems I'll need to build, before I actually build them. A bit like the french cooking technique _mise en place_ (to put in place), which requires all of the prep work (chopping, rinsing, etc.) to be done before you begin cooking.

When I was an Intro to CS TA, I was always struck by how well documented the code of new programmers was. These new programmers were so frustrated with programming that they naturally discovered that laying out your ideas in comments before writing them code made writing the code orders of magnitude easier. When I became an Algorithms TA, I was surprised to see that almost every students had stopped documenting their code. What happened between these two classes? My hypothesis is that somewhere along the way, we programmers and engineers gained a little bit too much confidence in our abilities. The result of this is that we stopped carefully breaking down our problems and solutions into their components and neatly labeling them before attempting to write out a solution. Instead, we learned how easy it felt to edit code, so we thought there was no harm in getting something working before outlining our steps. Ultimately, no one outlined their steps.

I hope to take a cue from the beginner programmers and put everything in its place before actually writing code. Forcing myself to ask and answer the right questions before jumping into code has made me a much better programmer.

## Belief #4

**Belief #4**: code is like writing, we need drafts. Whenever I write an essay or report (or even this blog), often my first attempt and getting my thoughts out is unsuccessful and confusing. This is the opposite approach I found myself taking to writing code. I started to ponder why I treated this two very similar activities so differently. I think its because coding often feels like I am building something and home builders don't dig up the foundation for a more pleasing lay out, that would be very wasteful! However, I forget that coding is also literally trying to express ideas in a foreign language. As such, it is important to scrutinize my code the same way I scrutinize my words. The code review process at many large orgs already has this idea baked into their processes, they literally copy edit code. I am hoping to take that process and introduce it a little further upstream by asking myself, "is this the best way to express an idea?" and "will future me be able to understand what current me is trying to do?".

## Belief #5

**Belief #5**: frameworks are nice, but they'll never compensate for failures in design of a language or a system. I recently have been writing some code in Rust. It is an incredibly pleasant langauge to write in and a very welcoming community to join. As I've been writing rust, I have been struck by how hard it is to write code with mistakes compared to a lanaguage like C or python. Sure, you don't need the borrow checker if you just malloc and free appropriately. Sure, you don't need types if you can just keep your variables straight in your head. Sure, you can write tests in C and python as long as you follow certian frameworks or patterns. However, I rarely find myself sticking to those practices in those languages because they aren't baked into the language. With Rust however, cargo (the package manager) either forces me to explicitly acknowledge these ideas or makes them incredibly ergonomic to implement. Even though I know how to use these techniques effectively in many other languages, when the DNA of a language requires me or reminds me to use them, it is much much easier.
