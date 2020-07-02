# Tareas

_BackEnd en express y mongo para la administración de tareas_

## Descarga

```
git clone https://github.com/ylopezs/tareas_backend.git
```


### Pre-requisitos 

_Node, npm, Mondodb_


## Ejecutando pruebas

_Registro_

```
POST http://localhost:2666/api/register
content-type: application/json; charset=utf-8
body: {
    "email": "user@mail.com",
    "name": "user",
    "password": "password"
}
```


_Login_

```
POST http://localhost:2666/api/login
content-type: application/json; charset=utf-8
body: {
    "email": "user@mail.com",
    "password": "password"
}
```

_Nueva Tarea_

```
POST http://localhost:2666/api/nuevatarea
content-type: application/json; charset=utf-8
Authorization: "Bearer tokenjwt"
body:{
    "titulo": "titulo de la tarea",
    "prioridad": "alta",
    "vencimiento": "07/07/2021",
    "finalizado": "false"
}
```


_Nueva Tarea_

```
POST http://localhost:2666/api/nuevatarea
content-type: application/json; charset=utf-8
Authorization: "Bearer tokenjwt"
body:{
    "titulo": "titulo de la tarea",
    "prioridad": "alta",
    "vencimiento": "07/07/2021",
    "finalizado": "false"
}
```

_Todas las Tareas_

```
GET http://localhost:2666/api/tareas
content-type: application/json; charset=utf-8
Authorization: "Bearer tokenjwt"
```

_Una Tarea_

```
GET http://localhost:2666/api/tarea/id_tarea
content-type: application/json; charset=utf-8
Authorization: "Bearer tokenjwt"
```

_Actulizar Tarea_

```
PUT http://localhost:2666/api/actualizartarea/id_tarea
content-type: application/json; charset=utf-8
Authorization: "Bearer tokenjwt"
body:{
    "titulo": "titulo de la tarea",
    "prioridad": "alta",
    "vencimiento": "07/07/2021",
    "finalizado": "false"
}
```

_Eliminar Tarea_

```
DELETE http://localhost:2666/api/eliminartarea/id_tarea
content-type: application/json; charset=utf-8
Authorization: "Bearer tokenjwt"
```

## Autor

* **Yonatan Alberto López Sierra** 
