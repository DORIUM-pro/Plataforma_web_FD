// Archivo: baseDeDatos.js
// Proyecto: Glamping - Conexión a MySQL usando Sequelize
// Autor: [Tu Nombre o Iniciales]

// 1. Importo la librería de Sequelize para poder interactuar con MySQL fácilmente
const { Sequelize } = require('sequelize');

// 2. Cargo las variables de entorno desde el archivo .env para mayor seguridad y flexibilidad
require('dotenv').config();

// 3. Variables que contienen los datos de mi base de datos MySQL, tomados del archivo .env
const nombreBaseDatos = process.env.DB_NOMBRE || 'glamping';
const usuarioBaseDatos = process.env.DB_USUARIO || 'root';
const contrasenaBaseDatos = process.env.DB_CONTRASENA || '';
const hostBaseDatos = process.env.DB_HOST || 'localhost';

// 4. Creo la instancia de Sequelize (la "puerta" entre Node y MySQL)
const sequelize = new Sequelize(nombreBaseDatos, usuarioBaseDatos, contrasenaBaseDatos, {
  host: hostBaseDatos,
  dialect: 'mysql',
  logging: false // Si quiero ver en consola las consultas SQL, pongo true
});

// 5. Exporto la instancia para usarla en otras partes del backend (modelos, controladores, etc)
module.exports = sequelize;

/*
  Notas:
  - Asegúrate de definir correctamente las variables en el archivo .env.
  - Puedes personalizar los valores por defecto en las constantes de arriba si tu proyecto lo requiere.
  - Si algo falla con la conexión, revisa el usuario, contraseña, nombre de base y que el servicio MySQL esté iniciado en XAMPP.

  Ejemplo de archivo .env (en /backend):
    DB_NOMBRE=glamping
    DB_USUARIO=root
    DB_CONTRASENA=
    DB_HOST=localhost
*/