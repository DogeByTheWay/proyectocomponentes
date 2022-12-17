# pcComponentes


TAILWIND INSTALLATION:

terminal
    npm install -D tailwindcss
    npx tailwindcss init

tailwind.config.js
    module.exports = {
        content: ["./*.*"],
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
    npx tailwindcss -i ./tailwind/main.css -o ./css/main.css --watch

html
      <link href="/css/main.css" rel="stylesheet">
