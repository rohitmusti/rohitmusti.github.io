---
title: "Slack Bots -> Spam"
date: "2026-05-20"
---

Slack bots are innocent on the surface: do you send the same message every
Wednesday around 9:00 am, why not automate that? It feels like the kind of
optimization that I (as an engineer) love and have been trained to make: see a
repetitive task, automate it. However, something about those messages has always
rubbed me the wrong way.

### The Asymmetry

My best framing I have for this is: when you dispatch a bot to ask me for a
status update, I hear two things at once.

1. It is not worth your time to gather this information.
2. It is required that I spend my time providing it.

That asymmetry is what makes me uncomfortable. A push mode, me posting an async
update on my own cadence at some point on Wednesday, feels fine. A pull model
where another human asks me is fine, often welcome. But a bot that was created
by someone else to remind me every single week? That feels like micromanaging me
in a way that devalues my work.

### Effort to Value Ratio

A friend pointed out this generalizes. All communication as a ratio: the effort
the asker spent gathering a response divided by the value of the response to them.
When the asker's effort is near zero but the respondant's effort is material,
something feels off. The ratio is off and I think it is what I am reacting to.

### The Ladder

Scenario: you want to know how your team is doing this week. There is a ladder
from "high effort, high signal" to "no effort, no signal," and each rung
trades effort for convenience.

1. **You DM each person individually.** This is high touch/effort and high signal.
   The effort you put in as the asker is less than the respondant's effort, but
   they are in balance. This is a high human and high respect interaction.
2. **You send one message to a shared channel and engage with every reply**.
   This is less personal, but still high effort and high signal. There is even
   the benefit that people see eachother's responses (a nice network effect).
3. **A bot posts the message weekly and you reliably respond and engage in the
   thread alongside everyone else.** You have automated the prompt but remained
   in the conversation. This is fine as long as the engagement holds, but you
   have dipped a toe in the uncanny valley.
4. **A bot posts weekly and you do not engage at all.** At that point, your
   teammates might as well respond with their own bots that paste in their jira
   tickets and statuses. At that point, why not just use Jira?

The rungs are less a bout the bot, they are about whether you, the person asking
for the information, are willing to spend any effort in gather in the information,
matching the effort you are asking of others.

### The Same Pattern in Pull Requests

I notice the same feeling in myself when someone sends me a pull request that
was generated end to end by Claude and not meaningfully reviewed by the author
before they posted it for review. If it wasn't worth their time to write or read
the code, but it is worth my time to review it, that devalues my time.
