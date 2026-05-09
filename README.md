# Easyfix Console UI Docs

Easyfix Console UI 的组件文档站，用于展示 `@easyfix/console-ui` 组件的用法、交互示例和配置说明。

线上仓库：

```bash
git@github.com:easyfix-vn/easyfix-console-ui-doc.git
```

## 技术栈

- React 18
- TypeScript
- Vite
- Tailwind CSS 4
- React Router HashRouter
- `@easyfix/console-ui`

## 本地开发

安装依赖：

```bash
pnpm install
```

启动开发服务：

```bash
pnpm dev
```

默认访问地址：

```bash
http://localhost:5188
```

## 打包脚本

开发模式打包：

```bash
pnpm build:dev
```

正式版本打包：

```bash
pnpm build:prod
```

GitHub Pages 打包：

```bash
pnpm build:pages
```

构建产物输出到 `dist` 目录。

## 本地预览

```bash
pnpm build:prod
pnpm preview
```

## 发布到 GitHub Pages

项目已提供 GitHub Actions workflow：`.github/workflows/deploy-pages.yml`。

发布步骤：

1. 将仓库推送到 `main` 分支。
2. 在 GitHub 仓库的 `Settings -> Pages` 中，将 `Source` 设置为 `GitHub Actions`。
3. workflow 会执行 `pnpm install --frozen-lockfile` 和 `pnpm build:pages`。
4. 发布完成后访问：

```bash
https://easyfix-vn.github.io/easyfix-console-ui-doc/
```

## 提交到远端仓库

首次关联远端：

```bash
git remote add origin git@github.com:easyfix-vn/easyfix-console-ui-doc.git
```

提交并推送：

```bash
git add .
git commit -m "Add console UI docs README and Pages deploy"
git push -u origin main
```

提交信息中不要添加 `Co-authored-by: Cursor <cursoragent@cursor.com>`。
