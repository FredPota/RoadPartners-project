# RoadPartners
El proyecto consiste en una aplicacion web inspirada en uber donde el usuario peude compartir auto con un conductor para ir a un destino en común.

 ## Tecnologias del proyecto

node.js
react
tailwind.css


## Estructura del proyecto

src/
  components/
  pages/
  assets/
  App.jsx
  main.jsx
public/
index.html

"assets": En la carpeta "assets" se colocaran los recursos audiovisuales del proyecto y documentos de estilos de la pagina

"components": En la carpeta "components" van a estar componentes que puedan ser reutilizables en el proyecto como el header, footer, etc.

"pages": En la carpeta de "pages" estaran las paginas completas de cada funcionalidad, Ej. "LoginPage.jsx", "HomePage.jsx", etc.

## Como iniciar el proyecto

1. Abrir terminal (control + ñ, para abrir la terminal)

2. Tener la Version de NodeJS del proyecto (v22.20.0) (usar "node -v" para ver version)

3. Instalar dependencias
    npm i

4. Correr la pagina
npm run dev

5. Abrir el puerto, que sale en la terminal de comandos, en el navegador 





# Información extra de VITE
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
