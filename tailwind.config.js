import tailwindcss from '@tailwindcss/vite'
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {},
    },
    plugins: [tailwindcss(),],
};
