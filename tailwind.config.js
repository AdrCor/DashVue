import { createThemes } from 'tw-colors'
import { dashDark, dashLight, miamiDark, miamiLight, shadowDark, shadowLight } from './themes.ts'

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
            'dash-dark': dashDark,
            'dash-light': dashLight,
            'miami-dark': miamiDark,
            'miami-light': miamiLight,
            'shadow-dark': shadowDark,
            'shadow-light': shadowLight,
        }),
    ],
}
