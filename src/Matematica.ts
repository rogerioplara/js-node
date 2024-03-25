import { subscribe } from "diagnostics_channel"

export function somar(x: number, y: number): number {
    return x + y
}

export function subtrair(x: number, y: number): number {
    return x - y
}

export function multiplicar(x: number, y: number): number {
    return x * y
}

export function dividir(x: number, y: number): number {
    return x / y
}

// Método CommonJS
// module.exports.somar = somar
// module.exports.subtrair = subtrair
// module.exports.multiplicar = multiplicar
// module.exports.dividir = dividir

// Export default - método de fazer somente 1 export com o objeto 
export default {
    somar,
    subtrair,
    multiplicar
}