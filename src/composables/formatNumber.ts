interface FormatNumberOptions {
    precision?: number
    prefix?: string
    suffix?: string
    showSign?: boolean
}

export function formatNumber(number: number, options: FormatNumberOptions = {}): string {
    const precision = options.precision || 3
    const prefix = options.prefix || ''
    const suffix = options.suffix || ''

    const sign = number < 0 ? '-' : options.showSign ? '+' : ''
    const n = Math.abs(number)

    let formatedNumber = ''
    if (n < 1e3) {
        formatedNumber = helperFormatNumber(n, precision)
    } else if (n < 1e6) {
        formatedNumber = helperFormatNumber(n / 1e3, precision) + 'K'
    } else if (n < 1e9) {
        formatedNumber = helperFormatNumber(n / 1e6, precision) + 'M'
    } else if (n < 1e12) {
        formatedNumber = helperFormatNumber(n / 1e9, precision) + 'B'
    } else if (n < 1e15) {
        formatedNumber = helperFormatNumber(n / 1e12, precision) + 'T'
    } else {
        formatedNumber = n.toPrecision(precision).replace(/(?:\.0+|(\.\d+?)0+)$/, '$1')
    }

    return sign + prefix + formatedNumber + suffix
}

function helperFormatNumber(number: number, precision: number): string {
    if (Math.log(number) > precision) {
        return number.toFixed(0)
    } else {
        return number.toPrecision(precision).replace(/(?:\.0+|(\.\d+?)0+)$/, '$1')
    }
}
