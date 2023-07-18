
function opacity(value: number) {
    return Math.ceil(value * 2.55)
        .toString(16)
        .padStart(2, '0')
}

interface Theme {
    'grad-start': string
    'grad-stop': string
    back: string

    layer: string
    neutral: string
    'neutral-bg': string
    'on-neutral': string

    primary: string
    'primary-bg': string
    'on-primary': string

    secondary: string
    'secondary-bg': string
    'on-secondary': string

    success: string
    'success-bg': string
    'on-success': string

    warning: string
    'warning-bg': string
    'on-warning': string

    danger: string
    'danger-bg': string
    'on-danger': string
}

export const dashDark: Theme = {
    'grad-start': '#121419',
    'grad-stop': '#D0D6E7',
    back: '#121419' + opacity(90),

    layer: '#D0D6E7',
    neutral: '#D0D6E7',
    'neutral-bg': '#D0D6E7',
    'on-neutral': '#121419',

    primary: '#6E88C4',
    'primary-bg': '#6E88C4',
    'on-primary': '#141F38',

    secondary: '#C4BD6E',
    'secondary-bg': '#C4BD6E',
    'on-secondary': '#1A180D',

    success: '#6EC491',
    'success-bg': '#70A786',
    'on-success': '#133922',

    warning: '#C49D6E',
    'warning-bg': '#A88F71',
    'on-warning': '#382713',

    danger: '#C46E6E',
    'danger-bg': '#A87171',
    'on-danger': '#381313',
}

export const dashLight: Theme = {
    'grad-start': '#6E88C4',
    'grad-stop': '#D0D6E7',
    back: '#D0D6E7' + opacity(60),

    layer: '#121419',
    neutral: '#121419',
    'neutral-bg': '#121419',
    'on-neutral': '#D0D6E7',

    primary: '#395BA8',
    'primary-bg': '#4C68A8',
    'on-primary': '#141F38',

    secondary: '#8D8420',
    'secondary-bg': '#C4BD6E',
    'on-secondary': '#1A180D',

    success: '#308B54',
    'success-bg': '#70A786',
    'on-success': '#133922',

    warning: '#A87639',
    'warning-bg': '#A88F71',
    'on-warning': '#382713',

    danger: '#A83939',
    'danger-bg': '#A87171',
    'on-danger': '#381313',
}

export const miamiDark: Theme = {
    'grad-start': '#CC4883',
    'grad-stop': '#43B4BF',
    back: '#17191A' + opacity(90),

    layer: '#E6F1F2',
    neutral: '#E6F1F2',
    'neutral-bg': '#E6F1F2',
    'on-neutral': '#17191A',

    primary: '#43B4BF',
    'primary-bg': '#43B4BF',
    'on-primary': '#123033',

    secondary: '#CC4883',
    'secondary-bg': '#CC4883',
    'on-secondary': '#331724',

    success: '#42BF74',
    'success-bg': '#53A674',
    'on-success': '#163F26',

    warning: '#D9A54C',
    'warning-bg': '#A68753',
    'on-warning': '#3F3016',

    danger: '#D84B57',
    'danger-bg': '#A55259',
    'on-danger': '#3F1619',
}

export const miamiLight: Theme = {
    'grad-start': '#CC4883',
    'grad-stop': '#43B4BF',
    back: '#E6F1F2' + opacity(80),

    layer: '#17191A',
    neutral: '#17191A',
    'neutral-bg': '#17191A',
    'on-neutral': '#E6F1F2',

    primary: '#36A8B3',
    'primary-bg': '#43B4BF',
    'on-primary': '#123033',

    secondary: '#CC4883',
    'secondary-bg': '#CC4883',
    'on-secondary': '#331724',

    success: '#1E994F',
    'success-bg': '#50B277',
    'on-success': '#163F26',

    warning: '#A67521',
    'warning-bg': '#C09956',
    'on-warning': '#3F3016',

    danger: '#B2232F',
    'danger-bg': '#BF6068',
    'on-danger': '#3F1619',
}

export const shadowDark: Theme = {
    'grad-start': '#333',
    'grad-stop': '#ccc',
    back: '#000000' + opacity(90),

    layer: '#fff',
    neutral: '#fff',
    'neutral-bg': '#fff',
    'on-neutral': '#000',

    primary: '#fff',
    'primary-bg': '#fff',
    'on-primary': '#000',

    secondary: '#999',
    'secondary-bg': '#999',
    'on-secondary': '#000',

    success: '#A2CBB3',
    'success-bg': '#A2CBB3',
    'on-success': '#000',

    warning: '#CBB9A3',
    'warning-bg': '#CBB9A3',
    'on-warning': '#000',

    danger: '#CBA3A6',
    'danger-bg': '#CBA3A6',
    'on-danger': '#000',
}

export const shadowLight: Theme = {
    'grad-start': '#ccc',
    'grad-stop': '#333',
    back: '#ffffff' + opacity(90),

    layer: '#000',
    neutral: '#000',
    'neutral-bg': '#000',
    'on-neutral': '#fff',

    primary: '#000',
    'primary-bg': '#000',
    'on-primary': '#fff',

    secondary: '#555',
    'secondary-bg': '#555',
    'on-secondary': '#fff',

    success: '#1E653B',
    'success-bg': '#0F4D28',
    'on-success': '#fff',

    warning: '#735A17',
    'warning-bg': '#5A4817',
    'on-warning': '#fff',

    danger: '#651414',
    'danger-bg': '#5A1616',
    'on-danger': '#fff',
}
