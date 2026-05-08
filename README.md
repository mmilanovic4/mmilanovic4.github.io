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

- [Checkout](https://github.com/actions/checkout)
- [Setup Node.js](https://github.com/actions/setup-node)
- [Setup Pages](https://github.com/actions/configure-pages)
- [Upload artifact](https://github.com/actions/upload-pages-artifact)
- [Deploy to GitHub Pages](https://github.com/actions/deploy-pages)

## Env

| Variable            | Description                                              |
| ------------------- | -------------------------------------------------------- |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID                                      |
| `NEXT_PUBLIC_THEME` | Color theme (`blue`, `mint`, `green`, `violet`, `amber`) |
