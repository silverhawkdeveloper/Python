# Funcionalidades de CarnaWe

- Listado de sesiones de actuaciones
- Búsqueda/Filtro de agrupaciones asociadas a una sesión
- Detalle de la sesión concreta 
  (Descripción del orden de actuación, fecha y hora, precio)
- Registro y login de usuarios
- Compra de entradas
- Información de las reglas del COAC.
- Usuarios con rol administrador
  - Alta de sesiones
  - Modificación de sesiones
  - Baja de sesiones
  - Alta de agrupaciones
  - Modificación de agrupaciones
  - Baja de agrupaciones
  - Alta de usuarios
  - Modificación de usuarios
  - Baja de usuarios

# Vistas

- Listado de sesiones de actuaciones (principal)
- Detalle de la sesión
- Compra de entradas
  - Elección de tipo, número. Método de pago con los detalles del pago.
  - Resumen y confirmación de la compra.
  - Recibo de la compra.
- Información de las reglas del COAC.
- Login de usuarios
- Registro de usuarios
- Panel de administración
  -vista general con todas las opciones que se ven a continuacion
  -Crear, editar y eliminar usuario
  -Crear, editar y eliminar sesiones
  -Crear, editar y elimnar entradas 
  -Crear, editar y eliminar Agrupaciones
- Ajustes de usuarios (vista propia del usuario)

# Modelos

- Sesión
  - Nombre
  - Descripción
  - Fecha
  - Hora
  - Precios FK
  - Agrupaciones
  - Asientos disponibles (de cada tipo)

- Precios
  - TipoAsiento (gallinero, butaca, palco)
  - Precio
  - IdSesión FK

- Agrupación
  - Nombre
  - Tipo

- Usuario
  - Nombre
  - Apellidos
  - Email
  - Contraseña
  - Rol (admin, usuario)

- Pedido
  - Sesión FK
  - Asientos FK
  - Usuario FK

- Asientos
  - Tipo (gallinero, butaca, palco)
  - Cantidad de asiento
  
# Stack tecnológico
  - Backend: Django (obviamente)
  - BD: MongoDB 
  - Frontend: HTML, CSS, JS, Bootstrap, Angular (si da tiempo)

# Tareas

- [ ] Crear esquema de BD (Ajota con las voces de los demás)
- [ ] Crear vistas (plantillas HTML) (autogestionado por el equipo)

# Hojas de estilos y paleta de colores (ideas)
https://coolors.co/2d2a32-ddd92a-eae151-eeefa8-fafdf6

https://coolors.co/000000-92dce5-eee5e9-7c7c7c-d64933

