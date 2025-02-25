import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import scrollbar from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        extend: {
            colors: {
                gradientStart: '#3b82f6',
                gradientMid: '#8b5cf6',
                gradientEnd: '#ec4899',
                track: '#f3f4f6',
            },
            fontFamily: {
                // Removed other fonts and kept only Poppins
                sans: ['Poppins', 'sans-serif'], // Poppins as the default sans font
            },
        },
    },

    plugins: [typography, forms, scrollbar],
};
