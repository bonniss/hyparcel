# Hyparcel

A Hyperapp v2 + TailwindCSS + Parcel boilerplate, with PurgeCSS intergrated in production.

## Dependencies

- Hyperapp v2
- Parcel v1.12
- Tailwindcss v1.4

## Get Started

```bash
git clone https://github.com/bonniss/hyparcel.git
cd hyparcel
```

- Install dependencies

```bash
npm install
```

- Run the hot-reloading dev server - http://localhost:1234

```bash
npm run dev
```

- Build assets for production

```bash
npm run prod
```

## Controlling CSS

In development, you should have full power on utilites offered by Tailwind. Therefore, no CSS purging and minification are executed to keep bundling fast.

Tailor Tailwind to your need by [configuring `tailwind.config.js`](https://tailwindcss.com/docs/configuration). The CSS seed file is located at `src/css/main.pcss`. Note that as Purgecss is configured in `postcss.config.js`, you should keep `tailwind.config.js`'s `purge: false` to suppress warnings when bundling for production.

If you want to generate CSS only:

```bash
npm run build:css
```

By default, a verbose output is located at `src/css/style.css`.
