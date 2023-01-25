#Proyecto 2EV

TAILWIND INSTALLATION POR PRIMERA VEZ:

terminal
    npm install -D tailwindcss
    cd src/web/tailwind
    npx tailwindcss init

tailwind.config.js
    module.exports = {
        content: ["../*.{html,js}"],
        theme: {
        extend: {},
    },
    plugins: [],
    }

tailwind main.css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

terminal
    npx tailwindcss -i main.css -o ../css/tailwind.css --watch <---- ESTE COMANDO DEBE EJECUTARSE DONDE ESTE EL ARCHIVO DE CONFIGURACION "tailwind.config.js"

html
      <link href="/css/tailwind.css" rel="stylesheet">

VERSION RAPIDA(YA ESTA SENTENCIADO TAILWIND EN package.json)

npm install;
npm run tailwind;

DOCKER:


EJECUTAR EL COMANDO EN LA CARPETA DONDE ESTE EL docker-compose.yml : docker-compose up -d

Extensiones Visual Studio:
    - Docker
    - Dev Containers

Entrar dentro del contenedor:
Icono ballena Docker.. Click derecho en el contenedor que acabamos de crear y "Attach to Visual Studio"

Una vez abierto la nueva ventana de VSCODE, ir a la lupa de Git y Open Folder... La ruta que hay que poner en la pequeña
ventana emergente es /var/www De esta forma ya tenemos nuestros archivos php en un mismo sitio.

CUALQUIER CAMBIO EN EL CODIGO PHP SE DEBERÁ HACER UTILIZANDO ESTE ENTORNO DE TRABAJO, SINO LOS CAMBIOS NO SE APLICARAN DE FORMA
LOCAL