---
keywords: salad app, fresh salad delivery, React TypeScript Vite, online salad ordering, food delivery app, salad ordering app, salad delivery service, healthy food app
---

# 🥗 SaladGo - Fresh Salad Delivery App

> A modern, responsive web application for browsing and ordering fresh salads, built with React, TypeScript, and Vite. Perfect for healthy food lovers looking for convenient salad delivery options.

![SaladGo GIF](https://raw.githubusercontent.com/ooBean/AssetHub/main/gifs/saladGo/saladGo.gif)

🌐 **[English Version →](./README.md)**
🇨🇳 **[簡體中文版本 →](./README_zh.md)**

## ✨ Features

### 🍽️ Product Catalog
Browse a variety of fresh salads with vibrant images and details.

### 🔍 Dynamic Search
Quickly find salads by name.

### 📝 Search History
Previously searched terms are saved as convenient tags for quick access.

### 🛒 Shopping Cart
Add/remove items and adjust quantities with smooth animations.

### 🧠 State Management
Centralized cart management using Redux Toolkit.

### 💳 Checkout Flow
A simulated multi-step checkout process including payment and delivery details.

### 📱 Responsive Design
A mobile-first design that looks great on all screen sizes.

### 🎬 Smooth Animations
Engaging user interface with animations powered by Framer Motion.

### 🖼️ Automated Image Optimization
All assets are automatically compressed during the build process for better performance.

## 🛠️ Tech Stack

- **Frontend**: [React](https://reactjs.org/) & [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Styling**: [Less](https://lesscss.org/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Deployment**: [Vercel](https://vercel.com/)

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or later recommended)
- [npm](https://www.npmjs.com/)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/ooBean/salad-app.git
    ```
2.  **Navigate to the project directory:**```sh
    cd salad-app
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```

### Running the App

- **Development Mode:**
  Run the app in the development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser. The page will reload if you make edits.
  ```sh
  npm run dev
  ```

## 🚀 部署

该项目已部署到线上，您可以通过以下链接访问：

- [线上部署地址](https://salad-copsj7hmj-oopeachboys-projects.vercel.app)
- [GitHub 仓库](https://github.com/ooBean/salad-app)

### 🔄 CI/CD 自动化部署

本项目已配置 **Vercel CI/CD 自动化部署**，实现以下功能：

- **自动构建**：每次推送到 `main` 分支时，Vercel 会自动触发构建流程
- **自动部署**：构建成功后自动部署到生产环境
- **预览部署**：每个 Pull Request 都会生成预览链接，方便测试新功能
- **零停机部署**：采用蓝绿部署策略，确保用户访问不中断
- **自动回滚**：如果部署失败，系统会自动回滚到上一个稳定版本

通过 Vercel 的自动化部署，我们实现了真正的 **"一键部署"**，让开发团队可以专注于功能开发，而无需担心部署流程。

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