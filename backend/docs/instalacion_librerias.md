# Instalación de Dependencias en el Backend - Glamping

Este documento explica **qué librerías debes instalar** para trabajar en el backend del proyecto Glamping, con comandos listos para copiar y pegar. Incluye consejos para verificar que todo está correctamente instalado.

---

## 1. Instalación desde cero (recomendado)

### a. Si ya tienes el archivo `package.json` y `package-lock.json`

Solo ejecuta (en la carpeta `/backend`):

```bash
npm install
```
Esto instalará automáticamente todas las dependencias ya registradas en el proyecto.

---

### b. Si el proyecto es recién clonado o vas a empezar desde cero

Instala cada dependencia manualmente con npm **desde la carpeta `/backend`**:

```bash
npm install express
npm install sequelize
npm install mysql2
npm install dotenv
npm install express-validator
npm install date-fns
```

---

## 2. ¿Para qué sirve cada librería?

- **express**  
  Framework para crear el servidor, rutas y lógica del backend.  
  Uso: manejo de rutas y peticiones HTTP.

- **sequelize**  
  ORM que facilita interactuar con la base de datos MySQL desde el código.  
  Uso: modelos, relaciones, queries.

- **mysql2**  
  Driver que utiliza Sequelize por debajo para conectar con MySQL.  
  Uso: no se importa directamente, pero es requerido.

- **dotenv**  
  Permite cargar variables desde un archivo `.env` para configuración segura.  
  Uso: manejo de credenciales y rutas sensibles.

- **express-validator**  
  Middleware para validar y sanear la entrada de datos en las rutas de la API.  
  Uso: protección contra datos malformados o peligrosos.

- **date-fns**  
  Biblioteca útil para manipular y comparar fechas de forma sencilla y moderna.  
  Uso: lógica de reservas y calendarios.

---

## 3. Comprobando la instalación

Para cada librería, puedes verificar que está instalada usando:

```bash
npm list nombre-libreria
```
Ejemplo:
```bash
npm list express
```
Debería mostrarte la ruta a la librería instalada.

---

## 4. Tips útiles

- Si ocurre el error `Cannot find module '...'`, probablemente falta instalar la librería; solo vuelve a ejecutar el `npm install nombre`.
- Si reinstalas una dependencia, no afecta negativamente; npm resolverá duplicados y versiones por ti.
- Usa `npm ls --depth=0` para ver un listado resumen de todas las instalaciones top-level.
- Si el proyecto no inicia o falla tras cambiar dependencias, puedes probar:
  ```bash
  npm install
  ```
  o (si todo está muy dañado)
  ```bash
  rm -rf node_modules
  npm install
  ```

---

## 5. Instalación de todas las dependencias en una sola línea

Si vas comenzando, puedes copiar y pegar este comando:

```bash
npm install express sequelize mysql2 dotenv express-validator date-fns
```

---

**¡Con esto tu entorno de backend estará listo para desarrollar y ejecutar el proyecto Glamping!**

Si tienes dudas con alguna librería específica, revisa el archivo [`librerias_importadas.md`](./librerias_importadas.md) para más detalles de uso y ubicación en el código.



---