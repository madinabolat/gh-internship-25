# 💡 Tracker – Week 1
### 🚀 Topics: Docker, Prisma, PostgreSQL

---

## 📦 1. Docker Setup

### ✅ Task Summary:
- Set up Docker and Docker Compose
- Create containers for PostgreSQL and your backend

### 🧠 Why am I doing this?
- Why use Docker instead of installing Postgres locally?
- What does Docker Compose do?
- What does each line in `docker-compose.yml` mean?

### ✍️ One-liner Note:
> "Docker Compose lets me spin up isolated environments with Postgres + backend quickly and reproducibly."

### 🛠️ Break & Debug:
- Change the Postgres port from 5432 to something else. Can your app still connect?

---

## 🧰 2. PostgreSQL + Prisma Setup

### ✅ Task Summary:
- Set up `.env` file with DB connection string
- Initialize Prisma schema
- Run `npx prisma db push` to sync models to DB

### 🧠 Why am I doing this?
- What is Prisma doing when I run `db push`?
- Why do I need a `.env` file?

### ✍️ One-liner Note:
> "Prisma reads my schema and creates tables in the Postgres DB."

### 🛠️ Break & Debug:
- Rename a field in your model and forget to update it in your resolver. What happens?

---

## 🧪 3. Prisma Client Queries

### ✅ Task Summary:
- Use Prisma Client to query your database (e.g. `prisma.user.findMany()`)

### 🧠 Why am I doing this?
- How does Prisma Client know what tables exist?
- Where does it get its types?

### ✍️ One-liner Note:
> "Prisma auto-generates a typed DB client so I can safely query in TypeScript."

### 🛠️ Break & Debug:
- Write an invalid query and try to compile — what kind of error do you get?

---

## 🔄 4. Seed Script (Optional)

### ✅ Task Summary:
- Write a script to populate the DB with test data using Prisma

### 🧠 Why am I doing this?
- Why would I want test data while developing?

### ✍️ One-liner Note:
> "A seed script helps me test features without manually entering data."

### 🛠️ Break & Debug:
- Add a seed user with the same unique email twice. What happens?

---

## 📁 Folder Structure Recap

```
server/
├── prisma/
│   └── schema.prisma
├── src/
│   └── ...
├── .env
├── docker-compose.yml
```

---
# 💡 Tracker – Week 2
### 🚀 Topics: GraphQL, Redis

---

## 🔮 1. GraphQL Setup

### ✅ Task Summary:
- Install Apollo Server (via NestJS integration)
- Create GraphQL schema and resolvers
- Enable Playground for testing

### 🧠 Why am I doing this?
- What is GraphQL doing differently from REST?
- Why do I need a `schema.gql` file?
- What’s the benefit of using `@nestjs/graphql`?

### ✍️ One-liner Note:
> "GraphQL gives the client control over what data they want, using a strongly-typed schema."

### 🛠️ Break & Debug:
- Add a resolver that returns null — what does the Playground show?

---

## 🧠 2. GraphQL Context & Authentication

### ✅ Task Summary:
- Add `context: ({ req, res }) => ({ req, res })` to config
- Pass request/session info to resolvers

### 🧠 Why am I doing this?
- How does auth info travel from HTTP to GraphQL resolvers?
- What would happen if I didn’t set this context?

### ✍️ One-liner Note:
> "The GraphQL context bridges HTTP and resolvers — I can access headers, cookies, auth, etc."

### 🛠️ Break & Debug:
- Try logging `req.headers` inside a resolver. What do you see?

---

## 🛠️ 3. Query & Mutation Setup

### ✅ Task Summary:
- Define types in GraphQL (`@ObjectType()`, `@Field()`)
- Create queries and mutations (`@Query()`, `@Mutation()`)

### 🧠 Why am I doing this?
- What’s the difference between Query vs Mutation?
- How do resolvers know which function to run?

### ✍️ One-liner Note:
> "Queries fetch data; Mutations modify it. Decorators link schema to logic."

### 🛠️ Break & Debug:
- Make a mutation that returns nothing. What error do you get?

---

## ⚡ 4. Redis Integration

### ✅ Task Summary:
- Install Redis + connect using a Redis client (like `ioredis`)
- Store and retrieve a key/value

### 🧠 Why am I doing this?
- What problems does Redis solve that Postgres doesn't?
- Where does Redis run — is it in Docker too?

### ✍️ One-liner Note:
> "Redis is a fast, in-memory key-value store — perfect for caching, sessions, and rate limits."

### 🛠️ Break & Debug:
- Set a key with a 2-second TTL. Does it expire?

---

## 🔐 5. Use Redis for Session or Caching (Stretch Goal)

### ✅ Task Summary:
- Use Redis to store login sessions or cache DB responses

### 🧠 Why am I doing this?
- What would break if Redis went down?
- When should I choose Redis over just hitting Postgres?

### ✍️ One-liner Note:
> "Redis reduces load on Postgres by caching frequent reads or storing temp sessions."

### 🛠️ Break & Debug:
- Cache a Prisma query result. Does it update if you change the DB directly?

---

## 🧭 Overall Week 2 Summary Prompt

> “How does a GraphQL request flow from client → NestJS → resolver → DB → response?”

Write it out or draw the diagram — and you're no longer just "doing the tasks," you're becoming the system builder. 🔧⚡