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

## [Incidente] Error al iniciar el servidor: Cannot find module '../config/db'

**Fecha:** 18/04/2025  
**Descripción:**  
Al intentar iniciar el backend, se presentó el siguiente error:

```
Error: Cannot find module '../config/db'
Require stack:
- backend/src/models/Bitacora.js
- backend/src/app.js
```

**Causa:**  
El archivo de configuración de la base de datos estaba siendo importado con la ruta incorrecta (`../config/db`) en el modelo `Bitacora.js`. El archivo correcto es `../configuracion/db`.

**Solución aplicada:**  
Se corrigió la línea de importación en `backend/src/models/Bitacora.js`:
```javascript
const sequelize = require('../configuracion/db');
```
Con este cambio, el servidor inicia correctamente y el modelo Bitacora funciona como esperado.

---
## [Fecha: 18/04/2025] - Solución al problema del panel de usuario en dispositivos móviles

### Descripción del problema:
El panel de usuario presentaba problemas significativos de visualización y funcionalidad, especialmente en dispositivos móviles:

1. **Posicionamiento incorrecto:** El panel estaba fijado a la izquierda de la pantalla en dispositivos de escritorio, pero este posicionamiento no se adaptaba correctamente a dispositivos móviles, ocupando gran parte de la pantalla o desapareciendo completamente.

2. **Superposición con otros elementos:** En pantallas pequeñas, el panel se superponía con otros elementos de la interfaz, como el logo y el cuadro de login/registro, dificultando la interacción con estos elementos.

3. **Dificultad para ocultar/mostrar:** El mecanismo para ocultar y mostrar el panel no funcionaba de manera fluida en dispositivos móviles, lo que afectaba negativamente la experiencia del usuario.

4. **Inconsistencia en el diseño responsivo:** El panel no se ajustaba adecuadamente a diferentes tamaños de pantalla, resultando en una experiencia de usuario inconsistente entre dispositivos.

### Solución implementada:

1. **Rediseño del panel:** Se modificó la estructura HTML y CSS del panel para hacerlo más flexible y adaptable a diferentes tamaños de pantalla.

2. **Implementación de un sistema de deslizamiento:** Se creó un mecanismo de deslizamiento suave para mostrar y ocultar el panel en dispositivos móviles, utilizando CSS transitions y JavaScript.

3. **Ajuste del posicionamiento:** Se cambió el posicionamiento del panel a fixed y se ajustó su ancho y altura para ocupar toda la altura de la pantalla en dispositivos móviles, pero solo una parte en escritorio.

4. **Mejora de la visibilidad:** Se agregó un fondo semi-transparente al panel cuando está abierto en móviles para mejorar la legibilidad y separarlo visualmente del contenido principal.

5. **Optimización de interacciones:** Se mejoró la detección de clics fuera del panel para cerrarlo automáticamente en dispositivos móviles, mejorando la usabilidad.

6. **Ajustes de diseño responsivo:** Se utilizaron media queries para ajustar el comportamiento y apariencia del panel según el tamaño de la pantalla.

### Código clave implementado:

```css
.panel-usuario {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px;
  transform: translateX(-250px);
  transition: transform 0.3s ease-in-out;
}

.panel-usuario.abierto {
  transform: translateX(0);
}

.panel-usuario.cerrado {
  transform: translateX(-240px);
}

@media (max-width: 768px) {
  .panel-usuario {
    width: 100%;
    transform: translateX(-100%);
  }
  
  .panel-usuario.abierto {
    transform: translateX(0);
  }
}
```

Resultado:
Tras implementar estas soluciones, el panel de usuario ahora funciona de manera fluida y consistente en todos los dispositivos. En móviles, se desliza suavemente desde el lado izquierdo y se puede cerrar fácilmente. En escritorio, mantiene su posición fija sin interferir con otros elementos. La experiencia de usuario ha mejorado significativamente, permitiendo una navegación más intuitiva y agradable en la plataforma.
Esta solución no solo resolvió los problemas inmediatos, sino que también estableció una base sólida para futuras mejoras y expansiones del panel de usuario.

