---
title: "The mesh: a simple guide to Tailscale"
date: "2026-08-17"
description: "Not the kind of VPN that hides where you are — the kind that gets you back to your own machines."
---

A VPN is an encrypted tunnel between your device and a server that then talks to the internet on your behalf.

Almost every VPN people know about sells privacy. NordVPN, Proton VPN or a self-hosted OpenVPN server on a cheap VPS — different products, same shape. Your traffic exits somewhere else, the site sees that address instead of yours and the point is to appear somewhere you aren't.

There's a second kind of VPN that solves the opposite problem: not hiding where you are, but reaching machines that were never public to begin with. A server at home, a NAS, a laptop sitting on hotel Wi-Fi. Tailscale is the best known example of that kind.

![Tailscale VPN](/blog/tailscale.svg)

## Under the hood

WireGuard already solved the hard part. It's a small, fast VPN protocol that's been in the Linux kernel since 5.6. What it deliberately doesn't solve is everything around it — you generate keypairs by hand, copy public keys onto every peer, keep the allowed address list in sync and make sure at least one end has a reachable IP and an open port. Fine for three servers, hopeless for ten devices that change networks daily.

Tailscale is the wrapper around that problem, written in Go. You log in with an identity provider and a coordination server distributes public keys and current addresses to your devices, which then use that to punch through NAT and build WireGuard tunnels directly to each other.

_Directly_ is the word doing the work. A traditional VPN is _hub and spoke_: every client dials the same concentrator and everything flows through it, so two machines in the same room talk to each other by sending packets to another continent and back. A mesh drops the middle — every device holds a connection to every other device, and traffic between two of them goes between those two and nowhere else.

![Hub and spoke vs mesh](/blog/mesh-vpn.svg)

The result is a private network — a **tailnet** — where every device gets a stable address in the `100.64.0.0/10` range and a name that resolves everywhere. Same address at home, on mobile data, on someone else's Wi-Fi.

## My setup

There isn't much of one, which is the interesting part. Every device got the app from its respective store, logged in and joined. Nothing went through a terminal, no config file, no keys copied anywhere.

The exit node runs on a machine at home — one setting in the app, one approval in the admin console. It works, but it also means that machine has to stay powered on whenever I want to route through home, which is, to be honest, a weird reason to leave a desktop running. A Raspberry Pi is the obvious replacement: always on, draws almost nothing, does nothing else.

The one thing worth doing in the admin console is the policy file. By default every device on a tailnet can reach every other device and I don't need that — I need the exit node and nothing else:

```json
{
  "acls": [
    {
      "action": "accept",
      "src": ["autogroup:member"],
      "dst": ["autogroup:internet:*"]
    },
    {
      "action": "accept",
      "src": ["autogroup:member"],
      "dst": ["autogroup:self:*"]
    }
  ]
}
```

## The café problem

The scenario everyone reaches for is checking your bank on public Wi-Fi, and the honest answer is that less is at risk there than the marketing suggests. HTTPS is everywhere and nobody in that café is reading your banking session out of the air.

The narrower thing you do get is worth having. Your device stops sharing a local segment with every other machine in the room, and the bank sees the same address it always sees instead of one in whatever city you happen to be in. That second one is what matters in practice — sensitive services read a new IP as a signal, and the response is extra verification, a blocked login, sometimes a locked account while you're travelling.

So: not anonymity. The opposite of it. The IP is always mine, deliberately.

## Killing the port forward

The old way of reaching something at home is to open a port on the router, forward it to an internal address and hope nothing else finds it. Then a dynamic IP that changes, a dynamic DNS client to paper over that and a service exposed to every scanner on the internet whether or not it was ever meant to be.

On a tailnet none of that happens, because there's nothing to expose. The service listens on the machine, the machine is in the network, every other device in the network reaches it by name. The router doesn't change.

Sending files works the same way. **Taildrop** moves a file straight from one of your devices to another — share sheet on the phone, right click on the desktop — with no cloud service in the middle and no cable. macOS to Linux to a phone, none of them caring what the other one is. Same idea as the port forward that never happens: once the devices are on one network, the workaround stops being necessary instead of getting easier.

## In short

One app on every device and a short policy file replaced a port forward, a dynamic DNS client and a file sharing service. Not because any of that was hard, but because it stopped being a problem worth having.
