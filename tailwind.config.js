import { createThemes } from 'tw-colors'
import { baseDark, baseLight } from './themes.ts'

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            screens: {
                xs: '475px',
                ...defaultTheme.screens,
            },
        },
    },
    plugins: [
        createThemes({
            'base-dark': baseDark,
            'base-light': baseLight,
        }),
    ],
}
