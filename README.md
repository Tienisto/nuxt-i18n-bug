# Minimal Reproducible Example

See: https://github.com/nuxt-modules/i18n/issues/2944

Implementation:
1. use `prefix_except_default` or `prefix_and_default`
2. add locale switcher outside of `<NuxtPage>`
3. build SSG (`nuxt generate` / `pnpm run generate`)

Steps to reproduce the issue:
1. Change browser locale to `de-DE` and open the page.
2. It should redirect to `de` version of the page (`http://localhost:3000/de`).
3. Click on `EN` to switch to English version of the page.
4. The error: See that `EN` is disappears (it should not) and also in the console you will see an error: `TypeError: t is null`
