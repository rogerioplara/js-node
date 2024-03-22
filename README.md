# NodeJS

runtime que permite executar javascript no backend

deixamos de ter acesso ao DOM dos browser e passamos a ter acesso a módulos:
- manipular filesystem do servidor
- criar servidores http e https
- trabalhar com *streams* de dados
- criptografar dados
- ter acesso a dados do SO
- gestão de bases de dados

utiliza apenas um processo para solicitações assíncronas

## Comandos

iniciar projeto:
npm init (permite algumas configurações)
npm init -y (inicia com todos os valores padrão)

#### Instalar typescript no pc:
npm install -g typescript

#### Iniciar arquivo de config do ts
tsc --init

#### Instalar dependências baseadas no package.json
npm install

#### Setar a pasta de monitoramento do typescript
tsc -w (na pasta que estão os arquivos ts)
Dessa forma será 'compilado' automaticamente para js na pasta dist
