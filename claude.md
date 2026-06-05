# 项目背景：高端花艺工作室/花店展示网站

## 技术栈

- **框架：** Astro（最新版）
- **样式：** Tailwind CSS（用于基础布局）+ 自定义 CSS（用于复杂的排版和交互动画）
- **内容管理系统 (CMS)：** Decap CMS（基于 Git 的无头 CMS）
- **部署：** GitHub Pages（通过 GitHub Actions 自动构建）

## 设计系统（杂志排版与极简粗野主义）

- **配色方案：** 严格的单色调（纯黑文本 `#000000`，纯白背景 `#FFFFFF`，浅灰色用于微妙的分隔线或点缀）。网页中的所有色彩必须**完全由上传的花卉图片提供**，形成强烈对比。
- **字体排版：**
  - **主要标题/展示字体：** 巨大、粗犷且极具张力的无衬线字体（如 Inter, Helvetica Neue）。用于花卉系列名称或主视觉。
  - **正文/次要文本：** 优雅的衬线字体（如 Playfair Display），用于花卉的花语、品种介绍，增加艺术气息。
  - **装饰与细节字体：** 必须使用等宽字体（Monospace）来呈现技术细节、花卉编号和价格属性（例如 `NO.01`, `[AVAILABLE]`, `X.0204`）。
- **布局原则：**
  - 极致的大面积留白，不要让内容填满屏幕。
  - 基于严格网格对齐的图片排版，以及横向滚动的画廊交互。
  - 不对称的文字块排版，模仿先锋艺术杂志的质感。
  - 极简的导航设计（仅使用纯文本链接，如 Home, Floral Collections, About, Contact）。

## 开发规则

1. 必须使用 Astro 内容集合 (Content Collections, `src/content/`) 来管理所有花卉数据和页面内容。
2. 在 `public/admin/index.html` 和 `public/admin/config.yml` 中完成 Decap CMS 的本地配置。
3. CMS 的 `config.yml` 结构必须与 Astro Content Collections 的 schema 完美映射。
4. 确保所有通过 CMS 上传的高清花卉图片资源都能被 Astro Image 组件正确解析和深度优化。
5. 所有代码必须保持极简、语义化且具备高性能。使用 Astro 的 `ViewTransitions` 实现丝滑的页面切换效果。

## 必需的内容模型 (CMS Collections)

- **花卉系列 (Floral Collections)：** 用于展示不同的花艺作品或在售商品。必须包含字段：作品名称、英文字段/副标题、封面图、细节图库（多图上传）、花材介绍、设计理念（Markdown富文本）、状态标签（如“当季”、“可预订”）。
- **门店/品牌页面 (Pages)：** 用于管理静态页面（如主页引言、关于主理人、地址与营业时间）的文本和主视觉图。
