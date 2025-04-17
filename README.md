# Plataforma_web_FD
# Plataforma Web Glamping - Frijolitos Dormilones

Este proyecto es una plataforma web integral para la gestión y reserva de alojamientos tipo glamping, desarrollada para el emprendimiento **Frijolitos Dormilones**. Incluye tanto el backend (API RESTful con Node.js, Express y Sequelize) como el frontend (HTML, CSS y JavaScript puro), permitiendo a clientes y administradores interactuar de forma sencilla y segura.

---

## Características principales

- **Gestión de usuarios y roles:** Registro, autenticación y control de acceso para clientes y empleados.
- **Reservas en línea:** Los clientes pueden consultar disponibilidad y reservar alojamientos desde la web.
- **Panel administrativo:** Gestión de habitaciones, clientes, reservas y roles desde el backend.
- **Registro de intentos de login:** Seguridad adicional con logs de acceso.
- **Frontend amigable:** Interfaz moderna y responsiva para usuarios y administradores.
- **Documentación técnica:** Instrucciones claras para instalación, dependencias y uso de la API.

---

## Tecnologías utilizadas

- **Backend:**
  - Node.js
  - Express
  - Sequelize (ORM)
  - MySQL2 (driver)
  - dotenv (variables de entorno)
  - nodemailer (envío de correos)
  - bcrypt (hash de contraseñas)
  - express-validator (validación de datos)
  - date-fns (manejo de fechas)

- **Frontend:**
  - HTML5
  - CSS3
  - JavaScript (sin frameworks)

- **Herramientas adicionales:**
  - Git y GitHub (control de versiones)
  - VS Code (editor recomendado)
  - Mermaid (diagramas ERD en `/docs`)

---

## Estructura del proyecto

- `/backend`: Código fuente del servidor, modelos, controladores, rutas y documentación técnica.
- `/frontend`: Archivos estáticos del cliente (HTML, CSS, JS).
- `/docs`: Diagramas, bitácora y documentación adicional.

---

## Instalación rápida

1. Clona el repositorio.
2. Instala las dependencias en `/backend` con `npm install`.
3. Configura tu base de datos y variables de entorno en un archivo `.env`.
4. Ejecuta el backend con `npm start` o `node src/app.js`.
5. Abre `/frontend/src/index.html` en tu navegador.

---

## Novedades y mejoras recientes

- **Bitácora de accesos:** Ahora el sistema registra cada intento de login, logout y registro de usuario en una tabla de bitácora, permitiendo auditoría y mayor seguridad.
- **Envío automático de correos:** Al registrar un usuario, el sistema envía un correo de bienvenida utilizando Nodemailer y credenciales seguras almacenadas en variables de entorno.
- **Gestión robusta de variables de entorno:** Uso de dotenv para manejar credenciales y configuraciones sensibles, siguiendo buenas prácticas de seguridad.
- **Validación y seguridad:** Contraseñas almacenadas con hash seguro (bcrypt) y validación de datos en endpoints críticos.
- **Documentación ampliada:** Se actualizaron los diagramas ERD, bitácora de desarrollo y listado de dependencias en la carpeta `/docs`.

---

## Notas de seguridad

- Para el envío de correos con Gmail, es necesario activar la verificación en dos pasos y generar una contraseña de aplicación. Consulta la documentación en `/docs` para más detalles sobre la configuración de variables de entorno.

---

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

¿Dudas? Consulta la documentación en la carpeta `/docs` para más detalles técnicos y de uso.
