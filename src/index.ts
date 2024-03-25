/*
Import e Export

CommonJS (funções padrão do node)
como exportar: module.exports.nomefuncao = funcao
como importar: const Arquivo = require('./Arquivo') - para utilizar deve ser feito como um objeto

ECMAS6
*/
// Método CommonJS
// const Matematica = require('./Matematica')

// Método ECMAS6
// dentro das chaves posso escolher o que importar
import * as Matematica from './Matematica' // importa tudo
import { dividir } from './Matematica' // importa o que selecionar dentro das chaves
import Mat from './Matematica' // importa do objeto default exportado do arquivo

let n1: number = 10
let n2: number = 2

console.log(`SOMA: ${Matematica.somar(n1, n2)}`)
console.log(`SUBTRAÇÃO: ${Matematica.subtrair(n1, n2)}`)
console.log(`MULTIPLICAÇÃO: ${Matematica.multiplicar(n1, n2)}`)
console.log(`DIVISÃO: ${dividir(n1, n2)}`)