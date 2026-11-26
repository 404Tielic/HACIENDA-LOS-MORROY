# Hacienda Los Monroy · Página web

Sitio estático (HTML + CSS + JS), pensado primero para celular. No requiere instalar nada.

## Probar en tu computadora
Doble clic en `index.html`. (Necesita internet solo para cargar las tipografías de Google.)

## Lo único que necesitas editar: `js/config.js`
- **WhatsApp:** `whatsapp: "526561234567"` (52 + número a 10 dígitos, sin + ni espacios).
- **Fotos:** guarda la imagen en `img/fotos/` y escribe su ruta en `foto`, por ejemplo `foto: "img/fotos/bodas.jpg"`. Si queda vacío, se muestra un recuadro elegante de ejemplo.
  - Foto grande de portada: `portada: { foto: "img/fotos/portada.jpg" }` (vertical, ~1000×1300 px).
  - Las demás: formato vertical o cuadrado, ~900×1000 px, menos de 300 KB (.jpg o .webp). Las fotos se recortan en forma de arco automáticamente.
- **Servicios y textos:** copia una línea `{ n: "...", d: "...", hot: false, foto: "" },` para agregar uno; bórrala para quitarlo. `hot: true` muestra "Más solicitados".
- **Dirección, mapa, Instagram, Facebook y capacidades:** también en `config.js`.

Los títulos de la portada están en `index.html` (busca "PORTADA"). Los colores, en `css/styles.css` (sección 1, `:root`).

## Carpeta
```
index.html
css/styles.css
js/config.js   <- editas aquí
js/app.js
img/logo.png, logo-claro.png, favicon.png
img/fotos/     <- pon aquí tus fotos
```
Para cambiar el logotipo reemplaza `img/logo.png` (café) e `img/logo-claro.png` (beige) con los mismos nombres.

## Publicarla en internet (elige una)
- **Netlify Drop** (gratis, lo más fácil): app.netlify.com/drop → arrastra la carpeta completa.
- **Cloudflare Pages / Vercel**: proyecto nuevo, sube la carpeta (sin comando de build).
- **Hosting con cPanel**: Administrador de archivos → `public_html` → sube el contenido (que `index.html` quede en la raíz).
