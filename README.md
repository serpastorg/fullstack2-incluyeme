# Descripción del proyecto

Este proyecto incluye un CRUD con MongoDB llamado "Profesores" y una llamada a API externa llamada DragonBall.
Profesores alberga imágenes subidas desde el Frondend.

## Tecnologías Utilizadas

- **Frontend**: React, React Router, CSS
- **Backend**: Node.js, Express
- **Base de Datos**: MongoDB, Mongoose

## Estructura del Proyecto

- **Frontend**: Código fuente en el directorio `front/`
- **Backend**: Código fuente en el directorio `back/`

## Instalación

Descargue todas las carpetas en este repositorio

git clone https://github.com/serpastorg/fullstack2-incluyeme.git

Entre en la carpeta que el anterior comando crea

### Backend

1. Navegue al directorio `back/`.

    cd back

2. Instale las dependencias del backend.

    npm install

3. Configure las variables de entorno. Cree un archivo `.env` en el directorio `back/` y agregue la siguientes líneas:

    MONGODB_URI=mongodb://localhost:27017/tutorias
   
    PORT=5000

    La base de datos debe llamarse tutorias y la colección dentro de ella se llama "profesors". Esta constituye la capa de persistencia del proyecto CRUD

5. Inicie el servidor del backend.
    Diríjase a la carpeta "back/" y teclee
   
    "npm start" o "nodemon", en caso de tener nodemon instalado


### Frontend

1. Navegue al directorio `front/`, que está en la misma carpeta que "back/"


2. Instale las dependencias del frontend.

    npm install

3. Inicie el servidor de desarrollo del frontend.

    npm run dev

## Funcionalidades

- **Lista de Profesores**: Lista todos los registros en la colección "profesors" (profesores)
- **Edición de Profesores**: Permite la edición de los registros en la colección
- **Crear Profesor**: Añade un nuevo registro en la colección
- **Eliminar Profesor**: Elimina un registro de la base de datos.
- **Archivos**: Para crear registros se exige que se suba un archivo de imagen en el formulario de creación. El backend guarda este archivo en la carpeta "back/uploads/" usando un número correspondiente a la salida de Date.now(), un guion y el nombre original de la imagen.
Cuando se cambia la imagen en el front, el backend borra la imagen correspondiente en el back, lo mismo cuando se elimina un registro.

## Endpoints del API

- `GET /profesores` - Obtiene todos los registros de la base de datos y los muestra en una lista, cada uno con su respectiva imagen.
- `GET /profesores/:id` - Obtiene un registro por su ID

- `POST /profesores` - Crea un nuevo registro. Se debe mandar un formulario (multipart/form-data) con los siguientes datos en el body como 
{
    nombre: 'ElnombrequequieratipoString', 
    email: 'ElEmailquequieratipoString',
    phone:'ElPhonequequieratipoString'
} 
y un archivo de tipo (mimetype) image que se identifica como "imagen" dentro del body, que es el que se guarda en el directorio del backend según la hora en la que se suba (Date.now()) el archivo

- `PUT /profesores/:id` - Actualiza un registro de la base de datos según los datos que se manden. Los parámetros para el PUT de actualizar son los mismos que para el POST de crear. Si en el formulario de actualización se indica un archivo diferente, se borra el que estaba vinculado al registro y se pone el nuevo. Si no se cambia el archivo, se mantiene la ruta, y, por lo tanto, el archivo.

- `DELETE /profesores/:id` - Elimina un registro de la base de datos con su respectiva imagen

## Llamada a la API externa

Hay un vínculo en el navbar del frontend que dice "Dragon Ball".
Es una llamada (GET) a la API 'https://dragonball-api.com/api/characters'
de la página 'https://dragonball-api.com/'.
Se hace una llamada y se renderizan los campos que se obtienen en el JSON enviado por la API.
Con base en esto se ponen unos botones en la parte de abajo que pasan cada diez personajes hacia adelante o hacia atrás, habiendo también vínculos a la última página de la API y a la primera.

## SE RECOMIENDA, PARA PROBAR LAS FUNCIONALIDADES, USAR MONGODB COMPASS 

