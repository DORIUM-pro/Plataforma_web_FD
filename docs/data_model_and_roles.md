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

---

## Relaciones clave

- **Empleado** tiene un **Rol**
- **Reserva** asocia un **Cliente** y una **Habitación**
- **Habitación** puede tener un estado gestionado por **Empleados** (según rol)

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

Esto sienta la base para modelar la aplicación, permisos y flujos de trabajo administrativos.

¿Quieres avanzar ahora con el diseño de las rutas de API, la base de datos, o la estructura de carpetas del backend (por ejemplo, en Node/Express, Django, etc.)? ¡Dime tu stack preferido y el próximo paso!