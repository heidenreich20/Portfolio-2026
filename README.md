# 🕹️ Pablo Heidenreich — Frontend Portfolio

![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

Bienvenido a mi portfolio personal. Este proyecto no es solo una vitrina de mis trabajos, sino un experimento de diseño aplicado al desarrollo web moderno — ahora reconstruido sobre Astro para maximizar performance y SEO.

## 🚀 Características

* **Estética Industrial:** Interfaz basada en alto contraste, bordes gruesos y sombras duras.
* **Multi-idioma real (i18n):** Rutas estáticas por idioma (`/`, `/es/`, `/it/`) generadas en build time, con contenido totalmente indexable por buscadores — no depende de JavaScript en el cliente.
* **Cero framework en el cliente:** Todos los componentes se renderizan como HTML estático en el servidor; la única interactividad (menú móvil, selector de idioma, formulario de contacto) usa JavaScript vanilla mínimo.
* **Navegación Custom:** Navbar de escritorio y menú móvil tipo *drawer* desarrollados desde cero.
* **Contacto Funcional:** Integración con **EmailJS** para recepción de mensajes en tiempo real, con validación client-side.
* **SEO completo:** Meta tags, Open Graph, Twitter Cards, JSON-LD (schema.org), sitemap y etiquetas `hreflang` por idioma.
* **Performance:** Menos de 2KB de JavaScript gzipeado en toda la página.

## 🛠️ Tech Stack

* **Framework:** Astro
* **Lenguaje:** TypeScript
* **Estilos:** Tailwind CSS v4
* **Traducciones:** Sistema de i18n propio sobre el enrutamiento nativo de Astro
* **Envío de formularios:** EmailJS
* **SEO:** `@astrojs/sitemap`
* **Deployment:** Vercel

## 📦 Empezar

```bash
npm install
cp .env.example .env   # completar con tus credenciales de EmailJS
npm run dev             # http://localhost:4321
```

### Scripts disponibles

| Comando           | Acción                                       |
|-------------------|-----------------------------------------------|
| `npm run dev`     | Levanta el servidor de desarrollo             |
| `npm run build`   | Genera el sitio estático en `dist/`           |
| `npm run preview` | Sirve localmente el build de producción       |

## 🌍 Idiomas

| Ruta    | Idioma  |
|---------|---------|
| `/`     | English (default) |
| `/es/`  | Español |
| `/it/`  | Italiano |

Las traducciones viven en `src/i18n/ui.ts`. Para agregar un idioma nuevo: sumarlo a `locales` en `astro.config.mjs`, agregar su diccionario en `ui.ts`, y crear la página correspondiente en `src/pages/<idioma>/index.astro`.

## 📁 Estructura del proyecto

```
src/
├── components/     # Componentes .astro (estáticos) y ContactForm (con script)
├── data/           # projects.json y stack.json
├── i18n/           # Diccionario de traducciones y helpers
├── layouts/        # Layout.astro con todo el <head> y SEO
├── pages/          # index.astro, es/index.astro, it/index.astro
└── styles/         # Tema de Tailwind
```

## ✉️ Variables de entorno

El formulario de contacto necesita estas variables (con prefijo `PUBLIC_` para que Astro las exponga al cliente):

```
PUBLIC_EMAILJS_SERVICE_ID=
PUBLIC_EMAILJS_TEMPLATE_ID=
PUBLIC_EMAILJS_PUBLIC_KEY=
```

---

Ver `MIGRATION.md` para el detalle completo de la migración desde la versión anterior en React.
