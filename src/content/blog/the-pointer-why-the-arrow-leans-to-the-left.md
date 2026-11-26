---
title: "The pointer: why the arrow leans to the left"
date: "2026-11-26"
description: "A tilt from Xerox PARC that nobody has straightened in fifty years."
tags: ["apple", "ux", "web"]
---

In December 1968, Douglas Engelbart sat on a stage in San Francisco and
showed an audience a computer mouse for the first time. On the screen
behind him, a small marker followed his hand. His team called it the _bug_.
By most accounts, it pointed straight up.

The arrow we use today leans to the left. On the Mac, on Windows, on Linux
— one edge standing straight, the other cutting across at 45 degrees.
Screens have changed beyond recognition since then, yet the angle hasn't.

## Fifty years at an angle

The lean comes from Xerox PARC, where the Alto put a bitmap display and a
mouse on the same desk in 1973. The explanation that stuck — repeated far
more often than it's sourced — is about pixels.

On a coarse grid, an upright arrow is two diagonal lines meeting at a
point, and a diagonal drawn in square pixels comes out as a ragged
staircase. Tilt the arrow and one of those edges becomes a straight column
of pixels. The other one lands at exactly 45 degrees, the diagonal a pixel
grid draws most cleanly, one pixel per step. The result is sharper, and it
doesn't look like any character in the text around it.

![Upright vs tilted](/blog/pointer-upright-vs-tilted.svg "760x310")

The tilted arrow made its way from PARC to the Lisa, the Mac and eventually
Windows. Nobody had a reason to straighten it, and after a while nobody
could.

## The hot spot

A pointer is a picture of a single point. Only the hot spot counts — the
rest of the arrow is there so you can find it.

An arrow pointing up and to the left can place its hot spot at the origin
of the image: `0 0`. CSS uses that same origin when neither the `cursor`
declaration nor the image itself specifies a hot spot. Other shapes may
need explicit coordinates.

The prime pixel from
[the post on Fitts's law](/blog/fitts-law-why-the-menu-bar-is-at-the-top) —
the one under the pointer right now — is that tip and nothing else.

## Black and white

A pointer can end up over anything: a white page, a black terminal, a photo
with both. Any single color disappears somewhere. So the pointer is never
one color.

The arrow on the Mac has been black with a white outline since 1984.
Windows went the other way, with white and a black outline. Both are
visible on every background; they just start from opposite ends.

Since Monterey, macOS lets you pick both colors — today in
`System Settings > Accessibility > Display`, under **Pointer**, next to the
size slider and **Shake mouse pointer to locate**. Choose an outline and a
fill that are too close and the pointer vanishes over half the screen,
which is exactly why the defaults are two colors that couldn't be further
apart. The same goes for anyone drawing a custom cursor for a page: give it
an outline in the opposite color or it disappears halfway down.

## A cursor is a sentence

The shape says what a click will do before you click. The arrow promises
nothing in particular, the I-beam says a caret goes here, the hand says
this goes somewhere and the circle with a line through it says not here.

On the desktop, the hand traditionally belongs to links. Buttons in native
apps keep the arrow, because a button already looks like something you
press. The web has argued about this for years. Tailwind's Preflight gave
every button `cursor: pointer` up to v3; v4 removed it, matching what
browsers and operating systems do on their own. Both camps have a point —
the arrow is the convention of the platform, the hand is what years of web
pages taught people to look for.

The opposite case is less of a debate. Every disabled control I build gets
Tailwind's `cursor-not-allowed`, because the pointer should say no before
the click does.

```html
<button class="disabled:cursor-not-allowed disabled:opacity-50" disabled>
  Save
</button>
```

The `disabled:` variant only applies while the button actually is disabled.
The cursor communicates the disabled state; it doesn't enforce it — the
`disabled` attribute does. Leave out `pointer-events: none`, which a lot of
disabled styles reach for: an element that ignores the pointer doesn't get
to choose its shape either, so the cursor comes from whatever is underneath
and the `not-allowed` never shows.

## Every cursor CSS knows

The `cursor` property takes 36 keywords. MDN sorts them into six groups.

**General.** `auto` lets the browser decide — an I-beam over text, an arrow
everywhere else. `default` is the arrow of the platform regardless of
what's underneath. `none` hides the pointer entirely, for games, kiosks and
video players.

**Links and status.** `pointer` is the hand. `help` adds a question mark
and `context-menu` says a menu is available. `progress` and `wait` both
mean busy, and the difference matters: `progress` is busy in the background
with the page still usable, `wait` is nothing will respond until it's done.
Most loading states want `progress`.

**Selection.** `text` is the I-beam and `vertical-text` its sideways twin
for vertical writing. `cell` is the thick plus from spreadsheets.
`crosshair` is for precise picking — color pickers, cropping, drawing.

**Drag and drop.** `grab` for something that can be dragged and `grabbing`
while it is. `move` for something being moved, `copy` and `alias` for a
drop that will copy it or make a shortcut. `no-drop` and `not-allowed` for
a drop or an action that won't happen — on macOS and Windows some browsers
draw the two the same.

**Resizing and scrolling.** `col-resize` and `row-resize` for the divider
between columns and rows. Eight one-way edges from `n-resize` to
`nw-resize` and four two-way ones: `ew-resize`, `ns-resize`, `nesw-resize`
and `nwse-resize`. Some systems draw the one-way cursors as two-way anyway,
and an edge can almost always be dragged both ways, so the two-way ones are
the safer pick. `all-scroll` is for panning in any direction.

**Zooming.** `zoom-in` and `zoom-out`, the magnifying glass with a plus or
a minus. The image you can click to enlarge is the obvious use.

Past the keywords, a cursor can be any image:

```css
.canvas {
  cursor: url("/cursors/pen.svg") 2 30, crosshair;
}
```

The two numbers are the hot spot, in image pixels from the top-left corner
— here the nib of a pen drawn pointing down and to the left in a 32 by 32
image. The keyword at the end isn't optional: CSS requires a fallback for
when the image doesn't load. Neither is restraint. Firefox and Chromium
ignore cursor images larger than 128 by 128 pixels by default and MDN
recommends staying at 32 by 32.

## When the arrow became a circle

A mouse had worked on the iPad since 2019, through AssistiveTouch, as an
accessibility feature. In March 2020, iPadOS 13.4 made trackpad and mouse
support a regular feature, and its pointer wasn't an arrow. It was a gray
circle about the size of a fingertip, because everything underneath it had
been built for fingers. Over a button, the circle snapped onto it and took
its shape. Over text, it turned into an I-beam. The same circle shows up on
an iPhone today, through AssistiveTouch.

It was one of the most prominent departures from the desktop arrow in
decades, and it lasted five years. iPadOS 26 — the same release that
brought a new windowing system and a menu bar to the iPad — replaced the
circle with a pointed arrow, for precision.

## Still leaning

Nothing about a modern display needs the tilt. On a Retina display, the
staircases are barely perceptible. An upright arrow could look just as
sharp. The reason is gone and the shape stayed, because by now everyone
knows what it means.

The arrow doesn't lean left for the pixels anymore. It leans left because
that's what pointing looks like.
