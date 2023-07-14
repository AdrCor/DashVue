
export type Color = 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'

export interface Option {
    label: string
    [key: string]: any
}