/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'eng-dark': '#0f172a', // Slate 900
                'eng-slate': '#334155', // Slate 700
                'eng-blue': '#38bdf8', // Sky 400 (muted accent)
                'eng-text': '#e2e8f0', // Slate 200
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Sora', 'sans-serif'],
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },
    plugins: [],
};
