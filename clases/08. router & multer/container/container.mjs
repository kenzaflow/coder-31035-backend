import { readFile, writeFile } from 'fs/promises'

/**
 * contenedor de items
 * contiene funciones CRUD de todos los items
 * @param {string} path
 */
export default new (function Container(path = './database/items.json') {
	/**
	 * devuelve un array con todos los items en la base de datos local
	 * @async
	 * @returns {Promise<any[]>} items
	 */
	const read = async () => {
		const readed = JSON.parse(await readFile(path, { encoding: 'utf8' }))
		return [...readed]
	}

	/**
	 * sobreescribe la base de datos local con los items que se pasan
	 * @async
	 * @param {array} items
	 * @returns { Promise<boolean> }
	 */
	const write = async items => {
		if (!items) return false

		const data = JSON.stringify(items)

		await writeFile(path, data, { encoding: 'utf8' })

		return true
	}

	/**
	 * @async
	 * devuelve la cantidad de items en la base de datos local
	 * @returns { Promise<number> }
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
	 * @returns { Promise<boolean> } Boolean
	 */
	this.saveNew = async item => {
		if (!item) return false

		let items = await read()

		items.push(item)

		await write(items)

		return true
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
	 * @returns { Promise<boolean> } Boolean
	 */
	this.saveUpdate = async (updateItem) => {

		if (!updateItem) return false

		let items = await read()

		let index = items.findIndex(item => item.id === updateItem.id)

		if (index === -1) return false

		items[index] = updateItem

		return await write(items)
	}

	/**
	 * devuelve un item por su id si existe, sino devuelve un objeto vacío
	 * @param {Object} item
	 * @param {string} item.id
	 * @returns { Promise<any> }
	 */
	this.getByID = async ({ id }) => {
		const items = await read()
		return items.find(item => item.id === id)
	}

	/**
	 * devuelve todos los items que haya en la base de datos
	 * @returns {Promise<any[]>} Items
	 */
	this.getAll = async () => {
		return await read()
	}

	/**
	 * Devuelve un item al azar
	 * @returns {Promise<any[]>} Item
	 */
	this.getRandom = async () => {
		const items = await read()
		const item = items[Math.floor(Math.random() * items.length)]
		return item
	}

	/**
	 * elimina un item según su id
	 * @param {Object} item
	 * @param {string} item.id
	 * @returns {Promise<boolean>} - Boolean
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
	 * @returns {Promise<boolean>}
	 */
	this.deleteAll = async confirm => {
		if (!confirm) return false
		return await write([])
	}
})()
