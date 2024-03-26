/*
Criação do servidor com ExpressJS

Teoria das rotas

*/
// importação do express e dos tipos requset e response
import express, { Request, Response } from 'express'
import path from 'path'
import mainRoutes from './routes/index'
import painelRoutes from './routes/painel'

// função do express na constante server
const server = express()

// define uma pasta estática - torna publico
// deve observar sempre o caminho de execução do servidor
// a lib 'path' auxilia nessa questão, pegando o caminho absoluto do diretório
server.use(express.static(path.join(__dirname, '../public')))

// inserção das rotas no servidor
server.use('/', mainRoutes)
server.use('/painel', painelRoutes)

// executa caso não encontre a rota (inexistente)
server.use((req: Request, res: Response) => {
    res.status(404).send('Página não encontrada!')
})

// define a porta do servidor
server.listen(80) // 80 é a porta padrão para o navegador, dessa forma para acessar só precisa ser localhost
