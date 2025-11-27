# 🌌 Space Reviews - Frontend

Aplicación web para explorar y reseñar videojuegos, construida con React y estilizada con Tailwind CSS. Este cliente consume la API de Space Reviews y ofrece una experiencia de usuario fluida con autenticación y estados de carga animados.

## 🎨 Características

* **Catálogo de Juegos:** Visualización de tarjetas con diseño responsivo.
* **Autenticación:** Registro y Login de usuarios con JWT.
* **Rutas Protegidas:** Acceso restringido a ciertas secciones mediante `ProtectedRoute`.
* **UX Mejorada:** Spinners de carga, manejo de errores y feedback visual.
* **Diseño:** Diseño temático espacial ("Space").

## 🛠️ Tecnologías

* **React + Vite:** Entorno de desarrollo rápido.
* **Tailwind CSS:** Estilizado moderno y responsivo.
* **React Router DOM:** Navegación SPA (Single Page Application).
* **React Hook Form:** Manejo eficiente de formularios.

## 🚀 Ejecución Local

1.  Clonar el repositorio.
2.  Instalar dependencias:
    ```bash
    npm install
    ```
3.  Configurar variables de entorno:
    Crear un archivo `.env.local` y definir la URL del backend:
    ```env
    VITE_API_URL=[http://127.0.0.1:8000/api](http://127.0.0.1:8000/api)
    ```
4.  Iniciar el servidor de desarrollo:
    ```bash
    npm run dev
    ```
5.  Abrir `http://localhost:5173` en el navegador.

## 🌐 Despliegue
El proyecto está desplegado en **Vercel**.
* **URL Pública:** [https://space-reviews-frontend.vercel.app](https://space-reviews-frontend.vercel.app)

---
*Proyecto realizado por Lucía Rolón para la Diplomatura Full Stack - UADE.*
