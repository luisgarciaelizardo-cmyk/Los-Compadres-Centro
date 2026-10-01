# Los Compadres Centro — Sitio web

Página web de **Los Compadres Centro** (Juárez Ote. #463, Zona Centro, Saltillo, Coah.). Es un sitio estático: HTML, CSS y JavaScript, sin dependencias.

## Estructura
```
index.html                 Página principal
css/styles.css             Estilos (guinda del logo y colores sarape del menú)
js/menu-data.js            Menú completo (editar aquí precios y platillos)
js/main.js                 Pestañas del menú, navegación y formulario de quejas y sugerencias
assets/img/                Logo, fotos y logo de TFC
assets/menu/               Menú original en PDF (descargable desde la página)
```

## Ver localmente
Abre `index.html` en el navegador o ejecuta `python3 -m http.server` y entra a http://localhost:8000.

## Publicar en GitHub Pages
Settings → Pages → *Deploy from a branch* → `main` / `(root)`.

## Formato de quejas y sugerencias
Es la versión digital del formato impreso. Las respuestas se envían por correo a **garzadanielg@gmail.com** mediante [FormSubmit](https://formsubmit.co) (gratis, sin servidor).

**Activación (solo la primera vez):** cuando se envíe el primer formulario desde la página publicada, FormSubmit mandará un correo de confirmación a garzadanielg@gmail.com. Hay que dar clic en **"Activate Form"**. Después de eso, todas las respuestas llegarán al correo.

Para cambiar el correo destino, edita `SURVEY_EMAIL` en `js/main.js`.

---
Creado por **TFC** — Technology Family Company.
