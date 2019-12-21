import { NORM, UNIT_S, UNIT_M, UNIT_L } from './constant'

type Nullable<T> = T | null

const NormRegex = new RegExp(Object.keys(NORM).join('|'), 'g')
export function hanzi_norm(str: string) {
    return str.replace(NormRegex, match => NORM[match])
}

export function parseInt_s(str: string): Nullable<bigint> {
    return null
}

export function parseInt_m(str: string): Nullable<bigint> {
    return null
}

export function parseInt_l(str: string): Nullable<bigint> {
    return null
}

export function parseFloat_s(str: string): number {
    return NaN
}

export function parseFloat_m(str: string): number {
    return NaN
}

export function parseFloat_l(str: string): number {
    return NaN
}
