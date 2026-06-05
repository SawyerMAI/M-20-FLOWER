请帮我从零初始化一个基于 Astro 的静态网站，并配置好 Decap CMS 以便后续部署到 GitHub Pages。这是一个高端花艺工作室的展示网站，请严格遵循当前目录下的 `Claude.md` 中的设计规范与技术栈。

请按以下顺序执行任务：

1. **初始化 Astro 与 Tailwind：**
   使用 Astro CLI 创建一个最简模板项目，并安装配置 Tailwind CSS。

2. **搭建静态后台 (Decap CMS)：**
   - 在 `public/admin/` 目录下创建 `index.html` 并引入 Decap CMS 的 CDN。
   - 创建 `public/admin/config.yml`，配置 `backend` 为 `github`（预留 repo 字段）。
   - 在 `config.yml` 中重点配置以下 collections：
     - `floral_works` (花卉作品集)：支持输入作品名称、英文副标题、封面大图、画廊多图上传、设计理念（Markdown 正文）、花材属性以及项目编号。
     - `pages` (页面管理)：用于编辑主页的欢迎语和关于页的门店信息。
     - 将媒体库 (media_folder) 配置为 `public/images/uploads`，公共路径 (public_folder) 配置为 `/images/uploads`。

3. **实现核心 UI 与排版 (基于设计规范)：**
   - 修改首页 (`src/pages/index.astro`)，完美复刻“杂志与极简粗野主义”风格。
   - 顶部导航栏：使用极简的纯文本排列（如 "Home, Floral Works, About, Contact"）。
   - 首屏视觉：实现一个占据视觉重心的无衬线巨大标题（例如 "Inner Echo" 风格），辅以优雅的衬线体介绍段落，阐述花艺设计理念。
   - 画廊区域：实现一个横向排列的图片网格（Horizontal Scroll 或 Masonry）来展示花卉。在每张图片的角落加上类似于 `(01)`、`/02` 的等宽字体（Monospace）编号细节。
   - 底部信息：在页面角落添加类似 `[002%]` 或 `X.0204 Y.0113` 的极客装饰性坐标，形成花卉柔美与排版理性的视觉碰撞。

4. **GitHub Pages 部署准备：**
   - 在项目根目录生成一个 `.github/workflows/deploy.yml` 文件，编写用于将 Astro 构建并发布到 GitHub Pages 的自动化脚本。

在执行过程中，如果需要安装额外的 npm 依赖，请直接运行安装命令。每完成一个步骤，请简要向我汇报进展。

网页的式样请尽可能安排本目录下的6张截图