[Fecha: 19/04/2025] - Incidente: Desaparición de botones "Iniciar sesión" y "Registrarse" al recargar la página
Descripción del problema:
Al implementar el panel lateral de usuario, se detectó que los botones "Iniciar sesión" y "Registrarse" desaparecían automáticamente tras recargar la página, incluso cuando ningún usuario había iniciado sesión. Inicialmente, los botones eran visibles por un instante, pero luego se ocultaban, generando confusión en la experiencia de usuario.

Diagnóstico:
El comportamiento estaba controlado por un bloque de JavaScript que ocultaba o mostraba los botones según la existencia de un valor en localStorage bajo la clave nombre.
Si localStorage.nombre existía (aunque fuera una cadena vacía, "null" o "undefined"), el script ocultaba los botones, interpretando erróneamente que había un usuario autenticado.
El problema persistía incluso después de cerrar sesión, si el valor de nombre no se eliminaba correctamente del almacenamiento local.
Solución implementada:
Limpieza del almacenamiento local:
Se ejecutó localStorage.clear() en la consola del navegador para eliminar cualquier valor residual de sesiones anteriores, restaurando el comportamiento esperado de los botones.

Mejora de la lógica de detección de usuario autenticado:
Se reemplazó la condición original por una función robusta que verifica que el valor de nombre:

No sea null, undefined, vacío, "null" ni "undefined".
Sea realmente un nombre válido y no un valor residual.
Validación adicional:
Se recomendó limpiar el localStorage al cerrar sesión y evitar guardar valores vacíos o inválidos al iniciar sesión.

Resultado:
Tras aplicar la solución, los botones de "Iniciar sesión" y "Registrarse" permanecen visibles para usuarios no autenticados y solo se ocultan cuando realmente hay un usuario logueado.
La experiencia de usuario es ahora consistente y predecible, y se evita el error de ocultar opciones de acceso por valores residuales en el almacenamiento local.

[Fecha: 19/04/2025] - Mejoras en visibilidad y lógica del panel de usuario

Descripción del cambio:
Se implementaron ajustes para que el panel lateral de usuario solo sea visible cuando el usuario está autenticado. Además, se modificó su posición para evitar que tape el logo en la parte superior izquierda de la página.

Motivación:
- Mejorar la experiencia de usuario evitando confusión visual y accesibilidad.
- Garantizar que solo los usuarios autenticados puedan ver y acceder al panel lateral de usuario.
- Mantener la identidad visual de la plataforma, asegurando que el logo siempre sea visible.

Cambios realizados:

1. Visibilidad condicional del panel lateral:
   - El panel lateral (`#panel-usuario`) ahora está oculto por defecto (`display: none;` en CSS y en el atributo `style` del HTML).
   - En el JavaScript principal, se agregó lógica para mostrar el panel solo si la función `usuarioLogueado(nombre)` retorna `true`.
   - Si el usuario no está autenticado, el panel permanece oculto y solo se muestran los botones de "Iniciar sesión" y "Registrarse".

2. Ajuste de posición del panel lateral:
   - Se modificó la propiedad `top` en el CSS del panel lateral para que comience más abajo (`top: 140px;`), dejando espacio suficiente para el logo y evitando que lo tape en cualquier resolución.

3. Sincronización de botones y panel:
   - Se verificó que el botón "Cerrar sesión" esté disponible tanto en el panel lateral como en la parte superior derecha, y que ambos cierren la sesión correctamente.
   - Se mantuvo la lógica robusta para mostrar/ocultar los elementos de autenticación según el estado real del usuario.

Resultado:
- El panel lateral de usuario solo aparece cuando el usuario está autenticado, mejorando la seguridad y la claridad de la interfaz.
- El logo de la plataforma permanece siempre visible y accesible.
- Los botones de acceso y cierre de sesión funcionan de manera consistente y predecible.
- La experiencia de usuario es más intuitiva y profesional.

[Fecha: 19/04/2025] - Mejoras visuales y de experiencia en el panel de usuario

Descripción del cambio:
- Se actualizó el diseño del panel lateral de usuario para mejorar la experiencia visual y la coherencia con la identidad del glamping.
- El fondo del panel ahora utiliza un degradado azul muy claro (`linear-gradient(135deg, #e3f0ff 0%, #b3d1fa 100%)`), brindando una apariencia más moderna y agradable.
- Se aumentó el grosor del borde derecho y se cambió su color a blanco para destacar el panel sobre el fondo.
- Se suavizaron los bordes del panel con `border-radius: 24px`.
- La imagen de perfil predeterminada se muestra más grande y centrada en el panel.
- Se centralizaron todos los estilos en el archivo `style.css`, eliminando estilos embebidos en los archivos HTML.
- Se ajustó el texto de la opción de perfil a "Configurar / Ver perfil" para mayor claridad.

