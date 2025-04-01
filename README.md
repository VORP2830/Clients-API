# Clients API

## Sumário

1. [Tecnologias Utilizadas](#tecnologias-utilizadas)  
2. [Estrutura do Projeto](#estrutura-do-projeto)  
3. [Como Executar](#como-executar)  
4. [Como Criar/Rodar Migrations](#como-criarrodar-migrations)  

---

## Tecnologias Utilizadas

- **[NestJS](https://nestjs.com/)**  
- **[PostgreSQL](https://www.postgresql.org/)**  
- **[Docker](https://www.docker.com/)**  

---

## Estrutura do Projeto

Abaixo está um exemplo de como as pastas podem ser organizadas dentro de um projeto NestJS (podendo variar conforme seu setup):

- **config/**: Armazena configurações da aplicação (ex.: banco de dados, variáveis de ambiente, etc.).  
- **controller/**: Ficam os controladores (routes/endpoints) que recebem as requisições HTTP.  
- **service/**: Lógica de negócio e acesso a repositórios (models) ou integrações externas.  
- **model/**: Entidades (schemas) e definições ligadas diretamente ao domínio da aplicação.  
- **shared/**: Código que pode ser usado em diferentes partes da aplicação (helpers, utils, constantes, etc.).

---

## Como Executar

### Passo a Passo

**Instalar dependências**  
```bash
npm install
```

**Configurar variáveis de ambiente**  
- Crie um arquivo `.env` (caso não exista) e defina configurações como credenciais do banco de dados, URLs de APIs, etc.  
- Exemplo:
    ```bash
  DATABASE_HOST=          # O endereço do host onde o banco de dados está hospedado
  DATABASE_PORT=          # A porta usada para conectar ao banco de dados
  DATABASE_USER=          # O nome de usuário usado para autenticação no banco de dados
  DATABASE_PASSWORD=      # A senha do usuário para autenticação no banco de dados
  DATABASE_NAME=          # O nome do banco de dados que a aplicação irá acessar
  ```

**Rodar localmente**  
Caso prefira rodar localmente (sem Docker), certifique-se de ter o PostgreSQL instalado e em execução.  
```bash
npm run start:dev     # modo de desenvolvimento (hot reload)
```
ou  
```bash
npm run start:prod    # compila e sobe em modo de produção
```
Verifique se as variáveis de ambiente (`.env`) estão corretas.

---

## Como Rodar com Docker Compose

> Esse projeto já está preparado para ser executado com Docker e Docker Compose.

### Executando o projeto com Docker

1. **Crie o arquivo `.env`** com as variáveis do banco de dados:
   ```bash
   DB_HOST=db
   DB_PORT=5432
   DB_USER=postgres
   DB_PASSWORD=postgres
   DB_NAME=clients_db
   ```

2. **Execute o Docker Compose:**
   ```bash
   docker-compose up --build
   ```

   Esse comando:
   - Sobe o banco de dados PostgreSQL
   - Sobe a API NestJS
   - Aplica automaticamente as migrations

3. **Acesse a aplicação:**
   - API: [http://localhost:3000](http://localhost:3000)
   - Scalar (Equivalente ao swagger): [http://localhost:3000/scalar](http://localhost:3000/scalar)

4. **Parar os containers:**
   ```bash
   docker-compose down
   ```