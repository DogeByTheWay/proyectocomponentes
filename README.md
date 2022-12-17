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
