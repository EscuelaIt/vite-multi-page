import { resolve } from 'path'
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';

const pageData = {
    '/index.html': {
      title: 'Main Page',
    },
    '/contacto.html': {
        title: 'Contacta con nosotros',
    },
    '/productos/prod.html': {
      title: 'Producto xxx',
    },
};

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contacto: resolve(__dirname, 'contacto.html'),
        producto: resolve(__dirname, 'productos/prod.html')
      }
    }
  },
  plugins: [
    handlebars(
        {
            context: (page) => pageData[page],
            partialDirectory: resolve(__dirname, 'partials'),
        }
    )
  ],
})