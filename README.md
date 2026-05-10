# Prueba Técnica - Frontend Developer

Este proyecto es una prueba técnica para el puesto de **Frontend Developer**. El repositorio está dividido en dos partes principales: la aplicación cliente (frontend) y la API (backend).

## Stack Tecnológico

**Frontend:**

- **React** con **Vite**
- **TypeScript**
- **Tailwind CSS** para los estilos
- **Zustand** para el manejo del estado global (usuario logueado)
- **Zod** para la validación de formularios y esquemas

**Backend:**

- **Node.js** con **Express**
- **TypeScript**
- **Prisma ORM**
- **MySQL** como base de datos relacional
- **Zod** para la validación de datos en las peticiones y servicios

## 📂 Estructura del Proyecto

Al ser un proyecto pequeño, se optó por una estructura de carpetas directa y funcional:

```text
/ (Raíz del proyecto)
├── backend_prueba/       # API y base de datos
│   ├── prisma/           # Esquemas de BD, migraciones y seeds
│   └── src/
│       ├── auth/         # Rutas, controladores y servicios de autenticación
│       ├── controllers/  # Controladores REST
│       ├── database/     # Configuración y cliente de Prisma
│       ├── models/       # DTOs y validaciones (Zod)
│       ├── routes/       # Definición de endpoints
│       └── services/     # Lógica de negocio y consultas a BD
│
└── prueba_abrhil/        # Aplicación Frontend
    ├── public/           # Assets estáticos (iconos, SVGs)
    └── src/
        ├── components/   # Componentes UI reutilizables (Botones, Tablas, Header)
        ├── config/       # Configuraciones generales (ej. Axios)
        ├── layouts/      # Layouts base (RootLayout)
        ├── pages/        # Vistas completas agrupadas por dominio (admin, auth, user) y el 404
        ├── routes/       # Enrutamiento de la aplicación (React Router)
        ├── schemas/      # Esquemas de validación del lado del cliente (Zod)
        ├── services/     # Peticiones HTTP a la API externa
        ├── store/        # Estado global (Zustand)
        └── types/        # Definiciones de tipos de TypeScript
```

## Decisiones de Arquitectura

### 1. Sistema de Auditoría/Logs y el porque de no usar Triggers SQL

Para el registro de acciones (creación, edición y eliminación de usuarios) se optó por crear una tabla `AuditLog` administrada desde la capa de la aplicación (los servicios), en lugar de usar **Triggers** en la base de datos.

Dado que estamos utilizando **Prisma ORM**, gestionar la auditoría a nivel de aplicación, mediante el ORM. Resultó ser la manera más viable, práctica y escalable en función del tiempo disponible. Delegar esta responsabilidad al backend en Node.js nos permite identificar fácilmente "quién" realizó la acción sin tener que lidiar con variables de sesión complejas en MySQL.

### 2. Uso de Prisma ORM

Se eligió **Prisma** debido a la gran velocidad de codificación que aporta. Para un proyecto de prueba técnica de este tamaño, nos permite enfocarnos rápidamente en la lógica y tener un esquema de base de datos declarativo fácil de leer.

## Credenciales de Prueba

Se ha configurado una "semilla" (seed) en la base de datos que crea dos usuarios por defecto para poder probar el sistema inmediatamente:

| Rol                | Correo           | Contraseña     |
| :----------------- | :--------------- | :------------- |
| **Administrador**  | `admin@test.com` | `password1234` |
| **Usuario Normal** | `user@test.com`  | `password1234` |

---

## Cómo ejecutar el proyecto

Las instrucciones detalladas para instalar las dependencias y levantar cada entorno se encuentran en sus respectivos directorios:

- **Backend:** Consulta el [README del Backend](./backend_prueba/README.md) para levantar la base de datos MySQL, ejecutar las migraciones, la semilla y arrancar el servidor.
- **Frontend:** Consulta el [README del Frontend](./prueba_abrhil/README.md) para instalar y arrancar la aplicación de React.