Motivación:
- Mejorar la estética y la usabilidad del panel de usuario.
- Unificar la experiencia visual en todos los dispositivos y navegadores.
- Facilitar el mantenimiento del código centralizando los estilos.

Resultado:
- El panel lateral de usuario es más atractivo, accesible y coherente con la marca.
- La experiencia de usuario es más intuitiva y profesional.
- El código es más limpio y fácil de mantener.

## [Fecha: 20/04/2025] - Mejoras de validación y seguridad en autenticación y restablecimiento de contraseña

### Cambios realizados

- **Funciones de validación centralizadas:**  
  Se agregaron funciones `validarCorreo` y `validarContrasena` en `backend/src/controladores/autenticacionControlador.js` para validar el formato de correo electrónico y la fortaleza de la contraseña (mínimo 8 caracteres, una mayúscula, una minúscula y un número).

- **Validación en registro de usuario:**  
  Antes de crear un usuario, se valida que el correo tenga formato correcto y la contraseña cumpla los requisitos de seguridad. Si no, se responde con un error claro.

- **Validación en restablecimiento y cambio de contraseña:**  
  Antes de permitir el cambio de contraseña (tanto en el flujo de restablecimiento como en el cambio directo), se valida la nueva contraseña usando la función centralizada.

- **No revelar si el correo existe:**  
  En el endpoint `solicitarRestablecimiento`, la respuesta es siempre la misma, independientemente de si el correo existe o no en la base de datos. Esto evita que un atacante pueda descubrir correos registrados.

- **Mensajes genéricos en frontend:**  
  El frontend muestra siempre el mismo mensaje tras solicitar el restablecimiento:  
  `"Si el correo existe, se enviará un enlace de restablecimiento."`

- **Expiración y limpieza de tokens:**  
  Se asegura que el token de restablecimiento solo sea válido durante 30 minutos y se elimina tras su uso exitoso.

- **Validación de correo en solicitud de restablecimiento:**  
  Se valida el formato del correo antes de procesar la solicitud, devolviendo error si es inválido.

- **Código más robusto y seguro:**  
  Se revisaron y mejoraron los controladores para evitar fugas de información y asegurar que todas las rutas críticas tengan validaciones adecuadas.

### Resultado

- El sistema ahora es más seguro frente a ataques de enumeración de correos y fuerza bruta.
- Los usuarios reciben mensajes claros y consistentes, sin exponer información sensible.
- La fortaleza de las contraseñas está garantizada en todos los flujos.
- El código es más limpio, centralizando las validaciones y facilitando el mantenimiento futuro.

---

## [Fecha: 20/04/2025] - Actualización de avances y mejoras generales

- Se consolidó el diseño visual del frontend, asegurando coherencia en los estilos de botones, formularios y paneles en todas las páginas principales.
- Se mejoró la experiencia de usuario autenticado:
    - Los botones "Iniciar sesión" y "Registrarse" solo aparecen para usuarios no autenticados.
    - El nombre del usuario autenticado se muestra correctamente en la página principal.
    - El botón "Cerrar sesión" limpia el localStorage y recarga la página.
- Se centralizaron todos los estilos en el archivo `style.css`, eliminando estilos inline y asegurando que los cambios visuales sean fáciles de mantener.
- Se ajustó el diseño y la lógica del panel lateral de usuario para que solo sea visible cuando el usuario está autenticado y no tape el logo.
- Se mejoró la lógica de detección de usuario autenticado en el frontend, evitando errores por valores residuales en el localStorage.
- Se mantuvo la validación de contraseña en backend y API, pero **aún no se implementa el mensaje visual de validación en el formulario de registro**.
- Se verificó el correcto funcionamiento de la autenticación, registro, cierre de sesión y visualización de roles en el frontend.
- Se documentaron todos los cambios y buenas prácticas en la bitácora para facilitar el trabajo colaborativo y la futura ampliación del proyecto.

---

