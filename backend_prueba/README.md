# Backend - Prueba Técnica

Este es el backend (API) del proyecto, desarrollado con una arquitectura limpia para soportar la aplicación frontend.

## 🛠️ Stack Tecnológico

- **Node.js** con **Express**
- **TypeScript**
- **Prisma ORM**
- **MySQL** como base de datos relacional
- **Zod** para la validación de datos en las peticiones y servicios

---

## 🚀 Pasos para levantar el proyecto en local

Sigue estos pasos en orden para asegurar que tu entorno esté funcionando correctamente.

### 1. Clonar el repositorio

Si aún no lo has hecho, clona el repositorio desde GitHub:

```bash
git clone <URL_DEL_REPOSITORIO>
```

### 2. Instalar dependencias

Posiciónate en la carpeta del backend (`/backend_prueba`) e instala los paquetes necesarios. Puedes usar `npm` o `pnpm` (recomendado).

Usando pnpm:

```bash
cd backend_prueba
pnpm install
```

Usando npm:

```bash
cd backend_prueba
npm install
```

### 3. Configurar variables de entorno

Crea un archivo llamado `.env` en la raíz de la carpeta `backend_prueba`. Puedes usar el archivo `.env.example` como guía:

```bash
cp .env.example .env
```

Asegúrate de configurar correctamente tu variable `DATABASE_URL` para que apunte a tu base de datos MySQL local, además de colocar un `JWT_SECRET` y las credenciales de acceso a tu base de datos.

### 4. Ejecutar las Migraciones de la Base de Datos

Para crear las tablas en tu base de datos basándose en el esquema de Prisma, ejecuta el comando de despliegue. Este comando aplicará las migraciones existentes sin modificarlas:

```bash
npx prisma migrate deploy
```

### 5. Generar el Cliente de Prisma

Para que TypeScript entienda los modelos y podamos interactuar con la base de datos desde el código, necesitamos generar el cliente de Prisma:

```bash
npx prisma generate
```

### 6. Ejecutar la Semilla (Seed) de Datos

El proyecto cuenta con un archivo semilla que inyecta usuarios de prueba (un administrador y un usuario normal) para que puedas probar el sistema inmediatamente:

```bash
npx prisma db seed
```

_Credenciales creadas:_

- `admin@test.com` / `password1234`
- `user@test.com` / `password1234`

### 7. Ejecutar el Servidor

Una vez configurado todo, puedes iniciar el servidor en modo desarrollo.

Usando pnpm:

```bash
pnpm dev
```

Usando npm:

```bash
npm run dev
```

El servidor estará escuchando en el puerto configurado (normalmente `http://localhost:3000`).
