# Bitácora de desarrollo - Proyecto Glamping

## Fecha: 2024-04-23 (inicial)  
## Actualización: 2024-05-15

### Progreso inicial
- Creé la estructura de carpetas para el backend y el frontend utilizando nombres en español para una mejor organización.
- Configuré el archivo `.env` en la carpeta backend para la conexión con MySQL. Usé XAMPP para gestionar la base de datos local y probé la conexión con un pequeño script en Node.js; funcionó correctamente.
- Instalé y configuré las dependencias necesarias en el backend: `sequelize`, `mysql2` y `dotenv`.

### Progreso reciente

- Finalicé la conexión con la base de datos MySQL llamada `glamping111` y comprobé el acceso exitosamente desde Node.js y Sequelize.
- Creé, probé y documenté todos los modelos principales utilizando Sequelize:
  - **Usuario/Empleado** (con asociación a Rol)
  - **Rol** (con permisos como arreglo JSON)
  - **Cliente**
  - **Habitación/Alojamiento** (con tipos y estados)
  - **Reserva** (asociando Clientes y Habitaciones, fechas y precio)
- Establecí correctamente todas las relaciones entre modelos: usuarios y roles, reservas con clientes y habitaciones.
- Sincronicé la estructura de la base de datos con un script completo que crea las tablas y rellena datos de prueba automáticamente para facilitar la verificación desde phpMyAdmin.
- Desarrollé una API RESTful completa (Express + Sequelize) para gestionar las siguientes entidades, soportando operaciones CRUD:
  - Usuarios
  - Roles
  - Clientes
  - Habitaciones
  - Reservas
- Incluí controladores y rutas separados para cada entidad, facilitando la escalabilidad y el mantenimiento.
- Probé los endpoints con herramientas externas (y documenté cómo hacerlo desde el navegador para métodos GET).

### Aprendizajes
- Comprendí mejor el concepto y uso de dependencias en Node.js, así como la importancia del archivo `package.json`.
- Aprendí a conectar Node.js con MySQL usando Sequelize y a manejar variables de entorno de forma segura.
- Descubrí que la estructura clara de carpetas facilita mucho el trabajo y mantenimiento del proyecto.
- Profundicé en Sequelize, especialmente en la definición de modelos y la gestión de asociaciones y claves foráneas.
- Comprendí de forma práctica cómo estructurar una API REST profesional con Node.js y Express.
- Enfrenté y resolví problemas comunes de conexión, estructura de carpetas y rutas en Node.js.
- Aprendí a planificar con diagramas ERD (Mermaid) y a visualizar la estructura real en phpMyAdmin.

### Problemas encontrados y soluciones
- Inicialmente, tuve dificultades para verificar la instalación de MySQL desde la terminal. Decidí utilizar XAMPP y pude activar el servidor MySQL y acceder a phpMyAdmin para gestionar la base de datos.
- Experimenté confusión con la ubicación y el formato del archivo `.env`, pero tras revisar la documentación, lo coloqué correctamente y funcionó.
- Error de conexión por nombre incorrecto de base de datos; lo solucioné ajustando `.env` y confirmando el nombre real en phpMyAdmin.
- Problemas de rutas relativas en `require(...)`; resueltos revisando desde dónde se ejecutaba cada script.
- Instalación manual de dependencias faltantes (`express`, etc.) según el avance de la implementación.
- Errores de módulo no encontrado por rutas incorrectas al ejecutar scripts (`node src/app.js` en vez de `node src/src/app.js`).

### Pendientes para las próximas sesiones
- Agregar validaciones avanzadas en la API (datos requeridos, fechas coherentes en reservas, estados correctos, etc.).
- Implementar autenticación y autorización para empleados/usuarios, probablemente usando JWT.
- Documentar formalmente la API (Swagger/OpenAPI o Markdown).
- Desarrollar el frontend para que los usuarios utilicen la plataforma desde el navegador, sin necesidad de herramientas externas.
- Versionar el código en un repositorio (Github u otro) antes de hacer refactorizaciones o cambios importantes.

---

## Cambios recientes no especificados anteriormente

- Se creó y organizó la carpeta `/docs` para centralizar documentación, permitiendo una mejor gestión y acceso a información clave del proyecto.
    - Se incluyó documentación técnica adicional como el modelo de datos y roles (`data_model_and_roles.md`) y el diagrama ERD utilizando Mermaid (`diagrama_erd_glamping.mmd`), mostrando un enfoque estructurado hacia el diseño.
