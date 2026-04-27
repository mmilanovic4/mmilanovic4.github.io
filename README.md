# Personal website

[mmilanovic4.github.io](https://mmilanovic4.github.io)

## Stack

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Simple Icons](https://github.com/icons-pack/react-simple-icons)
- [Flag Icons](https://github.com/lipis/flag-icons)

## Development

```bash
npm install
npm run dev
```

## Deployment

Automatically deployed to GitHub Pages via GitHub Actions on push to `master`.

- [Checkout](https://github.com/actions/checkout) — clones the repository in the CI environment
- [Setup Node.js](https://github.com/actions/setup-node) — installs the correct Node.js version
- [GitHub Pages Deploy](https://github.com/JamesIves/github-pages-deploy-action) — deploys the static output to the `gh-pages` branch

## Env

| Variable            | Description                                              |
| ------------------- | -------------------------------------------------------- |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID                                      |
| `NEXT_PUBLIC_THEME` | Color theme (`blue`, `mint`, `green`, `violet`, `amber`) |
