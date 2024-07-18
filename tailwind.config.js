/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                romantic: ['Dancing Script', 'cursive'],
                'open-sans': ['Open Sans', 'sans-serif']
            }
        }
    },
    plugins: []
}
