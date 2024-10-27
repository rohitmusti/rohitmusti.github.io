---
title: "Valiating Databse Migrations"
date: "2024-10-16"
---

One of the most important skills I've learned in the past year at [Read AI](https://read.ai/) is how to successfully run database migrations. After a particularly disastrous database migration in the fall of 2023, I decided to really focus on nailing this skill. First I needed to learn: I solicited advice and patterns from the many skilled engineers I'm lucky enough to call my colleagues. After spending some time observing, I completed several migrations myself. The goal of these migrations was to transfer sensitive settings from the initial generic table to a more dedicated table that significantly simplified adding new settings. Here is the pattern I arrived at!

## Understand the Initial Shape of the Data

This doesn't need to be anything fancy, I can usually throw together a few group by queries to get a sense of the all of the states a user can be in and the rough distribution of users across these states. Here is an example of what these queries might look:

```
SELECT employer, COUNT(*) AS users_count 
FROM users
GROUP BY employer;
```

In this hypothetical, you are tasked with transferring the employer column from the users table to its own separate table. This query represents an easy way to get a sense of what the data looks like but it might be a little too granular. A more generic query might look like:

```
SELECT 
    COUNT(*) AS all_users_count 
    COUNT(1) FILTER (WHERE employer IS NULL) as users_without_employers
    COUNT(1) FILTER (WHERE employer IS NOT NULL) as users_with_employers
FROM users
```

This tells us how much of the data is null. These are just a couple of examples of how you might go about undersatnding the shape of the data, but getting comfortable with SQL aggregation queries is an important component of these queries.

## Develop "Validation" Queries to Compare The State Pre and Post Migration

The goal of these queries to quickly and easily validate that a migration has succeeded. It might look something like this:

```
SELECT 
    COUNT(DISTINCT user_id) total_user_count,
    COUNT(1) FILTER (WHERE u.employer is not null) total_user_valid_employer_count,
    COUNT(1) FILTER (WHERE ue.employer = u.employer) AS matched_employer_count,
    COUNT(1) FILTER (WHERE ue.employer != u.employer) AS mismatched_employer_count,
    COUNT(1) FILTER (WHERE ue.employer IS NULL or u.employer IS NULL) AS null_employer_count,
FROM users u
LEFT JOIN user_employment ue ON ue.user_id = u.id
```

If the migration of the data from the hypothetical users table to the hypothetical user employer table succeeds, this query should have the final result of total user with a valid employer count equivalent to the matched employer count. This is also safe to run before you start migrating the data as it'll just show up with zeros for matched and full counts for mismatched. Queries like these really help build confidence that you have not misconfigured the migration

## Execute the Migration and Validate

At this point, you are ready to execute the migration. Run the migration! Bonus points if you can do it in a limited number of SQL queries. The fewer transactions required, the less likely something is going to go wrong. Sometimes you can't avoid multiple queries or using cursors, but it's usually safer to reach for those tools last.

## Optional: Read/Write to Both Tables Simultaneously

A great technique to reduce overall risk is to write to both tables simultaneous as a part of the migration process. This is a great way to safely compare that the tables are remaining in sync. You can also easily log any discrepensies from queries in the application layer before completely transferring over to the new tables. Building that log analysis that everything is fine is an awesome way to verify that the data is still being queried and used in a safe way, not only testing that the database migration is correct but also testing that the new application logic is right.

## Conclusion

This is just one pattern among many. In some cases it may be too heavy handed, but it's become my go to approach when running migrations that move sensitive data from what table to another and my primary goals are correctness and reducing the effect on the user. Something extremely important to this pattern is a very high database querying skill level, building out fundamental database skills is the foundation of getting migrations right and something worth getting good at! It will pay dividends down the line.

