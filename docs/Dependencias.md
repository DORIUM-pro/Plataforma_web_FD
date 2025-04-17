# Dependencias del Proyecto Glamping

A continuación se describen todas las dependencias utilizadas en el proyecto y su función específica:

---

- **express**  
  Framework principal para Node.js que permite crear el servidor web, definir rutas y gestionar peticiones HTTP de manera sencilla y eficiente.

- **cors**  
  Middleware que habilita el intercambio de recursos entre distintos orígenes (CORS), permitiendo que el frontend (por ejemplo, React o HTML en otro puerto) pueda comunicarse con el backend sin restricciones de seguridad del navegador.

- **dotenv**  
  Permite cargar variables de entorno desde un archivo `.env` al entorno de ejecución de Node.js. Esto facilita la gestión segura de credenciales y configuraciones sensibles (como claves de correo, datos de la base de datos, etc.).

- **sequelize**  
  ORM (Object-Relational Mapping) que simplifica la interacción con la base de datos MySQL, permitiendo definir modelos, relaciones y realizar consultas usando JavaScript en lugar de SQL puro.

- **mysql2**  
  Driver que permite la conexión eficiente y segura entre Node.js y bases de datos MySQL. Es utilizado internamente por Sequelize para ejecutar las consultas.

- **nodemailer**  
  Librería para el envío de correos electrónicos desde el backend. Se utiliza para enviar notificaciones, confirmaciones de registro y otros mensajes automáticos a los usuarios.

- **bcrypt**  
  Utilidad para el hash seguro de contraseñas. Permite almacenar contraseñas de usuarios de forma cifrada, aumentando la seguridad del sistema frente a ataques.

- **express-validator**  
  Middleware para validar y sanitizar los datos recibidos en las peticiones HTTP. Ayuda a prevenir errores y vulnerabilidades asegurando que los datos cumplen con los formatos esperados.

- **date-fns**  
  Librería para el manejo, manipulación y formateo de fechas en JavaScript. Se utiliza para calcular fechas de reservas, vencimientos y mostrar fechas en formatos amigables.

---

**Nota:**  
Todas estas dependencias están declaradas en el archivo `package.json` y se instalan automáticamente con el comando:

```bash
npm install