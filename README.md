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

## Bitácora de acciones y auditoría

El sistema implementa una **bitácora automática** que registra todas las acciones administrativas importantes, permitiendo auditoría, trazabilidad y mayor seguridad.  
**¿Qué se registra?**
- Creación, edición y eliminación de usuarios.
- Asignación y cambio de roles.
- Restablecimiento de contraseñas.
- Intentos de login y logout.
- Cualquier otra acción relevante realizada por usuarios autenticados.

**¿Cómo funciona?**
- Cada vez que un usuario autenticado realiza una acción relevante, el backend registra automáticamente:
  - **usuario_id:** ID del usuario que realizó la acción (obtenido del JWT).
  - **acción:** Tipo de acción (ejemplo: "Crear empleado", "Eliminar usuario").
  - **descripción:** Detalle de la acción realizada.
  - **fecha:** Fecha y hora de la acción.
- El modelo Bitacora está en `/backend/src/models/Bitacora.js` y se sincroniza automáticamente con la base de datos.
- El registro se realiza en los controladores, después de cada operación importante, usando el middleware de autenticación para identificar al usuario.
- La consulta de la bitácora se realiza mediante la ruta protegida:  
  `GET /api/bitacora`
- En el panel de administración (`/frontend/src/admin.html`), los administradores pueden visualizar la bitácora en una tabla.

---

## Buenas prácticas de seguridad y manejo de variables de entorno

- **Variables sensibles:**  
  El archivo `.env` contiene credenciales y configuraciones sensibles (como contraseñas de base de datos y claves de correo).  
  **Nunca debe subirse al repositorio.**
- **Ignorar archivos sensibles:**  
  El archivo `.gitignore` incluye `.env` y variantes para evitar que estos archivos se suban accidentalmente.
- **¿Qué hacer si se subió por error?**  
  Ejecuta:
  ```bash
  git rm --cached .env
  git commit -m "Elimina .env del repositorio y lo ignora en .gitignore"
  git push
  ```
- **Compartir variables:**  
  Comparte el archivo `.env` solo de forma privada entre desarrolladores autorizados.
- **Uso de JWT:**  
  El sistema utiliza tokens JWT para autenticar y autorizar usuarios en rutas protegidas. El middleware (`/backend/src/middlewares/auth.js`) valida el token y expone el usuario autenticado en `req.usuario` para su uso en controladores y bitácora.
- **Hash de contraseñas:**  
  Todas las contraseñas se almacenan de forma segura usando bcrypt.
- **Validación de datos:**  
  Se utiliza `express-validator` para validar datos en endpoints críticos y evitar ataques comunes.

---

## Otras consideraciones importantes

- **Panel de administración:**  
  Solo los usuarios con rol de administrador pueden acceder a las funciones administrativas y a la bitácora.
- **Gestión de roles:**  
  El sistema permite asignar y cambiar roles de usuario desde el panel de administración.
- **Envío de correos:**  
  El sistema envía correos automáticos (por ejemplo, bienvenida) usando Nodemailer y credenciales almacenadas en `.env`.
- **Documentación técnica:**  
  Consulta la carpeta `/docs` para diagramas ERD, bitácora de desarrollo, instalación de librerías y detalles técnicos adicionales.
- **Control de versiones:**  
  El proyecto utiliza Git y GitHub para control de versiones y trabajo colaborativo.

---

## Notas de seguridad

- Para el envío de correos con Gmail, es necesario activar la verificación en dos pasos y generar una contraseña de aplicación. Consulta la documentación en `/docs` para más detalles sobre la configuración de variables de entorno.

---

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

¿Dudas? Consulta la documentación en la carpeta `/docs` para más detalles técnicos y de uso.
