# 💡 GrowthHungry Pre-Internship Engineering Tracker – Week 1
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

Ready for Week 2 when you are ✨