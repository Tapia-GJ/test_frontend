# Backend Prueba Técnica

## Stack

- Node.js + Express
- TypeScript
- MySQL + Prisma

## Setup

1. Instalar dependencias:

   ```bash
   pnpm install
   ```

2. Configurar base de datos en `.env`:

   ```env
   DATABASE_URL="mysql://usuario:password@localhost:3306/backend_prueba"
   ```

3. Crear la base de datos en MySQL:

   ```sql
   CREATE DATABASE backend_prueba;
   ```

4. Ejecutar migraciones:

   ```bash
   npx prisma migrate dev --name init
   ```

5. Iniciar en modo desarrollo:
   ```bash
   pnpm dev
   ```
