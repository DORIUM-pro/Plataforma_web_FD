const express = require('express');
const app = express();
const puerto = process.env.PORT || 3000;

// Middlewares para parseo de JSON y URL-encoded (para recibir cuerpos de POST/PUT)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas principales
app.use('/api/usuarios', require('./rutas/usuarios'));
app.use('/api/roles', require('./rutas/roles'));

// Nuevas rutas
app.use('/api/habitaciones', require('./rutas/habitaciones')); 
app.use('/api/clientes', require('./rutas/clientes'));
app.use('/api/reservas', require('./rutas/reservas'));
app.use('/api/autenticacion', require('./rutas/autenticacion'));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Servidor Glamping corriendo! Usa /api/usuarios, /api/roles, /api/habitaciones, /api/clientes o /api/reservas');
});

// Manejo básico de errores 404
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Iniciar el servidor
app.listen(puerto, () => {
  console.log(`Servidor escuchando en http://localhost:${puerto}`);
});
