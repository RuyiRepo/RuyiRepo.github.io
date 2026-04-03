/**
 * 规范化 Astro 的 `import.meta.env.BASE_URL`。
 * GitHub Pages / `astro build --base` 有时不带尾部 `/`，与 `en/` 拼接会变成 `…github.ioen/`。
 */
export function baseUrl(): string {
  const b = import.meta.env.BASE_URL
  if (!b || b === '/') return '/'
  return b.endsWith('/') ? b : `${b}/`
}
