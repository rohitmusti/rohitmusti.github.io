---
title: "What Happened to the Flow State?"
date: "2026-07-14"
---

I began my career before LLMs took over software engineering and, at the time, all the rage was entering the "flow state" or "deep focus time". Engineers (and their managers) were obsessed with being deeply productive without any distractions. AI has largely destroyed the flow state.

### What is the Flow State?

The flow state is hard to describe, these days people refer to "locking in" to get to a similar idea. For me, I can only enter the flow state when I understand a problem so deeply that I can clearly lay out the solution and visualize the path to building it clearly laid out in front of me. At that point, I can just flow through solving the problem. Frequently, I put my hood up, pop on the latest and greatest noise canceling headphones (set to brown noise), turn off my notifications, and get to work. At the end, I would proudly emerge with a crisp solution to a meaningful business problem. 

The engineers I admired most weren't the fastest at typing (although WPM competitions were always fun), rather they were the ones who could understand the hardest problems deeply enough that implementation became almost mechanical and their solutions felt as ineviteble as gravity. Entering flow state is one of the reasons I enjoy working as a software engineer so much.

### Why did we obsess over it?

I remember that the CEO would bring us lunch as a perk for working in the office. In addition to boosting morale and being a generous employer, I suspect his secondary motivation was to ensure that we had as little disruption as possible when doing our work. For engineers and product managers, this meant we could spend our time diving deeply into problems until we understood them deeply enough to flow through to good solutions. As an engineering culture, I think we obsessed with the flow state (to the point of CEOs going on lunch runs) because it meant that we were working on the most critical/impactful thing we could work on.

### How did AI destroy it?

Whenever I was in the flow state, I found interruptions extremely annoying as it pulled me out of this excellent mode. I wore noise cancelling headphones so that my coworkers chatting wasn't a distraction; I would put on a hoodie to limit my visual field; I used a minimal editor because it helped me focus on just the file I was editing; I would gnash my teeth over slow build/compile times and count the seconds it took to run a test suite. In short, I optimized everything that interrupted my ability to execute my work at a high level to my personal preferences.

Writing code with LLMs is directly in tension with the flow state. Looking at the first part, building a mental model of the problem and, therefore, a solution: it is still important to have a robust mental model of the problem and its solution, but increasingly LLMs make the fine details slightly less important as they can handle a large amount of reasoning work, so this becomes a slightly higher level abstraction. Looking at the second part, working without interruption: LLMs are an extreme anti-pattern. Typing in a request, watching the code appear on screen after anywhere from 30 seconds - a couple minute delay, and then prompting it to make further adjustments is like someone tapping on your shoulder once every 1-3 minutes asking you for the tech specs. This isn't a meaningful amount of time to actually do something else during but it is the perfect amount of time to get distracted and the world is filled with content (slack messages, emails, short form video, etc) designed to fill that time. We took away one of the great joys of work and filled it with endless context switching.

Worst of all, we forgot the lesson that humans are not good at multi tasking and we chose to have multiple coding agents working on several solutions simultaneously. Flow used to be a continuous act of creation and LLM assisted coding has turned it into an intermittent act of supervision.

> nota bene: It would be a disservice to not acknowledge how much faster building up a mental model of a problem has become with LLMs. My main gripe is that the implementation has lost some of its joy.


### What is next?

I expect that the role of software engineers engineers will always be: identifying problems, understanding them deeply, evaluating solutions, and being accountable to outcomes. I also expect that the cost of generating code is going to become cheaper and we will need to adjust our tools, processes, and, ultimately, culture to keep up. Today, I still like to spend an hour or two a day writing code by hand to ensure I stay grounded, have fun, and maintain some fundamentals. I also think that deeply diving into metrics, telemetry, mentorship, and business strategy will continue to become a larger part of my job. I am also always on the hunt for new ways I can set up my execution agents to spend longer amounts of time working so I can have continually larger blocks between prompts to get high quality work done. If implementation has turned into supervising agents, our tools should optimize for longer uninterrupted supervision loops rather than faster prompt-response cycles. The IDE of the future may look less like a chatbot and more like a control tower.

Maybe the next generation won't measure great engineers by how long they can stay in flow, but by how well they can orchestrate a dozen parallel execution agents. That may be more productive. I'm just not convinced it's more enjoyable (yet).

