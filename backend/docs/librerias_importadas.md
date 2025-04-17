# Registro de Librerías y Dependencias Importadas

Este documento lista todas las librerías externas utilizadas e importadas en el backend del proyecto Glamping.  
Cada vez que se use una nueva dependencia, por favor **añádela aquí**, con una breve descripción y en qué archivos se emplea.

---

## Listado de dependencias actuales

### 1. express
- **Función:** Framework principal para crear el servidor web y definir rutas (API REST).
- **Dónde se usa:**  
  - `/src/app.js`
  - `/src/rutas/usuarios.js`, `/src/rutas/roles.js`, `/src/rutas/clientes.js`, `/src/rutas/habitaciones.js`, `/src/rutas/reservas.js`
- **Instalación:**  
  `npm install express`

---

### 2. sequelize
- **Función:** ORM para bases de datos relacionales; gestiona modelos, relaciones y queries SQL.
- **Dónde se usa:**  
  - `/configuracion/baseDeDatos.js`
  - `/src/modelos/*.js`
  - `/src/controladores/*.js`
- **Instalación:**  
  `npm install sequelize`

---

### 3. mysql2
- **Función:** Conector de Node.js para bases de datos MySQL/MariaDB, requerido por Sequelize.
- **Dónde se usa:**  
  - Es utilizado internamente por Sequelize, se importa indirectamente.
- **Instalación:**  
  `npm install mysql2`

---

### 4. dotenv
- **Función:** Carga variables de entorno (como credenciales de la BD) desde un archivo `.env`.
- **Dónde se usa:**  
  - `/configuracion/baseDeDatos.js`
- **Instalación:**  
  `npm install dotenv`

---

### 5. express-validator
- **Función:** Middleware para validación y saneamiento de datos en rutas Express.
- **Dónde se usa:**  
  - `/src/middleware/validacionUsuario.js`
  - `/src/middleware/validacionReserva.js`
- **Instalación:**  
  `npm install express-validator`

---

### 6. date-fns
- **Función:** Utilidades modernas para manipulación y comparación de fechas en JavaScript.
- **Dónde se usa:**  
  - `/src/controladores/reservasController.js`
- **Instalación:**  
  `npm install date-fns`

---

## ¿Cómo mantener este archivo?

Cada vez que importes una nueva dependencia en cualquier archivo del backend:

1. **Añádela al final de este listado.**
2. Documenta:
    - El nombre del paquete,
    - Una breve descripción de para qué se usa,
    - Los archivos principales donde la estás utilizando,
    - El comando de instalación por npm.

Así se facilita el mantenimiento, la documentación y el onboarding de nuevos desarrolladores.

---