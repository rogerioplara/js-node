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

// para instalar no ambiente dev
// npm install --save-dev @types/validator 
// dessa forma o linter do vscode funcionará
// para instalar npm install 'validator' - não vai ter o linter
import validator from 'validator'

// NODEMON - biblioteca util (npm install -g nodemon)
// faz um live reload do arquivo desejado 
// no caso desse projeto:
// nodemon dist/index.js

let n1: number = 10
let n2: number = 2

console.log(`SOMA: ${Matematica.somar(n1, n2)}`)
console.log(`SUBTRAÇÃO: ${Matematica.subtrair(n1, n2)}`)
console.log(`MULTIPLICAÇÃO: ${Matematica.multiplicar(n1, n2)}`)
console.log(`DIVISÃO: ${dividir(n1, n2)}`)

console.log('\n==== VALIDATOR ====')
const email = 'rogerio@gmail.com'
console.log(validator.isEmail(email)) // retorna um boolean

let ip = '127.0.0.1'
console.log(validator.isIP(ip)) // true

let ip2 = '127.999.827.21'
console.log(validator.isIP(ip2)) // false

let name: string = 'Rogerio'
if (validator.isLowercase(name)) {
    console.log(`A String ${name} é toda minúscula`)
} else {
    console.log(`A String ${name} NÃO é toda minúscula`)
}

// ts-node permite rodar arquivos typescript, não necessitando da pasta DIST com o arquivo js
// ts-node npm install -g ts-node

// para rodar o arquivo typescript
// ts-node src/index.ts

// funciona em conjunto com o nodemon
// nodemon src/index.ts

// é possível incluir esse comando nos scripts do package.json
// nesse projeto, foi adicionado o script:
// "start-dev": "nodemon src/index.ts"
// para executar o live reload: npm run start-dev