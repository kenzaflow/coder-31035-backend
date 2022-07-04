# Clase 4

## Manejo De Archivos En Javascript

Es necesario que los datos persistan en el disco.
Obvio que es mejor usar una base de datos siempre que se pueda. Se puede usar el FileSystem para cosas mas sencillas, como la configuración...

Operaciones comunes:

 - Sync (fs)
 - - readFileSync (para leer lol)
 - - writeFileSync (para crear o sobreescribir)
 - - appendFileSync (para crear o agregar al final)
 - - unlinkSync (para borrar)
 - - mkdirSync (crear una carpeta)
 - Async (fs/promises)
 - - readFile
 - - writeFile
 - - appendFile
 - - unlink
 - - mkdir

Se puede usar try... catch para controlar errores tanto en Sync como Async.


Notas:

¡Las rutas son son relativas al entorno de ejecución!
Si estoy ejecutando un archivo `.mjs` que se encuentra en `/home/kevinzaracho/desktop/project/`, pero en la terminal estoy en `/home/`, las rutas relativas como `./db/file.json` se van a completar a partir de `/home/`.

## Desafío

Las llamadas a las funciones están testeadas y las dejé comentadas para usar

- [x] item: { id, title, description, price, image }

- [x] class contenedor(archivo)
- - [x] save( item ): id
- - [x] getByID( id ): item
- - [x] getAll(): items[]
- - [x] deleteByID( id ): boolean
- - [x] deleteAll(): boolean - nuke lol