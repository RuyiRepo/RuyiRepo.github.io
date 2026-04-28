// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// 生产规范域名为 ruyirepo.cn。CI 中 `astro build` 只传 --base，--site 以本配置为准（与 sitemap、canonical 一致）。
// https://astro.build/config
export default defineConfig({
  site: 'https://ruyirepo.cn',
  integrations: [sitemap()],
})
