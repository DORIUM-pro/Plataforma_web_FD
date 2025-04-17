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

## Pendientes derivados de la organización y buenas prácticas

- Adaptar el contenido de los archivos Markdown existentes para mantener consistencia de formato y nombres de archivos (por ejemplo, evitar archivos duplicados diferenciados sólo por mayúsculas).
- Ampliar la documentación técnica en `/docs`, incluyendo ejemplos de uso de la API, flujos de usuario, y mejores prácticas para desarrolladores colaboradores.
- Iniciar el desarrollo del frontend, definiendo tecnologías a utilizar (por ejemplo, React, Vue, etc.), estructura de carpetas y criterios de integración con la API backend.
- Considerar la inclusión de scripts o configuraciones adicionales para facilitar el despliegue (como Docker, archivos de configuración de entorno, etc.).

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

### Cambios recientes no especificados anteriormente

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