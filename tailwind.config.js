import { createThemes } from 'tw-colors'

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')


const baseDark = {
    front: '#D1D9E7',
    back: '#111318'
}

const baseLight = {
    primary: '#111318',
    background: '#D1D9E7',
}


export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Quicksand', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        createThemes({
            'base-dark': baseDark,
            'base-light': baseLight
        })
    ],
}
