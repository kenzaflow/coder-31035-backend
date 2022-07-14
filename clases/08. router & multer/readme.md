# Clase 8

## Router & Multer

* **Router** nos permite crear una ruta aislada del resto

* **express.static** nos permite servir archivos estáticos, relativos al directorio especificado. Es recursivo, por lo que podemos declararlo varias veces, y Express busca si existen en el orden declarado.

  * Ejemplo: 
  ```javascript
    app.use(express.static('public'))
  ```

* Las capas o **middlewares** ejecutan códigos en el orden declarado. Para crear uno, además de `res` y `req`, es necesario ejecutar `next()` para continuar la ejecución, caso contrario la petición termina en la porción de código indicada.

* **Multer** es una librería para manipular el `multipart/form-data`, y se utiliza cuando los usuarios suben archivos.


# Desafío

- [x] Mover las direcciones previamente implementadas a `/api/...`
- Incorporar:
- - [x] `POST /api/productos` => `id` - Recibe y agrega un producto.
- - [x] `PUT /api/productos/:id` => *Status* - Recibe y actualiza un producto.
- - [x] `DELETE /api/productos/:id` => *Status* - Elimina un producto.

[Ver API](readme_api.md)