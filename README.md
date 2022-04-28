# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


# Descripción de la prueba: Prueba técnica de Front End React #
Este documento comprende los requerimientos para realizar la prueba técnica de Front-End React.

Se requiere el uso de **GIT** para la realización de la prueba. Esperamos que nos facilites acceso a un repositorio privado.

## Requisitos obligatorios ## 
Librerías a usar:
1. Uso de React
    * Usando la utilidad create-react-app.
    * Usando programación funcional (hooks).
2. Uso de Redux
    * Con alguno de sus middlewares más famosos: Thunk, Observables o Saga.
    * Valoramos especialmente el uso de este último (redux-saga).
3. Navegacion
    * Usando la libreria react-router.
4. Maquetacion
    * Uso de algún preprocesador de estilos (Sass, Less).
    * Valoramos muy positivamente el uso de styled-components y sus utilidades.
    * Debe considerar al menos un breakpoint orientado a dispositivos móviles.
    * Se tendrá en cuenta todo lo que puedas agregarle en calidad de UI, si bien este punto no es excluyente.
5. Formato de codigo:
    * Uso de eslint.
    * Uso de prettier.
    * Valoramos positivamente si configuras un git hook que chequea el “lint" antes de realizar un commit o push a tu repositorio.
6. Asincronia (CRUD)
    * Implementación de las llamadas asíncronas a la api que especificaremos en el enunciado.
    * Tener en cuenta el manejo de errores y flujo de uso.
7. Documentacion
    * Edición del README.md del repositorio con instrucciones para instalar y revisar el proyecto.
    * Explicación breve de lo implementado, con todo lo que creas oportuno comunicarnos.

## Requisitos opcionales ##
1. Implementar paginación del listado de usuarios.
2. Testing básico de componentes (valoramos positivamente el uso de testing-library).

## Consideraciones adicionales ##
Siéntete libre de usar cualquier librería, pero recuerda justificar su uso.

Siéntete libre de agregar funcionalidades no previstas en el enunciado de la prueba.

## Ejercicio ##
Se desea implementar:
### 1. Una lista de usuarios ###

Endpoint: GET https://reqres.in/api/users
En caso de éxito, se recibe el código de respuesta 200 y los datos dentro de la clave "data":
```
{
 "data": [
 {
 "id": 1,
 "first_name": "Eve",
 "last_name": "Holt",
...
 },
 {
 "id": 2,
 "first_name": "Charles",
 "last_name": "Morris",
 ...
 }
 ]
...
}
```
### 2. Una vista con los detalles de usuario ###

Debe constar de:
* Un campo de texto para first_name.
* Un campo de texto para last_name.
* Un campo de texto para email.
* Un botón que devuelva al listado.

Endpoint: GET https://reqres.in/api/users/:id

#### Borrado ####
En la vista de detalle de usuario se desea añadir un botón que permita borrarlo.

Endpoint: DELETE https://reqres.in/api/users/:id

#### Edición ####
La vista de detalle de usuario deberá permitir edición para actualizar sus datos. Se requiere añadir a la vista un botón de Actualizar.

Endpoint: PUT https://reqres.in/api/users/:id

Un ejemplo de petición:
```
{
 "email": "johana.mir@reqres.in",
 "first_name": "Johana",
 "last_name": "Miranda",
}
```
### 3. Una vista de login ###

Debe constar de:
* Un campo de texto para el usuario.
* Un campo de texto para la contraseña.
* Un botón de login.

Debe autenticarse contra la API con usuario y contraseña. ésta devolverá un token de autenticación, que será el que garantice que el usuario está logado.

Si el usuario posee este token podrá acceder a las dos vistas anteriores (listado de usuarios y vista de detalle). En caso contrario no deberá tener acceso.

Adicionalmente, en las dos vistas anteriores (listado y detalle de usuario) deberá permitirse la acción de logout mediante botón.

Endpoint: POST https://reqres.in/api/login?email=<email>&password=<password>

NOTA: La API de pruebas devolverá al usuario un token si se le manda un usuario que esté en la base de datos y cualquier contraseña.