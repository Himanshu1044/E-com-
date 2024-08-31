import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                about: resolve(__dirname, "about.html"),
                addtocart: resolve(__dirname, "addtocart.html"),
                contact: resolve(__dirname, "contact.html"),
                products: resolve(__dirname, "products.html"),
            },
        },
    },
});