# Desplegar en Cloudflare Pages

Este proyecto usa **Astro** con el adapter **@astrojs/cloudflare** en modo estático + una ruta de API (`/api/fetch-robots`) que se ejecuta en Cloudflare (Functions/Workers). Así el analizador de robots.txt puede obtener el archivo desde cualquier dominio sin problemas de CORS.

## Requisitos

- Cuenta en [Cloudflare](https://dash.cloudflare.com/)
- Repositorio en Git (GitHub, GitLab, etc.) con el código del proyecto

## 1. Crear un namespace KV para SESSION (solo la primera vez)

El adapter de Cloudflare usa un binding KV llamado `SESSION`. Tienes que crear un namespace y asociarlo en `wrangler.jsonc`.

1. En el [dashboard de Cloudflare](https://dash.cloudflare.com/), ve a **Workers & Pages** → **KV**.
2. Pulsa **Create namespace**.
3. Nombre sugerido: `SESSION` (o el que quieras).
4. Crea el namespace y **copia el ID** (algo como `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`).

En la raíz del proyecto, edita `wrangler.jsonc` y sustituye el placeholder por tu ID:

```jsonc
"kv_namespaces": [
  {
    "binding": "SESSION",
    "id": "TU_ID_DE_KV_AQUI"
  }
]
```

Guarda el archivo y haz commit (o ten en cuenta que en CI/CD puedes usar una variable de entorno para el ID).

## 2. Conectar el repositorio con Cloudflare Pages

1. En **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Conecta tu cuenta de GitHub/GitLab y elige el repositorio del proyecto.
3. **Configuración del build (importante):** Este proyecto es **Astro**, no Next.js. Configura exactamente así:

   | Campo | Valor |
   |-------|--------|
   | **Framework preset** | **None** (o **Astro** si aparece). **No uses Next.js.** |
   | **Build command** | `npm run build` |
   | **Build output directory** | `dist` |
   | **Root directory** | (dejar vacío si el repo es la raíz del proyecto) |

   Si dejas el preset en **Next.js**, Cloudflare ejecutará `@cloudflare/next-on-pages` y el build fallará con "No Next.js version detected".

4. En **Environment variables** (opcional): no es necesario si el ID de KV está en `wrangler.jsonc`.
5. Pulsa **Save and Deploy**.

Cloudflare construirá el proyecto con `npm run build` (Astro) y desplegará el contenido de `dist` (HTML estático + `_worker.js` y `_routes.json` para la función `/api/fetch-robots`).

## 3. Despliegue desde la terminal (alternativa)

Si prefieres desplegar con Wrangler en lugar de Git:

1. Instala Wrangler: `npm install -D wrangler`
2. Inicia sesión: `npx wrangler login`
3. Construye y despliega:

   ```bash
   npm run build
   npx wrangler pages deploy ./dist --project-name=generate-robots-txt
   ```

El nombre del proyecto (`--project-name`) debe coincidir con el que tengas en Cloudflare Pages.

## Comprobar que todo funciona

- Página principal: `https://tu-proyecto.pages.dev/`
- Analizador: `https://tu-proyecto.pages.dev/analyze-robots`
- La llamada a `/api/fetch-robots?url=https://example.com` debe devolver el contenido de `https://example.com/robots.txt` (sin errores de CORS).

## Si el despliegue falla con "No Next.js version detected"

Cloudflare está usando el preset **Next.js** y ejecutando `@cloudflare/next-on-pages`. Este proyecto es **Astro**.

1. Ve a **Workers & Pages** → tu proyecto **generate-robots-txt** → **Settings** → **Builds & deployments**.
2. En **Build configuration**, edita:
   - **Framework preset**: cámbialo a **None** (o **Astro**).
   - **Build command**: debe ser exactamente `npm run build`.
   - **Build output directory**: `dist`.
3. Guarda y vuelve a desplegar (**Deployments** → **Retry deployment** o un nuevo push).

## Notas

- **Custom domain**: En el proyecto de Pages puedes añadir un dominio propio en **Custom domains**.
- **Preview**: Cada push a una rama puede generar un preview URL; el directorio de salida sigue siendo `dist`.
- Si cambias el nombre del proyecto en `wrangler.jsonc` (`"name"`), asegúrate de que coincida con el de Cloudflare Pages al usar `wrangler pages deploy`.
