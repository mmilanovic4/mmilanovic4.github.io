---
title: "A domain of your own"
date: "2026-06-22"
description: "Hosting, redirects and a mailbox that isn't one — all from one domain on Cloudflare."
---

You rent almost everything online — your handle on a platform, your storage, your reach. A domain is different. You own it. Point it wherever you want, move it whenever you want and it keeps working even after the platform underneath changes.

This is the setup behind `milos.fyi`. One domain, three jobs:

- Hosting a static site
- Redirecting an old domain I stopped using
- Routing a mailbox that isn't really a mailbox

Cloudflare runs all three and almost none of it costs anything beyond the domain.

## Registering the domain and connecting it to hosting

Buying the domain is the only step that costs money. Any registrar works. After that, point its nameservers at Cloudflare. From here on, Cloudflare handles DNS, the CDN and everything else in this post.

For hosting, the cheapest reliable option is a static site on **GitHub Pages**. You need a repo, your domain set as the custom domain in repo settings and these DNS records:

```
A      milos.fyi        185.199.108.153
A      milos.fyi        185.199.109.153
A      milos.fyi        185.199.110.153
A      milos.fyi        185.199.111.153
CNAME  www.milos.fyi    mmilanovic4.github.io
```

Set all of them to **Proxied** (orange cloud) in Cloudflare. Traffic now goes through Cloudflare's edge before it reaches GitHub. You get free TLS, a CDN and DDoS protection on top of free hosting.

**Cloudflare Pages** does the same job without leaving the dashboard. Point it at your repo, it builds the site and serves it from Cloudflare's edge. One fewer provider, same result. Either way: static files, a CDN in front, nothing to maintain.

## Redirecting the old domain

At some point you get a better domain. The old one still has links pointing to it — old posts, old profiles, maybe an old email address. Don't let those links break. Redirect them and lock the old domain down so it can't be used against you later.

Here's how `mmilanovic4.dev` redirects to `milos.fyi`:

```
mmilanovic4.dev          A      192.0.2.1                Proxied
www.mmilanovic4.dev      CNAME  mmilanovic4.dev          Proxied
```

`192.0.2.1` isn't a real server. It's a reserved address (RFC 5737) that resolves to nothing. It doesn't need to be real, because the record is **Proxied** — Cloudflare's edge intercepts the request before it tries to reach that IP. The actual redirect happens in a **Redirect Rule**:

- **When:** hostname equals `mmilanovic4.dev` or `www.mmilanovic4.dev`
- **Then:** `301` redirect to `https://milos.fyi` + the original path and query string

Use `301`, not `302`. It tells browsers and search engines the move is permanent, so old links keep resolving and search indexes update. One rule covers every path.

### Locking the door on the way out

Redirecting the site isn't enough. A domain you've stopped using for mail can still be used to send mail — by someone else, pretending to be you. Add these three records, set to **DNS only** (grey cloud, not proxied):

```
mmilanovic4.dev                  TXT  "v=spf1 -all"
*._domainkey.mmilanovic4.dev     TXT  "v=DKIM1; p="
_dmarc.mmilanovic4.dev           TXT  "v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s;"
```

- **SPF** (`-all`) says no server is allowed to send mail as this domain.
- **DKIM** with an empty `p=` publishes a null key, so nothing can ever pass as signed by this domain.
- **DMARC** with `p=reject; sp=reject` tells receiving servers to reject anything claiming to be from `mmilanovic4.dev` or any subdomain that fails alignment. `adkim=s; aspf=s` make that alignment strict.

All three say the same thing: this domain sends no mail, so reject anything that claims otherwise. Keep these **DNS only**. Cloudflare's proxy only handles HTTP(S); mail servers need to read the raw TXT record directly.

## Setting up email routing on Cloudflare

You want an address like `hello@milos.fyi`, but you don't want to run a mailserver, pay for a mailbox, or hand your real inbox to every signup form online. **Cloudflare Email Routing** solves this: it receives mail for your domain and forwards it to an inbox you already have. Free, same dashboard.

You need three things:

1. **The domain on Cloudflare DNS.** Already done above.
2. **MX, SPF and DKIM records.** Cloudflare generates these for you, one click.
3. **A destination address and a routing rule.** Add your real inbox under **Destination Addresses**, verify it, then add a rule: `hello@milos.fyi` → that inbox.

Test it from a different account, not the destination — some providers drop mail sent to yourself. Check spam the first few times.

### Turn on catch-all

Instead of one address, enable **catch-all**. Now every address on the domain forwards to your inbox. Use a different address per service:

- `github@milos.fyi`
- `youtube@milos.fyi`
- `instagram@milos.fyi`

Everything lands in the same inbox, but the `To:` field tells you which service leaked your address. Explicit rules still beat catch-all, so `hello@` keeps working as before. If an address gets sold or leaked, delete the rule. It stops existing.

### What it doesn't do

Email Routing only receives mail. Reply to a forwarded message and it goes out from your real address, not from `hello@milos.fyi`. For a public contact address, that's usually what you want. You can send _as_ the domain through your provider's SMTP, but it fights a strict DMARC policy and lands in spam until reputation builds up. If receiving is the goal, leave sending alone and keep DMARC strict — same reason as on the old domain: it stops anyone from spoofing mail as you.

## What you end up with

A site on the edge. An old domain that forwards every link instead of breaking them and can't send mail in your name. A public mailbox that protects the real one underneath it. Three problems, usually three providers and a server — solved with DNS records and a few rules, on the one piece of the internet you actually own.
