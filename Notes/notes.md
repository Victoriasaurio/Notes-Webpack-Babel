# WEBPACK
### Empaquetador de módulos, permite tener un servidor de desarrollo. Toma los archivos del back-end (js,hbs, ...) y lo vuelve código de producción.

# BABEL
### Paquetes de instalación
#### @babel/core librería de babel.
#### @babel/cli librería para interactuar con la consola
#### @babel/preset-env Obtiene las últimas funciones de JavaScript
#### @babel/polyfill Permite async-await dentro del navegador

## npx webpack -d || npx webpack -p -- Convierte el código de desarrollo a producción y lo guarda en la carpeta build. Las letras especifican que tipo de código estamos compilando.

## npx-dev-serve -- Crea un servidor de desarrollo en el puerto 8080. ES SOLO PARA DESARROLLO. ES NECESARIO EJECUTAR (npx webpack -p) PARA PRODUCCIÓN.

###### https://jsonplaceholder.typicode.com/photos?_limit=10 (Obtiene solo 10 datos de los 5000 existentes en la página)

## "dev": "webpack-dev-server --open" || --open Abre una pestaña del navegador