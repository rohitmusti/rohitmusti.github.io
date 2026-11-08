---
title: "Software Goes Organic"
date: "2026-10-30"
---

We are undergoing a rapid change in how we write software.

## How software engineering has evolved

Up until 2022, writing software meant designing mechanisms to represent the world as data structures, then writing code to manipulate those structures in response to user input. We were responsible for inventing both the representations and the mechanisms that brought them to life.

From 2022 to 2025, we began to automate small parts of that process. Instead of writing out `for (int i = 0; i < 5; i++)`, we could start to write `for (` and AI would auto complete from there.

From 2025 to mid-2026, we gained the ability to describe the mechanism we wanted in natural language: "write me a function that takes this user's email, strips off any white space, verifies it obeys the rules of what characters can be in an email, and applies input sanitization. follow the best pydantic 2.0 practices. make no mistakes.". This allowed us to create our mechanisms and our representations far more quickly than before.

From mid-2026 onwards, I believe we are stepping away from these mechanisms entirely. Instead, we are moving towards setting out clear goals for agents and systems. Turning over the decisions of which mechanisms to use and build to them and instead focusing on what behaviors they must achieve and applying the darwinian rules of evolution to pick the fittest systems.

Initially, I recoil away from this idea.

I pride myself on building elegant systems that efficiently solve problems and gracefully degrade as the components they rely on fail. However, the more I have been experimenting with AI, the more I am convinced that me deciding those mechanisms is becoming less and less efficient. Models can solve Millenium Prize problems, why would I be better than them at wiring together opus audio packets over a network? It feels really good to decide those mechanisms, but it is less efficient.

I have been inching my way towards a new approach: describing the outcomes and behavior I desire and then asking AI systems to fill in the gap. When they do, I'm delighted and astounded. Then, I hunt for a bug or a gap or an issue. In the old world, I would monitor for the bugs and make the fixes by digging into the mechanisms myself. Now, I tell the AI the conditions of success (expect X CPU and Y processing rate and Z conditions) and allow it to self monitor and evolve its own implementation. When it is finished, I review the mechanisms and total system. I also ask AI to explain rough edges and roundabout mechanisms. Sometimes, I find issues but more often than not, it has evolved into a reasonaly efficient system in several orders of magnitude less time than it would have taken me.

## Code evolving like biology systems

I think we need to take a lesson how biology achieves behavior and apply it to writing code. LLMs allow us to describe behavior "when I click this button, make the text turn yellow" and then it will churn out some code that does it. Is it the most efficient code? Sometimes it is, sometimes it is nearly incomprehensible. The larger the problem, the more it scales. However, that ultimate behavior can often still be achieved. I, as the end user, often cannot tell the difference between an elegant mechanism and an awkward garbled one. If we force ourselves to think in this old mechanistic way of writing code, we will be limited by our ability to invent and combine mechanisms. If we can find a way to evolve and embrace clear behaviorally defined code, we will build systems that can achieve more than we could have possibly imagined before.

Artificial Intelligence has created a path to a new way to write software that reminds me a lot of biology. Before I found the joy of writing code, I loved the world of micro-biology. There was an element of discovery to carefully droping liquids in test tube and watching living organisms behave and then trying to guess at their internal mechanisms. One thing that always stood out about biology is those mechanisms were convoluted and a little inefficient in the micro. But in the macro, evolution doesn't care how an organism metabolizes, it just cares that it can survive. If you had to start from the basic principles of how cells metabolize and construct a human, it would take longer than the time it took humans to evolve.

## The role of software engineers

Will these systems be perfectly elegant mechanisms? No, they will be a little messy and require guidance. It will be extremely difficult to define the behaviors correctly and put the right guardrails in place.

I don't think there is zero role for humans (see my post on fluency as the final frontier), but I think we need to evolve and free ourselves from this minutae and think on a larger scale. I am early in my personal journey and exploration of this idea, but I'm excited for the types of problems I'll be able to confront as I get better are delegating minutae to the agents.

## Conclusion

I cannot deny that I'm a little bit bummed out that my ability to elegantly represent ideas into datastructures and then efficiently manipulate those data structures is less valuable than it once was. It was extremely fun to be an artisan chiseling these mechanisms into code. I found it personally satisfying and it was professionally rewarding.

However, I look forward to how much day to day toil I can be freed from as we evolve agentic systems. So many problems that, in the past, would have consumed years of time can be compressed a few concentrated weeks. That is incredible and I'm excited to see what we are able to do with that kind of power.
