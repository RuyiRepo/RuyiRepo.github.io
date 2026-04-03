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

- 根路径 `/` 会重定向到 `/zh/`。
- 语言路由：`/zh/`、`/en/`（由 `src/pages/[lang]/` 与 `src/i18n/` 驱动）。

文案与部分展示逻辑可在 `src/i18n/zh.ts`、`src/i18n/en.ts` 中维护。

## 目录结构（节选）

```text
├── public/                 # 静态资源（原样复制到 dist 根目录）
├── src/
│   ├── i18n/               # 中英文站点配置与文案
│   ├── layouts/            # 全站布局与页头
│   ├── pages/
│   │   ├── index.astro     # 根路径，重定向至中文首页
│   │   └── [lang]/         # 按语言区分的页面与首页组件
│   └── types/              # TypeScript 类型
├── astro.config.mjs
└── package.json
```

## 部署到 GitHub Pages

仓库已包含工作流 [`.github/workflows/deploy-github-pages.yml`](.github/workflows/deploy-github-pages.yml)：

1. 在 GitHub 打开 **Settings → Pages**。
2. **Build and deployment** 中 **Source** 选择 **GitHub Actions**。
3. 将代码推送到 **`main`** 分支（或修改工作流中的分支名以匹配你的默认分支）。
4. 在 **Actions** 中等待 “Deploy to GitHub Pages” 成功完成。

### 子路径（项目站）

对常见地址 `https://<用户名>.github.io/<仓库名>/`，构建时会通过环境变量 `GITHUB_REPOSITORY`（Actions 自动注入）设置 Astro 的 `base` 为 `/<仓库名>/`，静态资源与语言链接会带上正确前缀。

若仓库名为 `<用户名>.github.io`（用户/组织主页根域），`base` 会使用 `/`。

### 本地模拟「带仓库前缀」的构建

与 CI 行为对齐时，可手动传入变量后构建：

```sh
GITHUB_REPOSITORY=你的用户名/你的仓库名 SITE_URL=https://你的用户名.github.io npm run build
```

构建产物在 `dist/`，可用 `npm run preview` 检查。
