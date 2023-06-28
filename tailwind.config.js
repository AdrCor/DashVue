import { createThemes } from 'tw-colors'

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')


function opacity(value) {
    return Math.ceil(value * 2.55)
        .toString(16)
        .padStart(2, '0')
}

const baseDark = {
    'grad-start': '#6E88C4',
    'grad-stop': '#C4BD6E',
    fullback: '#111318' + opacity(90),
    front: '#D1D9E7',
    back: '#111318',
    primary: '#6E88C4',
}

const baseLight = {
    'grad-start': '#6E88C4',
    'grad-stop': '#C4BD6E',
    fullback: '#111318' + opacity(90),
    front: '#111318',
    back: '#D1D9E7',
    primary: '#6E88C4',
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
