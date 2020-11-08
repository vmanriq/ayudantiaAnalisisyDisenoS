# Ayudantia Análisis y diseño de software

Ayudantia para el ramo Análisis y diseño de software, en esta se enseñara una breve introducion a node, junto con sus paquetes express, sequelize, sequelize-cli, nodemon

## Capsulas

1. [Que es node js ? ](https://youtu.be/qJVSf0hdot0)
2. [Instalación y hola mundo](https://youtu.be/14NCvlLpHD8)
3. [Express y rutas](https://youtu.be/CrVGM1UZM5g)
4. [Configurando sequelize](https://youtu.be/CrVGM1UZM5g)
5. [Realizando CRUD con sequelize](https://www.youtube.com/watch?v=D6c-fEydTZI&feature=youtu.be)
6. [Inluyendo un login a nuestra aplicación](https://youtu.be/0uOI_3yQmLo)


# DOC api todo analisis y diseno de software

## Auth routes

### /login POST

**Parametros**

```
{
    "email": "testemail1@gmail.com",
    "password": "test123"
}
```

**Retorno**

auth-token

### /register POST

**Parametros**

```
{
   "email": "testemail1@gmail.com",
   "password": "test123",
   "username" : "test"
}
```

**Retorno**

```
{
    "id": 3,
    "email": "vicente@gmail.com",
    "pass": "$2b$10$6UpSF.MV1YMzQte3o.217.bvq2ZJFg2CjfTPVWr2G3rP7iRYHx.Em",
    "username": "vicente",
    "updatedAt": "2020-10-25T21:38:29.644Z",
    "createdAt": "2020-10-25T21:38:29.644Z"
}
```

## Task routes

### /tasks POST

Crea una tarea asociada al usuario

**Parametros**

```
{
    "name":"tarea BD",
    "description":"hacer la tarea de bd",
    "finished":false,
    "id_category":"2"
}
```

### /tasks GET

**Retorno**
Lista con todas las tareas asociadas al usuario

```
[
    {
        "id": 3,
        "name": "tarea BD",
        "description": "hacer la tarea de bd",
        "finished": false,
        "id_category": 2,
        "id_user": 2
    }
]
```

## Category routes

### /category POST

Crea una categoria, puede ser usada por cualquier usuario

**Parametros**

```
{
    "name":"universidad",
    "description":"cosas para la universidad",
}
```

### /category GET

**Retorno**
Lista con todas las categorias creadas

```
[

    {
        "id": 2,
        "name": "universidad",
        "description": "elementos para la universidad"
    }
]
```
