---
title: "Debate vs Collaboration"
date: "2025-10-11"
---

I recently learned an important lesson: debate is valuable for thinking, not for building consensus.

## Background
I was reviewing a teammate's design to update our data model. 
We had a one-to-many relationship in SQL between borgs and zorgs (each borg belongs to one zorg, each zorg can have many borgs).

```
ZORGS
id: str
name: str

BORGS
id: str
name: str
zorg_id: str | None, FK
```

Their goal was to associated a single borg with multiple zorgs. 
These “associated zorgs” were special, users would manually create these relationships, and that needed to be reflected in the data model.

## The Proposal

My co-worker suggested that we add a `associated_zorg_ids` to the `borg` table.

```
ZORGS
id: ULID
name: str

BORGS
id: ULID
name: str
zorg_id: str | None, FK
associated_zorg_ids: str[], GIN idx
```


Their reasoning: it's a lightweight solution and a GIN index should make queries performant enough.
I can see where my co-worker is coming from, at our company, we value simple, practical solutions.
Given that these associated_zorg_ids were a special case and our culture favors pragmatic solutions, I could see how they arrived at this approach.

## My Initial Concerns

Three things stood out to me:
1. **Performance**: queries that join betwen `borgs` and `zorgs` are common, array membership checks (even with a GIN index) would likely be slower.
2. **Clarity**: having both `zorg_id` and `associated_zorg_ids` complicates reasoning and analytics.
3. **Extensibility:** future requirements might evolve into true many-to-many relationships between borgs and zorgs. 


A join table felt like a more natural and durable model.
But when I raised these points, my teammate pushed back, they believed the GIN index would mitigate the performance concern and that the simplicity was worth it.

## The Turning Point

At that moment, I geared up for a debate, a habit from my old high school mock trial days.
Then, I paused.

This wasn't a contest. 
My teammate was newer and the purpose of a design review isn't to win an argument, but instead to grow shared understanding and build trust.
Instead of debating, I switched into collaboration mode; from convincing to understanding.

## A Collaborative Path

I first acknowledged their reasoning: that in theory, GIN indexes can perform well for certain lookups. 
Then we paired up to explore the codebase together.

We looked at where these tables were joined and how often those joins appeared in our highest-traffic paths. That discovery made the performance requirement clear.

My teammate admitted they didn’t know how to test for query performance. 
So I showed them an approach I've used before: filling a local database with tens of millions of rows and analyzing queries with [https://explain.dalibo.com/](https://explain.dalibo.com/), a tool my manager had shown me.

They took it from there, writing scripts, running benchmarks, and analyzing query plans. 
The results were decisive:
- The join-table approach was 2–3 orders of magnitude faster than the array-based lookup.
- GIN-indexed writes were measurably slower.

They also surfaced insights I hadn’t even raised like write amplification on GIN indexes.

Together, we concluded that a proper join table, with metadata about the borg–zorg relationship, was the most sustainable solution.

## Reflection

Growing up, I was taught to optimize for being right.
Less emphasis was placed on maintaining positive working relationships; after all, as kids most conflicts dissolved after an hour of four square or basketball.
In software teams, that mindset often ignores something more valuable: trust, growth, and collaboration.

This realization (that design review has many purposes beyond identifying and proceeding with the most technically optimal solution) has fundamentally changed how I think about design review. 
Now, my design review checklist includes (1) how technically sound is this design, (2) what evidence have we produced to prove this is the most sound design, and (3) what are some skills the engineer completing this design might be able to exercise/build as a part of this design review that will serve them well into the future.
These apply to my own designs as well! 
I want to make sure I'm exercising all of the muscles relevant to each design to make sure I stay sharp and am growing in my own skills.
Items 2 and 3 and new to my checklist after this experience and they come from my values of trust, respect, and continuous learning.

Debate has a valuable place in design reviews: it challenges our assumptions and strengthens ideas. 
But when we lose sight of higher goals like collaboration and alignment, debate can easily become discouraging, especially for engineers who are still building confidence. 
Debate is useful only when it leads us toward better ideas together and collaboration often gets us there faster.

This experience reminded me that the best engineers don't argue me into correctness; they guide me toward understanding.
That’s the kind of engineer I want to be: someone who leaves others better and systems faster.

