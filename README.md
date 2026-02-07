 # API Task

 > **Nota**: Este é meu primeiro projeto backend público. Ele foi desenvolvido para consolidar conhecimentos em **arquitetura, boas práticas e robustez em APIs**.
 > Projetos futuros incluirão autenticação, testes e funcionalidades mais avançadas.

## 📚 Sobre o projeto

**API de Tarefas** uma API REST para gerenciamento de tarefas, desenvolvida como projeto de estudo para consolidar conhecimentos em Node.js, TypeScript, Express e Prisma.

O projeto foca em arquitetura em camadas (Controller → Service → Repository), tratamento global de erros e boas práticas de desenvolvimento.

**Status:** ✅ Funcional

---

## 🚀 Como Executar

### Pré-requisitos
- Docker e Docker Compose

### Setup

**1. Clone o repositório:**
```bash
git clone https://github.com/By-Moonteiro/api-task.git
cd api-task
```

**2. Instale dependências:**
```bash
# Usando pnpm
pnpm install

# Ou usando npm
npm install
```

**3. Configure as variáveis de ambiente:**
```bash
cp .env.example .env
```

**4. Suba o ambiente:**
```bash
docker compose up -d
```

**5. Gerando Prisma Client:**
```bash
# Usando pnpm
pnpm prisma:generate

# Ou usando npm
npm run prisma:generate
```

**6. Rodando em desenvolvimento:**
```bash
# Usando pnpm
pnpm dev

# Ou usando npm
npm run dev
```

> **Dica**: Para rodar em produção, use os scripts build e start

---

## 🏗️ Arquitetura

```
src/
├── app.ts                          # Configuração Express
├── server.ts                       # Inicialização do servidor
├── entities/                       # Entidade do sistema
│   └── task.entity.ts
├── controllers/                    # Lógica das requisições
│   └── task.controller.ts
├── routes/                         # Definição das rotas
│   └── task.routes.ts
├── middlewares/                    # Middlewares Express        
│   └── error-handle.ts             # Middleware global de tratamento de erros
├── repositories/                   # Camada de persistência
│   ├── database.ts                 # Conexão e criação do Prisma Client
│   ├── prisma-task.repository.ts 
│   └── task.repository.ts          # Interface de contrato do banco
├── services/                       # Regras de negocio
│   └── task.service.ts
└── errors/                         # Erros customizados
    └── app-error.ts
```

---

## 🔧 Stack

**Runtime & Linguagem**
- Node.js
- TypeScript

**Backend**
- Express

**Banco de Dados**
- PostgreSQL
- Prisma ORM

**Infra & Tools**
- Docker / Docker Compose
- Dotenv
- Tsx

---

## 📝 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Usuário e senha do banco
DB_USER=postgres
DB_PASSWORD=sua_senha
DB_NAME=api-task

# URL completa do banco (usada pelo Prisma)
DATABASE_URL="postgresql://${DB_USER}:${DB_PASSWORD}@localhost:5432/${DB_NAME}?schema=public"

```

---

## 🐳 Docker

**Subir o ambiente:**
```bash
docker compose up -d
```

**Parar o ambiente:**
```bash
docker compose down
```

**Resetar banco (apaga dados):**
```bash
docker compose down -v
docker compose up -d
```

---

- # Tratamento de Erros

- A API possui middleware global de erros, garantindo respostas consistentes para todas as rotas.

- Foram criados erros customizados (**AppError**), que facilitam manutenção e evitam repetição de código.

## Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| POST | /task | Criar tarefa |
| GET | /task | Listar todas |
| GET | /task/:id | Buscar por ID |
| PATCH | /task/:id | Atualizar status |
| DELETE | /task/:id | Deletar |

---


## 📖 Aprendizados

- [X] CRUD básico com Express + Prisma
- [X] Separação por camadas (Controller/Service/Repository)
- [X] Middleware global de erros e classe customizada **AppError**
- [X] Configuração de ambiente com Docker e variáveis de ambiente
- [X] Scripts de desenvolvimento e produção com TSX e Node

---


## 📄 Licença

MIT