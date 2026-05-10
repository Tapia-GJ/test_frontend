# Frontend - Prueba Técnica

Este es el cliente web del proyecto, desarrollado para consumir la API y proveer una interfaz de usuario moderna.

## 🛠️ Stack Tecnológico

- **Framework:** React con Vite
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Estado Global:** Zustand
- **Validaciones:** Zod
- **Enrutamiento:** React Router

---

## 🚀 Pasos para levantar el proyecto en local

Sigue estos pasos para arrancar el entorno de desarrollo del frontend. Asegúrate de tener el backend corriendo primero para poder hacer peticiones a la API.

### 1. Clonar el repositorio

Si aún no lo hiciste, clona el repositorio desde GitHub:

```bash
git clone <URL_DEL_REPOSITORIO>
```

### 2. Instalar dependencias

Posiciónate en la carpeta del frontend (`/prueba_abrhil`) e instala los paquetes necesarios. Puedes usar `npm` o `pnpm` (recomendado).

Usando pnpm:

```bash
cd prueba_abrhil
pnpm install
```

Usando npm:

```bash
cd prueba_abrhil
npm install
```

### 3. Configurar variables de entorno

Crea un archivo llamado `.env` en la raíz de la carpeta `prueba_abrhil`. Puedes usar el archivo `.env.example` como ejemplo:

```bash
cp .env.example .env
```

Asegúrate de que la variable `VITE_API_URL` apunte a la ruta donde está corriendo tu backend local (por defecto `http://localhost:3000`).

### 4. Ejecutar el Servidor de Desarrollo

Si seguiste los pasos al pie de la letra, ya puedes iniciar la aplicación en tu navegador.

Usando pnpm:

```bash
pnpm dev
```

Usando npm:

```bash
npm run dev
```

La consola te indicará la URL local (normalmente `http://localhost:5173`) donde podrás visualizar y probar el proyecto.
