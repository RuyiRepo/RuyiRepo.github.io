// @ts-check
import { defineConfig } from 'astro/config'

// 不在此写死站点 URL。GitHub Actions 里会对 `astro build` 传入 --site / --base；
// 本地 dev / 本地 build 默认根路径 `/`，与 `src/lib/baseUrl.ts` 一致即可。
// https://astro.build/config
export default defineConfig({})
