# Modelo de datos: Glamping Platform

## Modelos principales

### Usuario/Empleado
- id (PK)
- nombre
- correo electrónico
- contraseña (hash)
- rol_id (FK)
- estado_activo

### Rol
- id (PK)
- nombre (Ej: Administrador, Limpieza, Recepción, Mantenimiento)
- permisos (ej: ["GESTIONAR_RESERVAS", "VER_HABITACIONES", ...])

### Cliente
- id (PK)
- nombre
- correo electrónico
- teléfono

### Habitación/Alojamiento
- id (PK)
- nombre o código
- tipo (carpa de lujo, geodomo, cabaña, etc)
- capacidad
- estado (Disponible, Ocupada, En limpieza, En mantenimiento)
- descripción

### Reserva
- id (PK)
- cliente_id (FK)
- habitacion_id (FK)
- fecha_inicio
- fecha_fin
- estado (Activa, Cancelada, Finalizada)
- precio_total

### RegistroLogin (Bitácora de accesos)
- id (PK)
- usuario_id (FK)
- fecha_hora
- tipo (login, logout, registro)
- ip
- user_agent

---

## Relaciones clave

- **Empleado** tiene un **Rol**
- **Reserva** asocia un **Cliente** y una **Habitación**
- **Habitación** puede tener un estado gestionado por **Empleados** (según rol)
- **RegistroLogin** asocia un **Usuario** con eventos de acceso

---

## Funcionalidades implementadas recientemente

- **Autenticación y registro de usuarios** con hash seguro de contraseñas (bcrypt).
- **Bitácora de accesos:** cada registro, login o logout queda guardado en la tabla `RegistroLogin` con fecha, IP y user agent.
- **Envío de correos automáticos** al registrar un usuario, usando Nodemailer y variables de entorno seguras.
- **Gestión de variables de entorno** con dotenv para credenciales y configuración sensible.
- **Validación de datos** en endpoints de autenticación y registro.
- **Control de errores y mensajes claros** en la API y en la terminal del backend.

---

## Funcionalidades por rol (ejemplo)

| Rol           | Puede gestionar reservas | Ver habitaciones | Cambiar estado habitación | Alta empleados | Ver reportes |
|---------------|:----------------------:|:---------------:|:------------------------:|:-------------:|:------------:|
| Administrador |          ✅             |       ✅        |           ✅             |      ✅       |      ✅      |
| Limpieza      |          ❌             |       ✅        |           ✅             |      ❌       |      ❌      |
| Mantenimiento |          ❌             |       ✅        |           ✅             |      ❌       |      ❌      |
| Recepción     |          ✅             |       ✅        |           ❌             |      ❌       |      ❌      |

---

### Estado de habitaciones:

- **Disponible:** lista para asignar a nueva reserva
- **Ocupada:** un cliente la está usando
- **En limpieza:** no se puede reservar
- **En mantenimiento:** no se puede reservar

---

### Notas adicionales

- El modelo de bitácora permite auditar accesos y acciones de usuarios.
- El envío de correos está protegido mediante variables de entorno y contraseña de aplicación de Gmail.
- El sistema es extensible para agregar más roles, permisos y funcionalidades administrativas.

---