- Establecí el uso de documentación por cambios y avances en la bitácora misma, diferenciando mayúsculas y minúsculas en los nombres de los archivos.
- Se preparó la estructura básica para el frontend en `/frontend/src`, demostrando la intención de desarrollar una interfaz web próximamente.
- Se agregó el archivo `package.json` en la raíz del proyecto, centralizando la gestión de dependencias y scripts para el entorno de desarrollo.
- Se implementaron pruebas unitarias básicas para los controladores de la API utilizando Jest, asegurando que las operaciones CRUD funcionen correctamente.
- Se configuró ESLint y Prettier en el proyecto para mantener un estilo de código consistente y evitar errores comunes.
- Se creó un script en Node.js para inicializar datos de prueba en la base de datos, facilitando el desarrollo y las pruebas.
- Se añadió soporte para variables de entorno adicionales en el archivo `.env` para manejar configuraciones específicas de desarrollo y producción.
- Se comenzó a trabajar en la integración de autenticación con JWT, incluyendo la creación de middleware para proteger rutas específicas.

## Pendientes derivados de la organización y buenas prácticas

- Adaptar el contenido de los archivos Markdown existentes para mantener consistencia de formato y nombres de archivos (por ejemplo, evitar archivos duplicados diferenciados sólo por mayúsculas).
- Ampliar la documentación técnica en `/docs`, incluyendo ejemplos de uso de la API, flujos de usuario, y mejores prácticas para desarrolladores colaboradores.
- Iniciar el desarrollo del frontend, definiendo tecnologías a utilizar (por ejemplo, React, Vue, etc.), estructura de carpetas y criterios de integración con la API backend.
- Considerar la inclusión de scripts o configuraciones adicionales para facilitar el despliegue (como Docker, archivos de configuración de entorno, etc.).
- Completar las pruebas unitarias y de integración para todos los controladores y modelos, asegurando una cobertura adecuada.
- Finalizar la implementación de autenticación y autorización, incluyendo roles y permisos específicos para usuarios y empleados.
- Configurar un entorno de desarrollo con Docker para facilitar la replicación del proyecto en diferentes máquinas.
- Crear un pipeline de CI/CD básico utilizando GitHub Actions para automatizar pruebas y despliegues.
- Diseñar y desarrollar la interfaz de usuario del frontend, priorizando la experiencia del cliente y la integración con la API.
- Documentar el flujo de autenticación y autorización en la API, incluyendo ejemplos de solicitudes y respuestas.

## [Fecha: 16/04/2025] - Sincronización y subida inicial a GitHub

- Se realizó la inicialización del repositorio local con `git init`.
- Se resolvieron conflictos entre el repositorio local y el remoto (README, .gitignore, LICENSE).
- Se eliminaron y restauraron archivos/carpeta (`backend/docs`) para completar la sincronización.
- Se agregó correctamente el archivo `.gitignore` para excluir `node_modules` y otros archivos temporales.
- Se subió todo el proyecto al repositorio remoto en GitHub.
- Se verificó la estructura del proyecto y la documentación principal (`README.md`).
- Se dejó lista la base para continuar con el desarrollo colaborativo.

## [Fecha: 17/04/2025] - Solución de problemas de entorno y correo

- Se resolvió el problema de lectura de variables de entorno (`.env`) en el backend:
    - Se verificó la ubicación y formato correcto del archivo `.env` en `/backend`.
    - Se corrigió la carga de dotenv, asegurando que `require('dotenv').config({ path: __dirname + '/../.env' })` esté al inicio de `app.js` y `db.js`.
    - Se comprobó la correcta lectura de variables con scripts de prueba y mensajes en consola.
- Se solucionó el error de conexión a la base de datos por nombre incorrecto en `.env`.
- Se implementó y probó exitosamente el registro de usuarios desde el backend y frontend, verificando la respuesta de la API.
- Se depuró y corrigió el envío de correos con Nodemailer:
    - Se identificó y resolvió el error `Invalid login: 535-5.7.8 Username and Password not accepted` generado por Gmail.
    - Se activó la verificación en dos pasos (2FA) en la cuenta de Gmail y se generó una contraseña de aplicación específica para el backend.
    - Se actualizó la variable `EMAIL_PASS` en `.env` con la contraseña de aplicación.
    - Se verificó el envío exitoso de correos de bienvenida tras el registro de usuario.
- Se documentó el flujo de depuración, incluyendo pruebas con scripts independientes y revisión de la codificación del archivo `.env`.
- Se validó el funcionamiento de la API y el envío de correos observando los mensajes en la terminal del backend tras cada registro.

## [Fecha: 17/04/2025] - Mejoras en autenticación y roles

- Se creó la tabla `registro_login` para registrar intentos de acceso.
- Se corrigió el modelo `RegistroLogin` para coincidir con la base de datos.
- Se agregó el rol "Cliente" y se asigna por defecto a nuevos usuarios.
- Se verificó el registro y login exitoso de usuarios.
- Se preparó el backend para mostrar el nombre del usuario en el frontend tras el login.

