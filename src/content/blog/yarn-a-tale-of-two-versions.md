---
title: "Yarn: A tale of two versions"
date: "2026-06-03"
description: "Yarn v1 has been in maintenance mode since 2020. Yet it remains the most widely deployed version. Here's why."
---

Most developers know Yarn. Fewer know there are effectively two
completely different tools sharing the same name.

![Yarn package manager](/blog/yarn.png)

## Yarn Classic (v1)

Released in 2016 by Facebook as a faster, more reliable alternative
to npm. It became the industry standard almost overnight. In 2020,
the team announced it was entering maintenance mode — no new features,
security patches only.

It's still extremely common in production environments, especially in older CI/CD pipelines and enterprise repos.

## Yarn Berry (v2, v3, v4)

A complete rewrite. Same name, different tool. The headline feature
was Plug'n'Play (PnP) — eliminating `node_modules` entirely:

- No more `node_modules` folder
- New config format — `.yarnrc.yml` instead of `.yarnrc`
- Incompatible lockfile format
- Faster installs, stricter dependency resolution

The problem? PnP broke a lot of tools that assumed `node_modules`
exists. Migration wasn't an upgrade — it was closer to switching
package managers entirely.

## Why teams stay on v1

The answer is simple: it works. And in production, "it works" is
often good enough. Migration carries risk, requires CI/CD updates,
and somebody has to own it.

## How to check

```bash
yarn --version
```

`1.x` — you're on Classic. `2.x`, `3.x`, or `4.x` — Berry.

## The bigger picture

Yarn is one example of a broader pattern in software development —
tools evolve, ecosystems fragment and production environments quietly
fall behind. Not out of negligence, but because stability has real value.

The next time someone pitches a project as _state of the art_, it's
worth asking: _state of the art_ as of when?
