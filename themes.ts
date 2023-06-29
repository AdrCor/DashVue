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
    'neutral-tx': string
    'on-neutral': string

    primary: string
    'primary-bg': string
    'primary-tx': string
    'on-primary': string

    secondary: string
    'secondary-bg': string
    'secondary-tx': string
    'on-secondary': string

    success: string
    'success-bg': string
    'success-tx': string
    'on-success': string

    warning: string
    'warning-bg': string
    'warning-tx': string
    'on-warning': string

    danger: string
    'danger-bg': string
    'danger-tx': string
    'on-danger': string
}

export const baseDark: Theme = {
    'grad-start': '#121419',
    'grad-stop': '#D0D6E7',
    back: '#121419' + opacity(90),

    layer: '#D0D6E7',
    neutral: '#D0D6E7',
    'neutral-bg': '#121419',
    'neutral-tx': '#D0D6E7',
    'on-neutral': '#D0D6E7',

    primary: '#6E88C4',
    'primary-bg': '#6E88C4',
    'primary-tx': '#6E88C4',
    'on-primary': '#141F38',

    secondary: '#C4BD6E',
    'secondary-bg': '#C4BD6E',
    'secondary-tx': '#C4BD6E',
    'on-secondary': '#1A180D',

    success: '#6EC491',
    'success-bg': '#70A786',
    'success-tx': '#6EC491',
    'on-success': '#133922',

    warning: '#C49D6E',
    'warning-bg': '#A88F71',
    'warning-tx': '#C49D6E',
    'on-warning': '#382713',

    danger: '#C46E6E',
    'danger-bg': '#A87171',
    'danger-tx': '#C46E6E',
    'on-danger': '#381313',
}

export const baseLight: Theme = {
    'grad-start': '#6E88C4',
    'grad-stop': '#D0D6E7',
    back: '#D0D6E7' + opacity(60),

    layer: '#121419',
    neutral: '#121419',
    'neutral-bg': '#D0D6E7',
    'neutral-tx': '#121419',
    'on-neutral': '#121419',

    primary: '#6E88C4',
    'primary-bg': '#4C68A8',
    'primary-tx': '#395BA8',
    'on-primary': '#141F38',

    secondary: '#C4BD6E',
    'secondary-bg': '#C4BD6E',
    'secondary-tx': '#8D8420',
    'on-secondary': '#1A180D',

    success: '#6EC491',
    'success-bg': '#70A786',
    'success-tx': '#308B54',
    'on-success': '#133922',

    warning: '#C49D6E',
    'warning-bg': '#A88F71',
    'warning-tx': '#A87639',
    'on-warning': '#382713',

    danger: '#C46E6E',
    'danger-bg': '#A87171',
    'danger-tx': '#A83939',
    'on-danger': '#381313',
}
