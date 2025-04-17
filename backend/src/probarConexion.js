const sequelize = require('../configuracion/baseDeDatos');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('¡Conexión a MySQL exitosa!');
  } catch (error) {
    console.error('No me pude conectar a MySQL:', error);
  } finally {
    await sequelize.close();
  }
})();