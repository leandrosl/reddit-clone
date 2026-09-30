# Reddit Clone

Um projeto para fins de estudo

Um sistema com front-end feito em React e uma API feita em Laravel, simulando uma plataforma de posts igual ao Reddit

## Stack
- Laravel
- PostgreSQL
- React

## Executando com Docker

É necessário ter apenas o Docker com o plugin Compose instalado na máquina host.
O código Laravel deve estar em `api/` e o código React (Vite ou Create React App)
em `webapp/`.

Suba os serviços com:

```bash
docker compose up --build
```

Depois, acesse o frontend em <http://localhost:5173> e a API em
<http://localhost:8000>. O PostgreSQL fica disponível apenas dentro da rede do
Compose, com banco `reddit`, usuário `reddit` e senha `reddit` por padrão.

Para executar as migrations, use outro terminal:

```bash
docker compose exec api php artisan migrate
```

As credenciais do banco podem ser alteradas com as variáveis `DB_DATABASE`,
`DB_USERNAME` e `DB_PASSWORD` antes do comando `docker compose up`.
