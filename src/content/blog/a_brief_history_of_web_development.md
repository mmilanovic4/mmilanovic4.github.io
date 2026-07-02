---
title: "A brief history of web development"
date: "2026-06-08"
description: "What actually changed and what didn't."
---

The web was invented in 1989 by Tim Berners-Lee at CERN. Most of what gets called innovation is just the same problems being solved again, with better tooling.

## The document model

In the beginning, there was HTML. A file on a server. A browser that rendered it. CSS arrived shortly after and separated structure from presentation. JavaScript added behaviour. Three languages, three responsibilities — a separation of concerns that still holds today.

No build step, no framework, no deployment pipeline. You uploaded a file and it worked. This is still the most reliable deployment model ever invented.

![The document model era](/blog/document-model.svg)

## The PHP decade

Dynamic content changed everything. PHP let the server build HTML on the fly — user data, database queries, business logic, all rendered server-side before the browser saw a single byte. It took over the web almost entirely. WordPress still powers roughly 40% of the internet.

Then Ajax arrived and the browser stopped reloading on every interaction. Gmail and Google Maps showed what the web could actually be. Node.js finished the shift — JavaScript on the server meant one language across the full stack, and PHP's dominance as the server-side language of choice was effectively over. The full-stack developer became a realistic job title.

![The PHP decade](/blog/php-decade.svg)

## Everything is a component

React introduced a component model in 2013 that changed how people thought about UI entirely. Angular, Vue and Svelte followed with their own takes. The single-page application became the default architecture — the server delivered an empty HTML shell, JavaScript took over and rendered everything in the browser.

The Jamstack movement extended this further: pre-built static files, a CDN, a headless CMS. Fast, scalable, deployable anywhere. It peaked, solved real problems and made static sites a serious option again.

![The component era](/blog/components.svg)

## The SSR renaissance

The pendulum is swinging back. Next.js brought server-side rendering back into fashion, this time with the component model intact. The irony is that the most robust applications being built today look a lot like what was being built in the late nineties — content delivered from a server, JavaScript used where it earns its place, HTML doing most of the work.

![The return of the server](/blog/ssr-renaissance.svg)

The tooling is dramatically better. The fundamentals are the same.

The question that separated good developers from fast ones was always the same: do you understand what the tool is doing, or just that it's working? Every major shift in web development produced a wave of developers who could use the new thing without understanding the old one.

That gap is still there. It just moves faster now.
