---
title: "Enter curl"
date: "2026-07-08"
description: "A tool built to fetch one URL in 1998. Still the fastest way to know what's actually happening on the wire."
---

curl was born in 1996 as httpget, a small tool written by [Daniel Stenberg](https://github.com/bagder) to download currency rates for an IRC bot. He renamed it twice as it grew — urlget once FTP support landed, then curl in 1998 once the tool did more than just "get." He's still the project's lead maintainer today.

![curl - Client URL Request Library](/blog/curl.png)

Every GUI REST client eventually reinvents a piece of what curl already does — a request builder, a history panel, a collection runner. curl never needed any of that. It just never left.

## Anatomy of a URL

A URL — Uniform Resource Locator — is the address of a single resource on a network: a scheme, a host and a path, in that order, so that anything speaking the protocol knows exactly where to look.

```
scheme://user:password@host:port/path?query#fragment
```

The scheme decides everything that follows. `http://` and `https://` point at a web server, but the same structure works for `ftp://` a file server, `ssh://` a remote shell, `smtp://` a mail server. curl's entire job is reading that scheme and fetching whatever sits behind it — one tool, one syntax, whichever protocol is actually doing the work underneath.

## HTTP methods

Every HTTP request carries a method — a verb telling the server what kind of operation this is. curl defaults to GET unless told otherwise, and switches with `-X`. httpbin.org echoes back whatever it receives, which makes it the easiest way to watch a method in action without touching a real API.

**GET**:

```bash
curl https://httpbin.org/get
```

Just remember to put quotes once you're sending a query string:

```bash
curl "https://httpbin.org/get?x=1&y=2"
```

**POST**:

```bash
curl -X POST https://httpbin.org/post --json '{"name": "Bruce"}'
```

The same `--json` flag works for **PUT**, **PATCH** and **DELETE**:

```bash
curl -X PUT https://httpbin.org/put --json '{"id": "1", "name": "Clark"}'

curl -X PATCH https://httpbin.org/patch --json '{"id": "1", "alias": "Superman"}'

curl -X DELETE https://httpbin.org/delete --json '{"id": "1"}'
```

`--json` is a fairly recent shorthand — it landed in curl 7.82 (2022). Before that, the same request meant setting the header by hand:

```bash
curl -X POST https://httpbin.org/post \
  -H "Content-Type: application/json" \
  -d '{"name": "Bruce"}'
```

`--json` does exactly that, plus adds `Accept: application/json` — one flag standing in for two.

Not everything is JSON, though. A traditional HTML form sends `application/x-www-form-urlencoded`, and curl sets that header on its own the moment `-d` gets a plain key-value string instead of a JSON blob:

```bash
curl -X POST https://httpbin.org/post -d "name=Bruce&role=vigilante"
```

No `--json`, no manual header — just `-d` and a query-string-shaped body.

## Headers

Headers carry metadata about a request or a response — content type, authentication, caching rules, anything that isn't the body itself. curl adds them with `-H` and stacks as many as the request needs:

```bash
curl https://httpbin.org/headers \
  -H "Authorization: Bearer 1234" \
  -H "X-Request-Id: 42"
```

httpbin's `/headers` endpoint just echoes back whatever curl sent, same trick as `/get` and `/post` above, now applied to headers instead of the body.

Seeing what a server sends back is a separate question:

```bash
curl -i https://httpbin.org/get
```

A redirect is just a response with a `Location` header and a 3xx status — `-i` shows it plainly, without going anywhere:

```bash
curl -i "https://httpbin.org/redirect-to?url=https://example.com"
```

curl stops there by default. Actually landing on the destination needs `-L`:

```bash
curl -L "https://httpbin.org/redirect-to?url=https://example.com"
```

Without it, a script expecting the final page ends up parsing a redirect response instead.

## Of cookies and sessions

HTTP has no memory of its own — every request starts from zero, which is the entire reason sessions exist. A cookie is just a header the server asks the client to hold onto and resend, and curl has to be told to actually do that.

```bash
curl -c cookies.txt -L https://httpbin.org/cookies/set/session_id/abc123
```

**Note:** `-L` is only there because of how httpbin behaves — `/cookies/set/...` always replies with a redirect to `/cookies` after setting the cookie. Without `-L`, curl prints the redirect page instead of confirmation that the cookie stuck. The cookie itself lands in `cookies.txt` either way; the `Set-Cookie` header arrives with the redirect response, before curl even decides whether to follow it.

`-c` writes whatever cookies the response sets into a file. The next request reads from it and sends them back automatically:

```bash
curl -b cookies.txt https://httpbin.org/cookies
```

Point `-b` and `-c` at the same file and curl keeps updating it on every request — a jar that behaves like a browser tab that never closes, sending back whatever it was given, request after request.

## Debugging

Everything above assumes the request behaves. When it doesn't, `-v` (`--verbose`) is the first thing to reach for — it prints the entire exchange, not just the result:

```bash
curl -v https://httpbin.org/get
```

Lines starting with `>` are what curl sent, `<` is what came back and `*` is curl narrating what it's doing in between — DNS lookup, TLS handshake, connection reuse. Most "it works in Postman but not in my script" problems show up somewhere in the first ten lines of that output.

Timing is a different kind of question — not what went wrong, but how slow it was. `-w` (`--write-out`) prints details after the response finishes, instead of guessing from a stopwatch:

```bash
curl -o /dev/null -s -w "%{time_total}\n" https://httpbin.org/get
```

`-o /dev/null` throws away the body, `-s` hides the progress bar, and `-w` prints the one number that matters — total time, in seconds.

`-w` isn't limited to one number — stack the same idea across every stage of the request instead of just the total:

```bash
curl -o /dev/null -s -w "\
dns: %{time_namelookup}s\n\
connect: %{time_connect}s\n\
tls: %{time_appconnect}s\n\
ttfb: %{time_starttransfer}s\n\
total: %{time_total}s\n" \
https://httpbin.org/get
```

Each variable marks a cumulative point in the request — DNS lookup, TCP connect, TLS handshake, time to first byte. The gap between two lines is exactly how long that stage took, no separate tool required.

## Pairing with other tools

curl fetches. It doesn't parse, format or visualize — and it was never supposed to. It pipes into whatever does that job better.

**jq** turns a JSON response into something readable, filterable, or just the one field actually needed:

```bash
curl -s https://httpbin.org/get | jq '.headers["User-Agent"]'
```

## The GUI never replaced it

Postman has a request builder. Insomnia has environment switching. Bruno commits collections to git. Every generation of API client solves the same problem curl solved in 1998 by never having it in the first place — a request is just a line of text, and a line of text doesn't need an interface wrapped around it.

That's the part that doesn't change. The GUI gets rebuilt every few years under a new name. The line curl prints still pastes into a bug report, a CI script or a Slack message and means exactly the same thing every time.
