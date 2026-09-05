# Centro Artesanal Cusco

Landing page oficial del Centro Artesanal Cusco: directorio de pasajes, categorías de artesanía y cultura andina.

## Stack

- [Vite](https://vitejs.dev/) + [React 19](https://react.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Motion](https://motion.dev/) para animaciones
- [React Leaflet](https://react-leaflet.js.org/) para el mapa de pasajes

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
```

Esto genera la carpeta `dist/` lista para publicar. **Nunca se debe publicar el código fuente sin compilar** (el `index.html` de la raíz apunta a `/src/main.tsx`, que un navegador no puede ejecutar directamente).

## Despliegue

El sitio se publica automáticamente en GitHub Pages mediante el workflow
`.github/workflows/deploy.yml`: cada push a `main` compila el proyecto y
publica el contenido de `dist/`.

El dominio personalizado (`centroartesanalcusco.com`) está configurado en
`public/CNAME`, el cual Vite copia automáticamente a `dist/` en cada build.

Si necesitas cambiar el dominio, actualiza también la configuración de DNS
del dominio y la sección **Settings → Pages** del repositorio en GitHub.
