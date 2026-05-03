---
title: "The Cost of Types"
date: "2026-05-03"
description: "TypeScript solves problems that modern tooling has already solved — at a price."
---

Every good programming language resembles one another. Every bad one
is bad in its own way. One of JavaScript's most cited flaws is dynamic
typing. But is it really a flaw?

## Every language has its flaws

PHP isn't multithreaded. Python is slow. Go had no generics until
March 2022. Ruby doesn't scale. These are trade-offs, not failures —
deliberate decisions that shaped what each language is good at.

JavaScript was designed to be flexible. No types, no compilation step,
runs everywhere. That flexibility is why it conquered the web.
TypeScript's premise is that this flexibility is a problem worth solving.

But is it?

## What it actually costs

Adding TypeScript to a project isn't free:

- A build step that didn't exist before
- `tsconfig.json` configuration overhead
- Type errors that compile away but runtime errors that don't
- Every third-party package needs `@types/*` or ships broken definitions
- Onboarding developers who spend more time fighting the type system
  than shipping features

TypeScript gives you compile-time safety. It gives you nothing at runtime.

## The ecosystem caught up

The strongest argument for TypeScript was always: "how else do you
know the shape of your data?" The answer, in 2026, is: you probably
already do.

- **Prisma and Mongoose** define your data schema. The shape of your
  data is already declared — TypeScript is a redundant layer on top.
- **GraphQL** is contract-first by design. Your API types are generated,
  not hand-written.
- **Zod and Valibot** give you runtime validation — the thing TypeScript
  actually can't do.

The tooling moved. The justification didn't.

## Choose your complexity

There are cases where TypeScript earns its place — large teams, public
libraries, codebases that outlive the people who built them.
The type system becomes documentation, and documentation has value.

But a CRUD app backed by Prisma? A GraphQL API with generated types?
A solo project or a small team that moves fast? The complexity budget
is better spent elsewhere.

Every language has its flaw. One of the issues I see with JavaScript is that many people try to fix the wrong thing.
