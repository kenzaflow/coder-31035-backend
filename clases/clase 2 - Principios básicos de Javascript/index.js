// ~ node index.js # ejecuta el programa

class claseLibro {
	constructor({ nombre, autor }) {
		this.nombre = nombre
		this.autor = autor
	}
}

class claseMascota {
	constructor({ nombre }) {
		this.nombre = nombre
	}
}

class claseUsuario {
	constructor({
		nombre = new String(),
		apellido = new String(),
		libros = [],
		mascotas = [],
	}) {
		this.nombre = String(nombre)
		this.apellido = String(apellido)

		if (!Array.isArray(libros))
			throw Error('Se esperaba un array de libros')
		libros.forEach(element => {
			if (element instanceof claseLibro === false)
				throw Error('Se esperaba una instancia de claseLibro')
		})
		this.libros = libros

		if (!Array.isArray(mascotas))
			throw Error('Se esperaba un array de mascotas')
		mascotas.forEach(element => {
			if (element instanceof claseMascota === false)
				throw Error('Se esperaba una instancia de claseMascota')
		})
		this.mascotas = mascotas
	}

	obtenerNombreCompleto() {
		return `${this.nombre} ${this.apellido}`
	}

	obtenerMascotas() {
		let texto = ''
		this.mascotas.forEach(({ nombre }, index) => {
			if (index === this.mascotas.length - 1) texto += `${nombre}`
			else texto += `${nombre}, `
		})

		return texto
	}

	agregarMascota(...mascotas) {
		if (!Array.isArray(mascotas) || mascotas.length === 0)
			throw Error('Se esperaba un array de mascotas')
		mascotas.forEach(mascota => {
			if (mascota instanceof claseMascota === false)
				throw Error('Se esperaba una instancia de claseMascota')
			this.mascotas.push(mascota)
		})
		return this.obtenerMascotas()
	}

	obtenerMascotasNumber() {
		return this.mascotas.length
	}

	obtenerLibros() {
		let texto = ''
		this.libros.forEach(({ nombre }, index) => {
			if (index === this.libros.length - 1) texto += `${nombre}`
			else texto += `${nombre}, `
		})

		return texto
	}
	obtenerLibrosNumber() {
		return this.libros.length
	}
	agregarLibro(...libros) {
		if (!Array.isArray(libros) || libros.length === 0)
			throw Error('Se esperaba un array de libros')
		libros.forEach(libro => {
			if (libro instanceof claseLibro === false)
				throw Error('Se esperaba una instancia de claseLibro')
			this.libros.push(libro)
		})
		return this.obtenerLibros()
	}
}

console.clear()

let elSujeto = new claseUsuario({
	nombre: 'Kevin',
	apellido: 'Zaracho',
	libros: [
		new claseLibro({ nombre: 'Eloquent JS', autor: 'Marijn Haverbeke' }),
		new claseLibro({ nombre: 'Al Azif', autor: 'Abdul Alhazred' }),
	],
	mascotas: [
		new claseMascota({ nombre: 'Cali' }),
		new claseMascota({ nombre: 'Kuky' }),
	],
})

console.log(
	`El nombre del sujeto es: \x1b[36m${elSujeto.obtenerNombreCompleto()}\x1b[0m.`
)

console.log(`\nMascotas: \x1b[35m${elSujeto.obtenerMascotas()}\x1b[0m.`)
console.log(
	`Le añadimos una mascota, ahora tiene: \x1b[35m${elSujeto.agregarMascota(
		new claseMascota({ nombre: 'Mica' })
	)}\x1b[0m.`
)

console.log(
	'Así que ahora, tiene',
	elSujeto.obtenerMascotasNumber(),
	'mascotas.'
)

console.log(`\nTiene los libros: \x1b[35m${elSujeto.obtenerLibros()}\x1b[0m.`)

console.log(
	`Le añadimos un libro, ahora tiene: \x1b[35m${elSujeto.agregarLibro(
		new claseLibro({
			nombre: 'Manuscrito Voynich',
			autor: 'Wilfrid Voynich',
		})
	)}\x1b[0m.`
)

console.log(
	`Básicamente, el sujeto tiene ${elSujeto.obtenerLibrosNumber()} xd.\n`
)
