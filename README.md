

# Fullstack User management
Uma aplicação básica de CRUD simulando uma interface de usuário. Foi elaborada com o objetivo de aprender sobre as funcionalidades do Docker, o uso do Postgres como banco de dados, o uso do Rust como linguagem de programação no backend.

## Tecnologias
* Docker com multi-stage builds
* Postgres
* Rust
* NextJS
* TypeScript


## Funcionalidades
* Inserir novos usuários
* Atualizar usuário de acordo com seu ID
* Excluir usuário específico
* Listar todos os usuários cadastrados

## Como usar

### Requisitos
Docker:
* Doc https://docs.docker.com/get-docker/
* Linux mint: https://linuxiac.com/how-to-install-docker-on-linux-mint-21/

Rust:
https://www.rust-lang.org/tools/install

NPM: https://github.com/nvm-sh/nvm

### Instalação
Após possuir todos os requisitos instalados, siga os passos abaixo:

* `cd backend && cargo build`, para compilar o backend.
* `cargo run`, para executar o backend.
* Em outro terminal executar o comando `cd frontend && npm install` para instalar as dependências do frontend.
* `npm run dev` para executar o frontend

### Executando com Docker
Executar os comandos a seguir na pasta raiz do projeto:
* `sudo docker compose build` para compilar o projeto com Docker.
* `sudo docker compose up -d` para executar o projeto dentro do container.
