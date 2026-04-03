# RuyiRepo Portal

面向 RISC-V 开源制品仓库的静态门户站点，基于 [Astro](https://astro.build/) 构建，支持中英文双语页面。

## 环境要求

- [Node.js](https://nodejs.org/) **≥ 22.12**

## 常用命令

在项目根目录执行：

| 命令              | 说明                                   |
| ----------------- | -------------------------------------- |
| `npm install`     | 安装依赖                               |
| `npm run dev`     | 本地开发，默认 <http://localhost:4321> |
| `npm run build`   | 构建生产站点到 `dist/`                 |
| `npm run preview` | 本地预览构建结果                       |

## 路由与国际化

- 根路径 `/` 为**中文首页**（URL 保持为 `/`）；首次打开时会读浏览器 **`navigator.languages` / `navigator.language`**，若首选为英语（`en*`）则跳到 **`/en/`**（纯静态站无法用服务端协商语言）。
- 在页头点 **中文 / EN** 会写入 **`localStorage['ruyi-repo-lang']`**（`zh` / `en`），避免「系统英语但想中文」时被自动跳走。
- 英文页为 `/en/`（`src/pages/[lang]/index.astro` 仅生成 `en`）。

文案与部分展示逻辑可在 `src/i18n/zh.ts`、`src/i18n/en.ts` 中维护。

## 目录结构（节选）

```text
├── public/                 # 静态资源（原样复制到 dist 根目录）
├── src/
│   ├── components/
│   │   └── home/           # 首页区块（Intro / Services / Feedback）
│   ├── i18n/               # 中英文站点配置与文案
│   ├── layouts/            # 全站布局与页头
│   ├── pages/              # 仅路由：`/`、`/en/` 等
│   └── types/              # TypeScript 类型
├── astro.config.mjs
└── package.json
```

## 部署到 GitHub Pages

仓库已包含工作流 [`.github/workflows/astro.yml`](.github/workflows/astro.yml)：

1. 在 GitHub 打开 **Settings → Pages**。
2. **Build and deployment** 中 **Source** 选择 **GitHub Actions**。
3. 将代码推送到 **`main`** 分支（或修改工作流中的分支名以匹配你的默认分支）。
4. 在 **Actions** 中等待 “Deploy to GitHub Pages” 成功完成。

### 子路径（项目站）

`astro.config.mjs` **不必**写死域名或 `base`。工作流里 `actions/configure-pages` 会在构建时把 **`--site`**、**`--base`** 传给 `astro build`（与 GitHub Pages 实际地址一致），静态资源与语言链接会通过 `baseUrl()` 带上正确前缀。

### 本地模拟「带仓库前缀」的构建（可选）

与线上子路径一致时，可本地执行：

```sh
npx astro build --site https://你的用户名.github.io --base /你的仓库名/
```

构建产物在 `dist/`，可用 `npm run preview` 检查。
