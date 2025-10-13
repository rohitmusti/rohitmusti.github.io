---
title: "Debate vs Collaboration"
date: "2025-10-11"
---

Most engineering cultures value debate. 
We celebrate strong opinions, lively design reviews, and sharp technical arguments. 
Debate sharpens our ideas, but if left unchecked, it can also fracture alignment, erode trust, and slow down decision-making.

Over time, I’ve learned that debate has its place, but its purpose is often misunderstood.
Debate helps us think better; collaboration helps us build better.

This distinction sounds subtle, but at scale, it is the difference between teams that argue well and teams that learn fast.

## Case Study
A teammate's design proposed a schema change in how we model relationships between zorgs and borgs. 
Historically, this was a one-to-many relationship:

```
ZORGS
id: str
name: str

BORGS
id: str
name: str
zorg_id: str | None, FK
```

A new feature required associating each borg with multiple zorgs.
There was an additional requirement that we tracked these new one borg to many zorg relationships (manually created) as different than one zorg to many borg relationships (automatically created). 

The proposal suggested that we add a `associated_zorg_ids` to the `borg` table.

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

At first glance, it was pragmatic: minimal schema change, easy to query, easy to deploy. 
But the design triggered a debate: the usual tension between lightweight now and durable later.

### My Initial Concerns

Three things stood out to me:
1. **Performance**: queries that join between `borgs` and `zorgs` are common, array membership checks (even with a GIN index) would likely be slower.
2. **Clarity**: having both `zorg_id` and `associated_zorg_ids` complicates reasoning and analytics.
3. **Extensibility:** future requirements might evolve into true many-to-many relationships between borgs and zorgs. 


A join table felt like a more natural and durable model.
But when I raised these points, my teammate pushed back, they believed the GIN index would mitigate the performance concern and that the simplicity was worth it.

### The Turning Point

At that moment, I geared up for a debate, a habit from my old high school mock trial days.
Then, I paused.

Instead of letting it spiral into a contest of technical rhetoric, I reframed the goal: “Let’s figure out what’s true, not who’s right.”

### A Collaborative Path

I first acknowledged their reasoning: that in theory, GIN indexes can perform well for certain lookups. 
Then we paired up to explore the codebase together.

We looked at where these tables were joined and how often those joins appeared in our highest-traffic paths. That discovery made the performance requirement clear.

My teammate admitted they didn’t know how to test for query performance. 
So I showed them an approach I've used before: filling a local database with tens of millions of rows and analyzing queries with [https://explain.dalibo.com/](https://explain.dalibo.com/), a tool my manager had shown me.

They took it from there, writing scripts, running benchmarks, and analyzing query plans. 
The results were decisive:
- The join-table approach was 2–3 orders of magnitude faster than the array-based lookup.
- GIN-indexed writes were measurably slower.
- They also surfaced insights I hadn’t even raised like write amplification on GIN indexes.

Together, we concluded that a proper join table, with metadata about the borg–zorg relationship, was the most sustainable solution.
We aligned, not because one argument won, but because a shared investigation produced shared conviction.

## Reflection

Growing up, I was taught to optimize for being right.
Less emphasis was placed on maintaining positive working relationships; after all, as kids most conflicts dissolved after an hour of four square or basketball.
In software teams, that mindset often ignores something more valuable: trust, growth, and collaboration.

This story isn’t about one schema decision. It exposed something larger about how I approach disagreement.

In healthy engineering organizations, debate surfaces options, but collaboration aligns direction.
When we confuse one for the other, design reviews can become performative: high-signal but low-progress.
The fix isn’t “less debate.” It’s ensuring debate serves its true purpose: to explore possibilities, not to assign correctness.
That shift transforms design reviews from places where opinions collide into spaces where understanding compounds.

As organizations grow, they accumulate more smart people — and with that, more potential for debate.
Without intentional design, the organization can start to optimize for argument density instead of decision velocity.
If our default is “debate until consensus,” we bias toward delay. 
If our default is “collaborate until clarity,” we bias toward alignment.

The strongest engineers I’ve worked with don’t win design reviews. They create environments where everyone learns faster; where debate sharpens thought, collaboration builds trust, and alignment multiplies velocity.

That’s the kind of engineer I’m still learning to be.
