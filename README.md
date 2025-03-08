This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```

├─ .next
├─ README.md
├─ app
│  ├─ api
│  │  └─ auth
│  │     ├─ login
│  │     │  └─ route.ts
│  │     ├─ logout
│  │     │  └─ route.ts
│  │     ├─ register
│  │     │  └─ route.ts
│  │     └─ user
│  │        └─ route.ts
│  ├─ dashboard
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ settings
│  │  │  └─ page.tsx
│  │  └─ users
│  │     ├─ [id]
│  │     │  ├─ edit
│  │     │  │  └─ page.tsx
│  │     │  └─ page.tsx
│  │     ├─ loading.tsx
│  │     └─ page.tsx
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ login
│  │  └─ page.tsx
│  ├─ page.tsx
│  ├─ register
│  │  └─ page.tsx
│  └─ utils
│     ├─ ApiRequest.ts
│     ├─ http.ts
│     ├─ httpRequest.ts
│     └─ keyStoreSymbol.ts
├─ components
│  ├─ dashboard
│  │  ├─ create-user-dialog.tsx
│  │  ├─ dashboard-header.tsx
│  │  ├─ dashboard-sidebar.tsx
│  │  ├─ dashboard-stats.tsx
│  │  ├─ overview-chart.tsx
│  │  ├─ recent-activity.tsx
│  │  └─ user-table-actions.tsx
│  └─ ui
│     ├─ alert-dialog.tsx
│     ├─ avatar.tsx
│     ├─ button.tsx
│     ├─ card.tsx
│     ├─ dialog.tsx
│     ├─ dropdown-menu.tsx
│     ├─ input.tsx
│     ├─ label.tsx
│     ├─ pagination.tsx
│     ├─ select.tsx
│     ├─ separator.tsx
│     ├─ sheet.tsx
│     ├─ skeleton.tsx
│     ├─ sonner.tsx
│     ├─ switch.tsx
│     ├─ table.tsx
│     ├─ tabs.tsx
│     ├─ toast.tsx
│     └─ toaster.tsx
├─ components.json
├─ eslint.config.mjs
├─ hooks
│  ├─ use-toast.ts
│  ├─ use-user.ts
│  └─ use-users.ts
├─ lib
│  ├─ api
│  │  └─ users.ts
│  ├─ api.ts
│  ├─ auth-actions.ts
│  ├─ auth-provider.tsx
│  ├─ auth-store.ts
│  ├─ cookies.ts
│  └─ utils.ts
├─ middleware.ts
├─ next.config.mjs
├─ next.config.ts
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ tailwind.config.js
├─ tailwind.config.ts
├─ tsconfig.json
└─ yarn.lock

```