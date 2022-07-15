# Clase 9

## Motores De Plantillas

Los templates son una aproximación al patrón MVC.

El motor lee un archivo pseudo-HTML cuyo contenido es dinámico. La sintaxis depende del motor.

**Handlebars**: Lenguaje de plantillas simple.

Una expresión simple:

- *template* `<p>{{ text }}</p>`
- *input*    `{text: `hello!`}`
- *output*   `<p>hello!</p>`

**Según Coderhouse, si tenemos un SPA, conviene renderizar en el cliente, en cambio, si tenemos un website, conviene renderizar en el server.**

### Dependencias *NPM*:
- `express-handlebars`
