---
title: "Suica: twenty years ahead"
date: "2026-10-20"
description: "No app to install, no account to make. One card from 2001 that paid for everything."
---

Suica is a prepaid card issued by JR East. The money sits on a chip inside it, you tap it against a reader and the reader subtracts the fare. It launched in **2001** as a replacement for paper train tickets.

I landed at Narita and the only thing I had to do before the first train was create the card in Apple Wallet. No app from the store, no account, no registration, no counter. Three taps in settings, a top-up with a card already in Wallet and the thing was ready before I reached the platform.

For the first day I used it the way it was meant to be used — JR lines, in and out of gates. Then a konbini took it. Then a vending machine. By the end of the week it was paying for everything under a few thousand yen, and the other cards in my wallet hadn't moved.

![Suica card](/blog/suica-card.png)

## What it covers

The range is the part nobody mentions up front. Every JR line, the Tokyo Metro, buses, most private railways. Then everything that isn't transport: konbini, vending machines, coin lockers at stations, taxis, drugstores, fast food, a surprising number of restaurants. One card, half a dozen unrelated industries, and the same gesture for all of them.

What makes that possible is the chip. Suica runs on **FeliCa**, a contactless standard Sony shipped in the nineties, and the money is stored on the card itself rather than on a server somewhere. A terminal reads the balance, subtracts the amount and writes the new one back. Nothing leaves the counter.

That design came out of a hard requirement: a gate in Tokyo cannot wait for a network. At rush hour a ticket gate has to process a card in roughly **200ms** and keep a steady stream of people walking through it without anyone breaking stride. Asking a bank for permission and waiting for an answer doesn't fit in that budget, so the system was built not to ask.

## The details I noticed

The transaction list in Wallet isn't just a column of amounts. Each entry carries an icon for what kind of place it was — a train, a vending machine, a shop — so a day reads back as a route instead of a ledger. That's possible because the terminal writes the merchant type onto the card along with the amount, which means Wallet has something to show beyond the number. It's a small thing that nobody advertises and I noticed it on day one.

![Suica transactions in Apple Wallet](/blog/suica-transactions.png)

**Express Transit** is the setting that makes the rest of it work. Switched on, the card is live without Face ID, without a confirmation, without waking the phone first. You hold the phone near the reader and it's done. Every other contactless payment I use asks me to prove who I am; this one decided that a gate with forty people behind me isn't the place for that question.

Topping up happens wherever I am. The card lives in Wallet, so adding money is a few taps on the phone — no machine to find, no queue, no stopping. A short balance isn't a dead end either: the gate let me through, I topped up on the train and tapped out at the other end without thinking about it.

And it works with no signal. Deep in the metro, in a tunnel, on a train between stations — the card doesn't care, because nothing is being asked over the air. The same property has a second consequence I didn't expect: Power Reserve keeps Suica working for a few hours after the iPhone has shut itself off. A phone with a dead battery still gets you through the gate.

## Breaking a ¥10,000 note

Japan still runs on cash in more places than you'd think, and cash in Japan means coins. The **¥500** piece is a coin, so is **¥100**, and a few purchases later you're carrying a pocket of metal that's worth more than the notes next to it and is twice as annoying to use.

Suica eats all of that. Every small purchase goes on the card, so the coins never accumulate in the first place, and the cash that's left is notes. Which changes what the cash is for. Instead of being the thing you break into change for a bottle of tea, a **¥10,000** note stays whole until there's something worth spending it on — a Hokusai print umbrella, something from Bic Camera, official Nintendo merch in Shibuya. Round numbers, things you carry home.

It's a side effect rather than a feature, and it's the one I'd actually miss.

## Where it stops

Cash-only places exist and you will find them. Small restaurants, older shops, a ticket window here and there. Not often enough to plan around, often enough to keep notes on you.

And the money doesn't follow you home. Whatever is left on the card stays in yen. It isn't lost — [Apple notes](https://support.apple.com/en-us/108772) that when you remove a transit card from a device, the remaining balance is stored and can be transferred to the same or another iPhone or Apple Watch signed in to iCloud with the same Apple Account. So it waits for the next trip. But getting it back as actual money is the part that doesn't travel, and the easy answer is the one JR East suggests anyway: spend it down. Buy something that costs more than the balance, pay what's on the card and the rest in cash.

## In short

Nothing about Suica is individually impressive. The chip is twenty-five years old, the idea is older than that and the card does one thing.

What's impressive is that it asked nothing of me. No app, no account, no signal, no confirmation — and for two weeks, no thought. I haven't had that from a payment system built this decade.
