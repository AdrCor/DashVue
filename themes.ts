function opacity(value: number) {
    return Math.ceil(value * 2.55)
        .toString(16)
        .padStart(2, '0')
}

interface Theme {
    'grad-start': string
    'grad-stop': string
    fullback: string

    front: string
    back: string
    layout: string

    primary: string
    'primary-front': string
    'primary-back': string

    secondary: string
    'secondary-front': string
    'secondary-back': string

    success: string
    'succes-front': string
    'succes-back': string

    warning: string
    'warning-front': string
    'warning-back': string

    danger: string
    'danger-front': string
    'danger-back': string
}

export const baseDark = {
    'grad-start': '#6E88C4',
    'grad-stop': '#C4BD6E',
    fullback: '#121419' + opacity(90),

    front: '#D0D6E7',
    back: '#121419',
    layout: '#D0D6E7',

    primary: '#6E88C4',
    'primary-front': '#0D111A',
    'primary-back': '#6E88C4',

    secondary: '#C4BD6E',
    'secondary-front': '#19180C',
    'secondary-back': '#C4BD6E',

    success: '#6EC491',
    'succes-front': '#0C1911',
    'succes-back': '#6EC491',

    warning: '#C49D6E',
    'warning-front': '#19130D',
    'warning-back': '#C49D6E',

    danger: '#C46E6E',
    'danger-front': '#190D0D',
    'danger-back': '#C46E6E',
}

export const baseLight = {
    'grad-start': '#6E88C4',
    'grad-stop': '#C4BD6E',
    fullback: '#D0D6E7' + opacity(80),

    front: '#121419',
    back: '#D0D6E7',
    layout: '#121419',

    primary: '#6E88C4',
    'primary-front': '#0D111A',
    'primary-back': '#6E88C4',

    secondary: '#C4BD6E',
    'secondary-front': '#19180C',
    'secondary-back': '#C4BD6E',

    success: '#6EC491',
    'succes-front': '#0C1911',
    'succes-back': '#6EC491',

    warning: '#C49D6E',
    'warning-front': '#19130D',
    'warning-back': '#C49D6E',

    danger: '#C46E6E',
    'danger-front': '#190D0D',
    'danger-back': '#C46E6E',
}
