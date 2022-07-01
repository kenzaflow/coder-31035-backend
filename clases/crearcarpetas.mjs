proteger()

function proteger() {
	console.log(
		'hasta este programa tiene seguridad... comentá la primera linea en el código para que continúe'
	)
	process.exit()
}

import { mkdirSync, writeFileSync } from 'fs'

const theList = `3. Programación sincrónica y asincrónica
4. Manejo de Archivos en Javascript
5. Administradores de Paquetes - NPM
6. Servidores Web
7. Express Avanzado
8. Router & Multer
9. Motores de Plantillas
10. Pug & Ejs
11. Websockets
12. Aplicación chat con Websocket
13. Node.js como herramienta de desarrollo
14. Webpack: Module Bundler
15. SQL
16. SQL y Node.js
17. MongoDB
18. CRUD en MongoDB
19. Mongoose
20. DbaaS & Firebase
21. Trabajo con datos: Mocks
22. Trabajo con datos: Normalización
23. Cookies, Sesiones, Storages - Parte 1
24. Cookies, Sesiones, Storages - Parte 2
25. Autorización y autenticación
26. Estrategias de autenticación con redes sociales
27. Proceso principal del servidor
28. Global & Child process
29. Clusters & Escalabilidad
30. PROXY & NGINX
31. Logs, profiling & debug - Parte I
32. Logs, profiling & debug - Parte II
33. Product Cloud: Heroku
34. Product Cloud: AWS
35. Envío de mensajes y seguridad
36. Twilio & OWASP
37. Versiones & Paquetes
38. Arquitectura de capas
39. Arquitectura del servidor: Diseño
40. Arquitectura del servidor: Persistencia
41. Desarrollo de un servidor web basado en capas completo
42. Testeo de funcionalidades
43. Documentación de APIs
44. GraphQL
45. Introducción a frameworks de desarrollo Backend - Parte 1
46. Introducción a frameworks de desarrollo Backend - Parte 2
47. El futuro de Nodejs: Deno
48. Desarrollo de una API REST en Deno`
	.replaceAll('.js', '')
	.replaceAll('á', 'a')
	.replaceAll('é', 'e')
	.replaceAll('í', 'i')
	.replaceAll('ó', 'o')
	.replaceAll('ú', 'u')
	.trim()
	.toLowerCase()
	.replaceAll('parte i', 'parte 1')
	.replaceAll('. ', '. ')
	.replaceAll(': ', ' - ').split(`
`)

const capitalize = (str, lower = false) =>
	(lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match =>
		match.toUpperCase()
	)
theList.forEach(value => {
	mkdirSync(value)

	const readme = `# Clase ${Number(value.split('. ')[0])}

## ${capitalize(value.split('. ')[1])}

(Plantilla - Generado automáticamente)

(Descripción)

# Desafío

(Agregar si tiene desafío o borrar)

`

	writeFileSync(value + '/readme.md', readme, { encoding: 'utf8' })
})

console.log('carpetas creadas con sus respectivos readme.md')
