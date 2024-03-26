// criação do router
import { Router, Request, Response } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    // pegar os produtos do banco de dados
    // organizar as informações desses produtos
    // envia para o template engine

    res.send('Olá Mundo do Router principal')
})

router.get('/contato', (req: Request, res: Response) => {
    res.send('Formulário de contato')
})

router.get('/sobre', (req: Request, res: Response) => {
    res.send('Página institucional sobre a empresa')
})

router.get('/noticias', (req: Request, res: Response) => {
    res.send('Lista de notícias')
})

export default router