## [Fecha: 17/04/2025] - Mejoras en experiencia de usuario autenticado

- Se agregó un apartado para mostrar el nombre del usuario autenticado en la página principal.
- Se ocultan los botones de "Iniciar sesión" y "Registrarse" cuando el usuario ya ha iniciado sesión.
- Se añadió el botón "Cerrar sesión" que limpia el localStorage y recarga la página.
- Se corrigió el envío del campo `nombre` en la respuesta del login.
- Se verificó el flujo completo de login, saludo y cierre de sesión.

## [Fecha: 17/04/2025] - Personalización de experiencia según rol

- Se implementó la visualización de paneles personalizados para administrador y cliente según el rol guardado en localStorage.
- El frontend ahora muestra el panel de administración solo a administradores y el panel de cliente solo a clientes.
- Se mantiene la ocultación de botones de login/registro y el botón de cerrar sesión para todos los usuarios autenticados.

## [Fecha: 17/04/2025] - Centralización y mejora del diseño frontend

- Se eliminaron todos los bloques `<style>...</style>` de los archivos HTML del frontend (`index.html`, `login.html`, `registro.html`), centralizando los estilos en el archivo `style.css`.
- Se reorganizó y documentó el archivo `style.css` usando variables CSS, secciones comentadas y agrupación lógica de estilos (body, logo, navbar, formularios, paneles, responsive, etc.).
- Se eliminaron todos los estilos inline de los archivos HTML, asegurando que la presentación se controle únicamente desde el CSS externo.
- Se unificó la estructura visual en todas las páginas principales: logo en la esquina superior izquierda, formularios con diseño consistente, paneles y botones estilizados.
- Se mejoró la experiencia visual y la coherencia de marca aplicando un fondo degradado con los colores institucionales y ajustando los componentes para mayor armonía.
- Se verificó que todos los formularios y paneles funcionen correctamente con la nueva estructura de estilos.
- Se documentó el proceso y las buenas prácticas en la bitácora para futuras referencias y trabajo colaborativo.

---

- Se eliminó la lógica antigua que mostraba el panel de administración según el ID del rol y se dejó solo la validación por nombre de rol ("admin" o "administrador") en el frontend.
- Se verificó que solo los usuarios con rol de administrador pueden ver y acceder a las funciones administrativas.
- Se probó el flujo completo de inicio de sesión y acceso a las opciones de administración.
- El código fue limpiado y documentado para mayor claridad y mantenibilidad.

---

## [Pendiente] Herramientas avanzadas de administración y gestión de roles

- Se identificó la necesidad de una página exclusiva de administración (`admin.html`) accesible solo para usuarios con rol de administrador.
- El administrador debe poder crear empleados y asignarles roles desde el panel de administración.
- Para la creación de nuevos administradores, se definió implementar un método seguro basado en una "llave especial" que solo el dueño del sistema o el administrador principal debe conocer.
- Se acordó que la llave nunca debe estar expuesta en el frontend ni en el repositorio, y su validación debe hacerse únicamente en el backend.
- Se debe documentar quién tiene la llave y cómo se gestiona, así como el flujo completo de creación de administradores y asignación de roles.
- Estas tareas quedan pendientes para su desarrollo e implementación en las siguientes sesiones.

---

## [Actualización] Implementación de Bitácora de Acciones (Auditoría)

- Se implementó una bitácora automática para registrar todas las acciones importantes realizadas por usuarios autenticados (crear, editar, eliminar usuarios, asignar roles, restablecer contraseñas, etc.).
- El modelo `Bitacora` se encuentra en `backend/src/models/Bitacora.js` y se sincroniza automáticamente con la base de datos al iniciar el backend.
- Cada vez que un usuario realiza una acción relevante, el backend registra:
    - **usuario_id:** ID del usuario que realizó la acción (obtenido del JWT)
    - **accion:** Tipo de acción (ejemplo: "Crear empleado", "Eliminar usuario")
    - **descripcion:** Detalle de la acción realizada
    - **fecha:** Fecha y hora de la acción
- El registro en la bitácora se realiza automáticamente en los controladores, después de cada operación importante, usando el middleware de autenticación para identificar al usuario.
- Se creó una ruta protegida (`GET /api/bitacora`) para consultar los últimos registros de la bitácora desde el frontend.
- En el panel de administración (`admin.html`), se agregó una sección para visualizar la bitácora en una tabla, permitiendo a los administradores auditar el historial de acciones del sistema.
- Esta implementación mejora la trazabilidad, la seguridad y la transparencia de todas las operaciones administrativas.

---