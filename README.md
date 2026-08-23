# 🚀 RenovaGrow - AI-Powered Digital Agency Platform

[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC.svg)](https://tailwindcss.com/)
[![Gemini API](https://img.shields.io/badge/Gemini_AI-Integrated-orange.svg)](https://deepmind.google/technologies/gemini/)

**Live Preview:** [https://renova-grow.vercel.app](https://renova-grow.vercel.app)

A high-performance, modern full-stack web application built for **RenovaGrow**, a forward-thinking digital marketing agency. This platform bridges the gap between stunning visual design and cutting-edge artificial intelligence. It features interactive 3D elements, a highly optimized portfolio pipeline, and an integrated **Generative AI sales assistant** to drive client conversions.

Developed with a modern engineering workflow, this project leverages **AI coding assistants** to accelerate architectural scaffolding, refine complex UI animations, and rapidly iterate on robust API endpoints—showcasing the future of AI-augmented software engineering.

---

## ✨ Key Features

* **🤖 AI Sales Chatbot (Gemini 3.5 Flash)**: A context-aware, persistent floating chatbot programmed with a professional sales persona. It dynamically answers client inquiries, explains services (SEO, Ad Spend, Video Marketing), and drives lead generation.
* **🧠 Gemini Blueprint Mode**: An intelligent contact flow that parses client needs and automatically generates custom marketing blueprints before they even book a call.
* **⚡ 3D & Interactive UI**: Utilizes Framer Motion for buttery-smooth page transitions, scroll-linked animations, and glassmorphic UI components, alongside a stunning 3D Hero scene.
* **📊 Filterable Portfolio Grid**: A highly responsive, state-driven masonry-style grid categorizing case studies across Video Marketing, SEO, Photo Design, and Web Development.
* **🔒 Secure Full-Stack Architecture**: Employs an Express.js backend to securely proxy all LLM API requests, ensuring strict protection of AI API keys and internal business logic.

## 🛠️ Tech Stack

### Frontend
* **React 18** (Functional components, custom hooks)
* **TypeScript** (Strict type safety, interfaces for LLM context)
* **Tailwind CSS** (Utility-first styling, responsive design)
* **Framer Motion** (Complex orchestration, gesture animations)
* **Lucide React** (Consistent, scalable iconography)

### Backend & AI
* **Node.js & Express.js** (REST API architecture)
* **Google Gemini AI SDK** (`@google/genai`)
* **Vite Middleware** (Unified development and production build pipeline)

---

## 🏗️ Architecture & AI Integration

The application follows a secure client-server model:
1. **Frontend State**: React manages the chatbot conversation history locally, providing immediate optimistic UI updates.
2. **Secure Proxy**: Messages are dispatched to a custom Node.js `/api/chat` endpoint.
3. **Prompt Engineering**: The backend securely injects system instructions ("Act as a RenovaGrow sales expert...") and handles communication with the Google Gemini API.
4. **Streaming/Resolution**: The AI's response is formatted and delivered back to the client interface seamlessly.

## 🚀 Getting Started

### Prerequisites
* Node.js (v18+ recommended)
* A Google Gemini API Key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/renova-grow.git
   cd renova-grow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory and add your Gemini API Key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

4. **Run the Development Server**
   ```bash
   npm run dev
   ```
   *The app will be available at `http://localhost:3000`*

## 💡 Developer Notes & AI-Assisted Workflow

This project was built to demonstrate proficiency in integrating LLMs into production-ready web interfaces. By collaborating with advanced **AI coding assistants**, the development lifecycle was highly optimized—allowing for rapid prototyping of complex Framer Motion layouts and seamless secure backend configuration. It serves as a testament to embracing AI not just as a feature within the app, but as a core pair-programming partner during development.
