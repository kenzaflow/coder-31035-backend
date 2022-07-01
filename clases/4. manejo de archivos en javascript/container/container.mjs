import { readFile, writeFile } from 'fs/promises'
import item from './item.mjs'

/**
 * contenedor de items
 * contiene funciones CRUD de todos los items
 * @param {string} path
 */
export default new (function container(path = './database/items.json') {
	/**
	 * devuelve un array con todos los items en la base de datos local
	 * @async
	 * @returns {array} items
	 */
	const read = async () => {
		const readed = JSON.parse(await readFile(path, { encoding: 'utf8' }))
		return readed
	}

	/**
	 * sobreescribe la base de datos local con los items que se pasan
	 * @async
	 * @param {array} items
	 * @returns { boolean }
	 */
	const write = async items => {
		if (!items) return false

		const data = JSON.stringify(items)

		return await writeFile(path, data, { encoding: 'utf8' })
	}

	/**
	 * @async
	 * devuelve la cantidad de items en la base de datos local
	 * @returns { Number }
	 */
	this.countAll = async () => {
		return [...(await read())].length
	}

	/**
	 * si está todo correcto, manda a guardar un item
	 * @async
	 * @param {Object} item
	 * @param {string} item.id
	 * @param {string} item.title
	 * @param {string} item.description
	 * @param {number} item.price
	 * @param {string} item.image
	 * @returns { Boolean } Boolean
	 */
	this.save = async item => {
		if (!item) return false

		let items = await read()

		items.push(item)

		await write(items)

		return true
	}

	/**
	 * devuelve un item por su id si existe, sino devuelve un objeto vacío
	 * @param {Object} item
	 * @param {string} item.id
	 * @returns { Object }
	 */
	this.getByID = async ({ id }) => {
		const items = await read()
		return items.find(item => item.id === id)
	}

	/**
	 * devuelve todos los items que haya en la base de datos
	 * @returns {Array} Items
	 */
	this.getAll = async () => {
		return await read()
	}

	/**
	 * elimina un item según su id
	 * @param {Object} item
	 * @param {string} item.id
	 * @returns {boolean} - Boolean
	 */
	this.deleteByID = async ({ id }) => {
		const items = await read()

		let index = items.findIndex(item => item.id === id)

		if (index === -1) return false

		items.splice(index, 1)

		return await write(items)
	}

	/**
	 * reemplaza todos los items por un array vacío y lo manda a guardar
	 * @param {boolean} confirm
	 * @returns {boolean}
	 */
	this.deleteAll = async confirm => {
		if (confirm === true) return await write([])
		if (!confirm) return false
	}
})()
