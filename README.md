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
side-build
├─ .next
│  ├─ app-build-manifest.json
│  ├─ build
│  │  └─ chunks
│  │     ├─ [root of the server]__05f88b._.js
│  │     ├─ [root of the server]__05f88b._.js.map
│  │     ├─ [root of the server]__fd836e._.js
│  │     ├─ [root of the server]__fd836e._.js.map
│  │     ├─ [turbopack]_runtime.js
│  │     ├─ [turbopack]_runtime.js.map
│  │     ├─ postcss_config_mjs_transform_ts_89c7e7._.js
│  │     └─ postcss_config_mjs_transform_ts_89c7e7._.js.map
│  ├─ build-manifest.json
│  ├─ cache
│  │  └─ .rscinfo
│  ├─ fallback-build-manifest.json
│  ├─ package.json
│  ├─ react-loadable-manifest.json
│  ├─ server
│  │  ├─ app
│  │  │  ├─ _not-found
│  │  │  │  ├─ page
│  │  │  │  │  ├─ app-build-manifest.json
│  │  │  │  │  ├─ app-paths-manifest.json
│  │  │  │  │  ├─ build-manifest.json
│  │  │  │  │  ├─ next-font-manifest.json
│  │  │  │  │  ├─ react-loadable-manifest.json
│  │  │  │  │  └─ server-reference-manifest.json
│  │  │  │  ├─ page.js
│  │  │  │  ├─ page.js.map
│  │  │  │  └─ page_client-reference-manifest.js
│  │  │  ├─ api
│  │  │  │  └─ auth
│  │  │  │     ├─ login
│  │  │  │     │  ├─ route
│  │  │  │     │  │  ├─ app-build-manifest.json
│  │  │  │     │  │  ├─ app-paths-manifest.json
│  │  │  │     │  │  ├─ build-manifest.json
│  │  │  │     │  │  ├─ next-font-manifest.json
│  │  │  │     │  │  ├─ react-loadable-manifest.json
│  │  │  │     │  │  └─ server-reference-manifest.json
│  │  │  │     │  ├─ route.js
│  │  │  │     │  ├─ route.js.map
│  │  │  │     │  └─ route_client-reference-manifest.js
│  │  │  │     ├─ register
│  │  │  │     │  ├─ route
│  │  │  │     │  │  ├─ app-build-manifest.json
│  │  │  │     │  │  ├─ app-paths-manifest.json
│  │  │  │     │  │  ├─ build-manifest.json
│  │  │  │     │  │  ├─ next-font-manifest.json
│  │  │  │     │  │  ├─ react-loadable-manifest.json
│  │  │  │     │  │  └─ server-reference-manifest.json
│  │  │  │     │  ├─ route.js
│  │  │  │     │  ├─ route.js.map
│  │  │  │     │  └─ route_client-reference-manifest.js
│  │  │  │     └─ user
│  │  │  │        ├─ route
│  │  │  │        │  ├─ app-build-manifest.json
│  │  │  │        │  ├─ app-paths-manifest.json
│  │  │  │        │  ├─ build-manifest.json
│  │  │  │        │  ├─ next-font-manifest.json
│  │  │  │        │  ├─ react-loadable-manifest.json
│  │  │  │        │  └─ server-reference-manifest.json
│  │  │  │        ├─ route.js
│  │  │  │        ├─ route.js.map
│  │  │  │        └─ route_client-reference-manifest.js
│  │  │  ├─ dashboard
│  │  │  │  ├─ page
│  │  │  │  │  ├─ app-build-manifest.json
│  │  │  │  │  ├─ app-paths-manifest.json
│  │  │  │  │  ├─ build-manifest.json
│  │  │  │  │  ├─ next-font-manifest.json
│  │  │  │  │  ├─ react-loadable-manifest.json
│  │  │  │  │  └─ server-reference-manifest.json
│  │  │  │  ├─ page.js
│  │  │  │  ├─ page.js.map
│  │  │  │  ├─ page_client-reference-manifest.js
│  │  │  │  ├─ settings
│  │  │  │  │  ├─ page
│  │  │  │  │  │  ├─ app-build-manifest.json
│  │  │  │  │  │  ├─ app-paths-manifest.json
│  │  │  │  │  │  ├─ build-manifest.json
│  │  │  │  │  │  ├─ next-font-manifest.json
│  │  │  │  │  │  ├─ react-loadable-manifest.json
│  │  │  │  │  │  └─ server-reference-manifest.json
│  │  │  │  │  ├─ page.js
│  │  │  │  │  ├─ page.js.map
│  │  │  │  │  └─ page_client-reference-manifest.js
│  │  │  │  └─ users
│  │  │  │     ├─ [id]
│  │  │  │     │  ├─ edit
│  │  │  │     │  │  ├─ page
│  │  │  │     │  │  │  ├─ app-build-manifest.json
│  │  │  │     │  │  │  ├─ app-paths-manifest.json
│  │  │  │     │  │  │  ├─ build-manifest.json
│  │  │  │     │  │  │  ├─ next-font-manifest.json
│  │  │  │     │  │  │  ├─ react-loadable-manifest.json
│  │  │  │     │  │  │  └─ server-reference-manifest.json
│  │  │  │     │  │  ├─ page.js
│  │  │  │     │  │  ├─ page.js.map
│  │  │  │     │  │  └─ page_client-reference-manifest.js
│  │  │  │     │  ├─ page
│  │  │  │     │  │  ├─ app-build-manifest.json
│  │  │  │     │  │  ├─ app-paths-manifest.json
│  │  │  │     │  │  ├─ build-manifest.json
│  │  │  │     │  │  ├─ next-font-manifest.json
│  │  │  │     │  │  ├─ react-loadable-manifest.json
│  │  │  │     │  │  └─ server-reference-manifest.json
│  │  │  │     │  ├─ page.js
│  │  │  │     │  ├─ page.js.map
│  │  │  │     │  └─ page_client-reference-manifest.js
│  │  │  │     ├─ page
│  │  │  │     │  ├─ app-build-manifest.json
│  │  │  │     │  ├─ app-paths-manifest.json
│  │  │  │     │  ├─ build-manifest.json
│  │  │  │     │  ├─ next-font-manifest.json
│  │  │  │     │  ├─ react-loadable-manifest.json
│  │  │  │     │  └─ server-reference-manifest.json
│  │  │  │     ├─ page.js
│  │  │  │     ├─ page.js.map
│  │  │  │     └─ page_client-reference-manifest.js
│  │  │  ├─ favicon.ico
│  │  │  │  ├─ route
│  │  │  │  │  ├─ app-paths-manifest.json
│  │  │  │  │  ├─ next-font-manifest.json
│  │  │  │  │  └─ react-loadable-manifest.json
│  │  │  │  ├─ route.js
│  │  │  │  └─ route.js.map
│  │  │  ├─ login
│  │  │  │  ├─ page
│  │  │  │  │  ├─ app-build-manifest.json
│  │  │  │  │  ├─ app-paths-manifest.json
│  │  │  │  │  ├─ build-manifest.json
│  │  │  │  │  ├─ next-font-manifest.json
│  │  │  │  │  ├─ react-loadable-manifest.json
│  │  │  │  │  └─ server-reference-manifest.json
│  │  │  │  ├─ page.js
│  │  │  │  ├─ page.js.map
│  │  │  │  └─ page_client-reference-manifest.js
│  │  │  ├─ page
│  │  │  │  ├─ app-build-manifest.json
│  │  │  │  ├─ app-paths-manifest.json
│  │  │  │  ├─ build-manifest.json
│  │  │  │  ├─ next-font-manifest.json
│  │  │  │  ├─ react-loadable-manifest.json
│  │  │  │  └─ server-reference-manifest.json
│  │  │  ├─ page.js
│  │  │  ├─ page.js.map
│  │  │  ├─ page_client-reference-manifest.js
│  │  │  └─ register
│  │  │     ├─ page
│  │  │     │  ├─ app-build-manifest.json
│  │  │     │  ├─ app-paths-manifest.json
│  │  │     │  ├─ build-manifest.json
│  │  │     │  ├─ next-font-manifest.json
│  │  │     │  ├─ react-loadable-manifest.json
│  │  │     │  └─ server-reference-manifest.json
│  │  │     ├─ page.js
│  │  │     ├─ page.js.map
│  │  │     └─ page_client-reference-manifest.js
│  │  ├─ app-paths-manifest.json
│  │  ├─ chunks
│  │  │  ├─ [root of the server]__022459._.js
│  │  │  ├─ [root of the server]__022459._.js.map
│  │  │  ├─ [root of the server]__735097._.js
│  │  │  ├─ [root of the server]__735097._.js.map
│  │  │  ├─ [root of the server]__cac460._.js
│  │  │  ├─ [root of the server]__cac460._.js.map
│  │  │  ├─ [root of the server]__dcfbc3._.js
│  │  │  ├─ [root of the server]__dcfbc3._.js.map
│  │  │  ├─ [root of the server]__ec672a._.js
│  │  │  ├─ [root of the server]__ec672a._.js.map
│  │  │  ├─ [turbopack]_runtime.js
│  │  │  ├─ [turbopack]_runtime.js.map
│  │  │  ├─ _03b54d._.js
│  │  │  ├─ _03b54d._.js.map
│  │  │  ├─ _2daa17._.js
│  │  │  ├─ _2daa17._.js.map
│  │  │  ├─ _ae1b71._.js
│  │  │  ├─ _ae1b71._.js.map
│  │  │  └─ ssr
│  │  │     ├─ [next]_internal_font_google_inter_59dee874_module_b52d8e.css
│  │  │     ├─ [next]_internal_font_google_inter_59dee874_module_b52d8e.css.map
│  │  │     ├─ [root of the server]__0e09e4._.js
│  │  │     ├─ [root of the server]__0e09e4._.js.map
│  │  │     ├─ [root of the server]__1877bd._.js
│  │  │     ├─ [root of the server]__1877bd._.js.map
│  │  │     ├─ [root of the server]__33bd1d._.css
│  │  │     ├─ [root of the server]__33bd1d._.css.map
│  │  │     ├─ [root of the server]__4c581a._.js
│  │  │     ├─ [root of the server]__4c581a._.js.map
│  │  │     ├─ [root of the server]__592060._.js
│  │  │     ├─ [root of the server]__592060._.js.map
│  │  │     ├─ [root of the server]__5f24be._.js
│  │  │     ├─ [root of the server]__5f24be._.js.map
│  │  │     ├─ [root of the server]__688d87._.js
│  │  │     ├─ [root of the server]__688d87._.js.map
│  │  │     ├─ [root of the server]__77eed1._.js
│  │  │     ├─ [root of the server]__77eed1._.js.map
│  │  │     ├─ [root of the server]__86e789._.js
│  │  │     ├─ [root of the server]__86e789._.js.map
│  │  │     ├─ [root of the server]__87966d._.js
│  │  │     ├─ [root of the server]__87966d._.js.map
│  │  │     ├─ [root of the server]__b2c56b._.js
│  │  │     ├─ [root of the server]__b2c56b._.js.map
│  │  │     ├─ [root of the server]__cfce41._.js
│  │  │     ├─ [root of the server]__cfce41._.js.map
│  │  │     ├─ [root of the server]__d4a2ae._.js
│  │  │     ├─ [root of the server]__d4a2ae._.js.map
│  │  │     ├─ [root of the server]__d735f2._.js
│  │  │     ├─ [root of the server]__d735f2._.js.map
│  │  │     ├─ [root of the server]__e084d6._.js
│  │  │     ├─ [root of the server]__e084d6._.js.map
│  │  │     ├─ [root of the server]__e237d7._.js
│  │  │     ├─ [root of the server]__e237d7._.js.map
│  │  │     ├─ [turbopack]_runtime.js
│  │  │     ├─ [turbopack]_runtime.js.map
│  │  │     ├─ _072603._.js
│  │  │     ├─ _072603._.js.map
│  │  │     ├─ _107235._.js
│  │  │     ├─ _107235._.js.map
│  │  │     ├─ _143deb._.js
│  │  │     ├─ _143deb._.js.map
│  │  │     ├─ _379e75._.js
│  │  │     ├─ _379e75._.js.map
│  │  │     ├─ _533707._.js
│  │  │     ├─ _533707._.js.map
│  │  │     ├─ _7a7656._.js
│  │  │     ├─ _7a7656._.js.map
│  │  │     ├─ _84aab7._.js
│  │  │     ├─ _84aab7._.js.map
│  │  │     ├─ _867195._.js
│  │  │     ├─ _867195._.js.map
│  │  │     ├─ _93afeb._.js
│  │  │     ├─ _93afeb._.js.map
│  │  │     ├─ _93d82b._.js
│  │  │     ├─ _93d82b._.js.map
│  │  │     ├─ _c954b4._.js
│  │  │     ├─ _c954b4._.js.map
│  │  │     ├─ _cae6af._.js
│  │  │     ├─ _cae6af._.js.map
│  │  │     ├─ _caf2fa._.js
│  │  │     ├─ _caf2fa._.js.map
│  │  │     ├─ _d1438a._.js
│  │  │     ├─ _d1438a._.js.map
│  │  │     ├─ _d2c2f3._.js
│  │  │     ├─ _d2c2f3._.js.map
│  │  │     ├─ _ecb06b._.js
│  │  │     ├─ _ecb06b._.js.map
│  │  │     ├─ _f5297e._.js
│  │  │     ├─ _f5297e._.js.map
│  │  │     ├─ _fa1551._.js
│  │  │     ├─ _fa1551._.js.map
│  │  │     ├─ app_dashboard_layout_tsx_9efbc5._.js
│  │  │     ├─ app_dashboard_layout_tsx_9efbc5._.js.map
│  │  │     ├─ app_dashboard_users_loading_tsx_c58c47._.js
│  │  │     ├─ app_dashboard_users_loading_tsx_c58c47._.js.map
│  │  │     ├─ app_db13a2._.js
│  │  │     ├─ app_db13a2._.js.map
│  │  │     ├─ app_globals_b52d8e.css
│  │  │     └─ app_globals_b52d8e.css.map
│  │  ├─ edge
│  │  │  └─ chunks
│  │  │     ├─ [root of the server]__13836c._.js
│  │  │     ├─ [root of the server]__13836c._.js.map
│  │  │     ├─ [root of the server]__64a326._.js
│  │  │     ├─ [root of the server]__64a326._.js.map
│  │  │     ├─ [root of the server]__70655b._.js
│  │  │     ├─ [root of the server]__70655b._.js.map
│  │  │     ├─ _4a4938._.js
│  │  │     ├─ _4a4938._.js.map
│  │  │     ├─ edge-wrapper_336ca1.js
│  │  │     ├─ edge-wrapper_336ca1.js.map
│  │  │     ├─ edge-wrapper_4c58f2.js
│  │  │     ├─ edge-wrapper_4c58f2.js.map
│  │  │     ├─ edge-wrapper_c72234.js
│  │  │     └─ edge-wrapper_c72234.js.map
│  │  ├─ interception-route-rewrite-manifest.js
│  │  ├─ middleware
│  │  │  └─ middleware-manifest.json
│  │  ├─ middleware-build-manifest.js
│  │  ├─ middleware-manifest.json
│  │  ├─ middleware-react-loadable-manifest.js
│  │  ├─ next-font-manifest.js
│  │  ├─ next-font-manifest.json
│  │  ├─ pages
│  │  │  ├─ _app
│  │  │  │  ├─ build-manifest.json
│  │  │  │  ├─ next-font-manifest.json
│  │  │  │  ├─ pages-manifest.json
│  │  │  │  └─ react-loadable-manifest.json
│  │  │  ├─ _app.js
│  │  │  ├─ _app.js.map
│  │  │  ├─ _document
│  │  │  │  ├─ next-font-manifest.json
│  │  │  │  ├─ pages-manifest.json
│  │  │  │  └─ react-loadable-manifest.json
│  │  │  ├─ _document.js
│  │  │  ├─ _document.js.map
│  │  │  ├─ _error
│  │  │  │  ├─ build-manifest.json
│  │  │  │  ├─ next-font-manifest.json
│  │  │  │  ├─ pages-manifest.json
│  │  │  │  └─ react-loadable-manifest.json
│  │  │  ├─ _error.js
│  │  │  └─ _error.js.map
│  │  ├─ pages-manifest.json
│  │  ├─ server-reference-manifest.js
│  │  └─ server-reference-manifest.json
│  ├─ static
│  │  ├─ chunks
│  │  │  ├─ [next]_internal_font_google_inter_59dee874_module_b52d8e.css
│  │  │  ├─ [next]_internal_font_google_inter_59dee874_module_b52d8e.css.map
│  │  │  ├─ [root of the server]__2e1cf5._.js
│  │  │  ├─ [root of the server]__2e1cf5._.js.map
│  │  │  ├─ [root of the server]__31723f._.js
│  │  │  ├─ [root of the server]__31723f._.js.map
│  │  │  ├─ [root of the server]__33bd1d._.css
│  │  │  ├─ [root of the server]__33bd1d._.css.map
│  │  │  ├─ [root of the server]__f265a1._.js
│  │  │  ├─ [root of the server]__f265a1._.js.map
│  │  │  ├─ [root of the server]__f81d50._.js
│  │  │  ├─ [root of the server]__f81d50._.js.map
│  │  │  ├─ [turbopack]_browser_dev_hmr-client_d6d8d4._.js
│  │  │  ├─ [turbopack]_browser_dev_hmr-client_d6d8d4._.js.map
│  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_8e6352._.js
│  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_d0a96d._.js
│  │  │  ├─ [turbopack]_browser_dev_hmr-client_hmr-client_ts_d0a96d._.js.map
│  │  │  ├─ _012481._.js
│  │  │  ├─ _012481._.js.map
│  │  │  ├─ _03b6ce._.js
│  │  │  ├─ _03b6ce._.js.map
│  │  │  ├─ _148a01._.js
│  │  │  ├─ _148a01._.js.map
│  │  │  ├─ _177b91._.js
│  │  │  ├─ _177b91._.js.map
│  │  │  ├─ _1e7a33._.js
│  │  │  ├─ _1e7a33._.js.map
│  │  │  ├─ _22d2ba._.js
│  │  │  ├─ _22d2ba._.js.map
│  │  │  ├─ _4dc6f3._.js
│  │  │  ├─ _4dc6f3._.js.map
│  │  │  ├─ _582c98._.js
│  │  │  ├─ _582c98._.js.map
│  │  │  ├─ _5ca4c0._.js
│  │  │  ├─ _5ca4c0._.js.map
│  │  │  ├─ _7787db._.js
│  │  │  ├─ _7787db._.js.map
│  │  │  ├─ _79cad5._.js
│  │  │  ├─ _79cad5._.js.map
│  │  │  ├─ _8c36bb._.js
│  │  │  ├─ _8c36bb._.js.map
│  │  │  ├─ _9303da._.js
│  │  │  ├─ _9303da._.js.map
│  │  │  ├─ _97ba11._.js
│  │  │  ├─ _97ba11._.js.map
│  │  │  ├─ _cd8c34._.js
│  │  │  ├─ _cd8c34._.js.map
│  │  │  ├─ _d6ad37._.js
│  │  │  ├─ _d6ad37._.js.map
│  │  │  ├─ _d95469._.js
│  │  │  ├─ _d95469._.js.map
│  │  │  ├─ _da3915._.js
│  │  │  ├─ _da3915._.js.map
│  │  │  ├─ _e69f0d._.js
│  │  │  ├─ _e6fb37._.js
│  │  │  ├─ _e6fb37._.js.map
│  │  │  ├─ app_dashboard_layout_tsx_5e9bd8._.js
│  │  │  ├─ app_dashboard_layout_tsx_aaafe6._.js
│  │  │  ├─ app_dashboard_page_tsx_469dc7._.js
│  │  │  ├─ app_dashboard_page_tsx_99acec._.js
│  │  │  ├─ app_dashboard_settings_page_tsx_469dc7._.js
│  │  │  ├─ app_dashboard_users_[id]_edit_page_tsx_469dc7._.js
│  │  │  ├─ app_dashboard_users_[id]_page_tsx_469dc7._.js
│  │  │  ├─ app_dashboard_users_page_tsx_469dc7._.js
│  │  │  ├─ app_dashboard_users_page_tsx_99acec._.js
│  │  │  ├─ app_favicon_ico_mjs_53e3fe._.js
│  │  │  ├─ app_globals_b52d8e.css
│  │  │  ├─ app_globals_b52d8e.css.map
│  │  │  ├─ app_layout_tsx_61af54._.js
│  │  │  ├─ app_login_page_tsx_5e9bd8._.js
│  │  │  ├─ app_login_page_tsx_635459._.js
│  │  │  ├─ app_login_page_tsx_9f70eb._.js
│  │  │  ├─ app_login_page_tsx_aaafe6._.js
│  │  │  ├─ app_login_page_tsx_d12726._.js
│  │  │  ├─ app_login_page_tsx_d49660._.js
│  │  │  ├─ app_login_page_tsx_da6db3._.js
│  │  │  ├─ app_page_tsx_5e9bd8._.js
│  │  │  ├─ app_page_tsx_aaafe6._.js
│  │  │  ├─ app_page_tsx_d12726._.js
│  │  │  ├─ app_register_page_tsx_5e9bd8._.js
│  │  │  ├─ pages
│  │  │  │  ├─ _app.js
│  │  │  │  └─ _error.js
│  │  │  ├─ pages__app_5771e1._.js
│  │  │  ├─ pages__app_f2320d._.js
│  │  │  ├─ pages__app_f2320d._.js.map
│  │  │  ├─ pages__error_5771e1._.js
│  │  │  ├─ pages__error_b8c4c3._.js
│  │  │  └─ pages__error_b8c4c3._.js.map
│  │  ├─ development
│  │  │  ├─ _buildManifest.js
│  │  │  ├─ _clientMiddlewareManifest.json
│  │  │  └─ _ssgManifest.js
│  │  └─ media
│  │     ├─ UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa0ZL7W0Q5n_wU-s.927aef78.woff2
│  │     ├─ UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw-s.p.7b3669ea.woff2
│  │     ├─ UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1pL7W0Q5n_wU-s.ac666cb5.woff2
│  │     ├─ UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7W0Q5n_wU-s.761a717c.woff2
│  │     ├─ UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7W0Q5n_wU-s.91b7455f.woff2
│  │     ├─ UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2ZL7W0Q5n_wU-s.b7398c1c.woff2
│  │     ├─ UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2pL7W0Q5n_wU-s.569fab99.woff2
│  │     └─ favicon.45db1c09.ico
│  ├─ trace
│  ├─ transform.js
│  ├─ transform.js.map
│  └─ types
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