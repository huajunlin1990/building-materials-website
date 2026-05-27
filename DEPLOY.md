# 建材物料网站 - 部署指南

## 🚀 GitHub Pages 部署

### 部署步骤

1. **创建 GitHub 仓库**
   - 在 GitHub 上创建仓库（仓库名可以自定义）
   - 设置为公开仓库

2. **添加远程仓库**
   ```bash
   cd d:\workspace\building-materials-website
   git remote add origin https://github.com/your-username/your-repo-name.git
   ```

3. **推送代码**
   ```bash
   git push -u origin main
   ```

4. **配置 vite.config.ts**
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/',  // 替换为你的仓库名
   })
   ```

5. **部署到 GitHub Pages**
   ```bash
   npm run deploy
   ```

6. **配置 GitHub Pages**
   - 进入仓库 → Settings → Pages
   - Source 选择 `gh-pages` 分支
   - 点击 "Save"

### 访问网站

部署完成后，网站将在以下地址访问：
```
https://your-username.github.io/your-repo-name/
```

---

## ☁️ Cloudflare Pages 部署

### 部署步骤

1. **登录 Cloudflare**
   - 访问 https://dash.cloudflare.com/
   - 使用账号登录

2. **创建 Pages 项目**
   - 点击左侧菜单的 "Pages"
   - 点击 "Create a project"
   - 选择 "Connect to Git"

3. **连接 GitHub 仓库**
   - 选择你的仓库
   - 点击 "Begin setup"

4. **配置构建设置**
   - **Project name**: 自定义项目名
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: 留空
   - 点击 "Save and Deploy"

### 访问网站

```
https://your-project-name.pages.dev
```

---

## ✅ 已完成的配置

- ✅ 安装了 `gh-pages` 依赖
- ✅ 添加了 `deploy` 脚本
- ✅ 配置了 SEO Meta 标签

## 📁 项目结构

```
building-materials-website/
├── src/
│   ├── components/
│   ├── pages/
│   ├── data/
│   └── types/
├── public/
│   └── assets/
└── package.json
```
