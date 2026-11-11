const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  tabWidth: 2,
  overrides: [
    {
      // Posts are hard-wrapped, so `npm run format` keeps every one of them
      // at the same width. Embedded formatting is off so that only prose
      // moves: on, the wrap also folds a long `description` in the
      // frontmatter onto lines of its own.
      files: "src/content/blog/*.md",
      options: {
        proseWrap: "always",
        printWidth: 75,
        embeddedLanguageFormatting: "off",
      },
    },
  ],
};

export default config;
