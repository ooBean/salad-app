# 🥗 SaladGo - 新鲜沙拉外卖应用

![SaladGo GIF](https://raw.githubusercontent.com/ooBean/AssetHub/main/gifs/saladGo/saladGo.gif)

🌐 **[English Version →](./README.md)**
🇨🇳 **[簡體中文版本 →](./README_zh.md)**

一个现代化的、响应式的 Web 应用程序，用于浏览和订购新鲜沙拉，使用 React、TypeScript 和 Vite 构建。该项目展示了从产品发现到结账的完整用户流程。

## ✨ 功能

- **产品目录：** 浏览各种新鲜沙拉，配有生动的图片和详细信息。
- **动态搜索：** 通过名称快速查找沙拉。
- **搜索历史：** 之前搜索的词条会保存为方便的标签，以便快速访问。
- **购物车：** 添加/移除商品并调整数量，带有流畅的动画效果。
- **状态管理：** 使用 Redux Toolkit 进行集中式购物车管理。
- **结账流程：** 模拟多步骤结账过程，包括支付和配送详情。
- **响应式设计：** 移动优先的设计，确保在所有屏幕尺寸上都能提供良好的体验。
- **流畅动画：** 使用 Framer Motion 为应用添加引人入胜的用户界面动画。
- **自动化图片优化：** 所有资源在构建过程中都会自动压缩，以获得更好的性能。

## 🛠️ 技术栈

- **前端：** [React](https://reactjs.org/) & [TypeScript](https://www.typescriptlang.org/)
- **构建工具：** [Vite](https://vitejs.dev/)
- **状态管理：** [Redux Toolkit](https://redux-toolkit.js.org/)
- **样式：** [Less](https://lesscss.org/)
- **动画：** [Framer Motion](https://www.framer.com/motion/)
- **部署：** [Vercel](https://vercel.com/)

## 🚀 开始使用

要获取本地副本并运行，请遵循以下简单步骤。

### 前提条件

- [Node.js](https://nodejs.org/) (推荐 16 或更高版本)
- [npm](https://www.npmjs.com/)

### 安装

1.  **克隆仓库：**
    ```sh
    git clone https://github.com/ooBean/salad-app.git
    ```
2.  **进入项目目录：**
    ```sh
    cd salad-app
    ```
3.  **安装 NPM 包：**
    ```sh
    npm install
    ```

### 运行应用

- **开发模式：**
  在开发模式下运行应用。打开 [http://localhost:5173](http://localhost:5173) 在浏览器中查看。如果您进行编辑，页面会重新加载。
  ```sh
  npm run dev
  ```

## 🚀 部署

该项目已部署到线上，您可以通过以下链接访问：

- [线上部署地址](https://salad-copsj7hmj-oopeachboys-projects.vercel.app)
- [GitHub 仓库](https://github.com/ooBean/salad-app)

## 🎨 设计

非常感谢 [Adolphus Chris](https://www.figma.com/@dev_khris) 提供的精美设计。原始设计文件可以在 [Figma 社区](https://www.figma.com/community/file/875021148028188871)找到。

## 🙏 致谢

该项目是在 ChatGPT 和 GitHub Copilot 的帮助下完成的。我们一起构建了这个 SaladGo 演示。

## 🌟 技术亮点

- **现代化技术栈：** 项目采用了 React、TypeScript、Vite 等前沿技术，保证了项目的高性能和可维护性。
- **响应式设计：** 项目采用了移动优先的设计理念，确保在各种屏幕尺寸上都能提供良好的用户体验。
- **集中式状态管理：** 项目使用 Redux Toolkit 进行集中式状态管理，使应用状态更易于预测和调试。
- **流畅的动画效果：** 项目利用 Framer Motion 为应用添加了流畅的动画效果，提升了用户体验。
- **自动化图片优化：** 项目在构建过程中会自动压缩所有资源，以获得更好的性能。
- **完整的用户流程：** 项目覆盖了从产品浏览、搜索、加入购物车到模拟结账的完整用户流程，展示了电商应用的核心功能。
- **线上部署：** 项目已成功部署到线上，证明了项目已经达到了可交付的状态。