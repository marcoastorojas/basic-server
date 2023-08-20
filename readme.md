# Aplicación TypeScript con Docker

## Pasos para ejecutar 

1. Clona este repositorio

``` 
git clone https://github.com/marcoastorojas/basic-server
``` 


2. Instala las dependencias
```
npm install
```


3. Compila el código TypeScript
```
npm run build
```

4. Ejecuta la aplicacion
```
npm start
```
La aplicación debería estar disponible en http://localhost:3000

## Pasos para ejecutar en Docker

1. Clona este repositorio

``` 
git clone https://github.com/marcoastorojas/basic-server
``` 


2. Instala las dependencias
```
npm install
```


3. Compila el código TypeScript
```
npm run build
```

4. Construye la imagen Docker
```
docker build -t my-app .
```

5. Ejecuta el contenedor
```
docker run -p 3000:3000 my-app
```





## Estructura del proyecto

- El código TypeScript está en `src/`
- La compilación se genera en `dist/`
- El Dockerfile utiliza el directorio `dist/`

## Tecnologías 

- TypeScript
- Node.js 
- Docker

## Créditos

- Autor: Marco Asto Rojas