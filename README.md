# Mood Mail 💌

**Mood Mail** is a simple and elegant **Email Template Generator** that helps you express your feelings with ease. Whether you're feeling 😄 happy, 😢 sad, or 😠 angry — Mood Mail creates a mood-based message for you instantly.


---

## 🌟 Features

- ✨ Simple, clean and modern UI
- 😄 Mood-based email generation (Happy, Sad, Angry)
- 💻 Responsive layout – works on desktop & mobile
- 📨 Instant email message generation
- 🔥 No login required – just open and use!

---

## 🚀 Live Demo

👉 [Live Demo](https://vel-moodmail.netlify.app/)

---

## 🔗 LinkedIn Post

📌 [View LinkedIn Post](https://www.linkedin.com/posts/velmaran-e-38139b2b0_30daysofprojects-webdevelopment-javascript-activity-7359289005886111745-JODp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAErOyVEB2jhy99mca8iuuQxWHug_y8OPbmk)

---

## 🛠️ Tech Stack

- HTML
- CSS (TailwindCSS)
- JavaScript

---


## 🧑‍💻 How to Run Locally

1. Clone the repository  
   ```bash
   git clone https://github.com/yourusername/mood-mail.git

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
