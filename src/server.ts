/*
Criação do servidor com ExpressJS
*/
// importação do express e dos tipos requset e response
import express, { Request, Response } from 'express'

// instância do express na constante server
const server = express()

// criação da primeira rota com typescript
server.get('/', (req: Request, res: Response) => {
    res.send('Olá Mundo!')
})

// define a porta do servidor
server.listen(80) // 80 é a porta padrão para o navegador, dessa forma para acessar só precisa ser localhost
