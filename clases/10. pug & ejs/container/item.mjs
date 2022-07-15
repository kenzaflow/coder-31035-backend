import { generateUUID } from '../helpers/index.mjs'

/**
 * Detalla un item y sus propiedades
 * @typedef {object} item
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {number} price
 * @property {string} image
 */

/**
 * contiene funciones para crear items.
 * en un futuro puede tener para comprobar, sanitizar, etc...
 */
export default new (function Item() {
	//
	/**
	 * devuelve un item con los datos ingresados + el nuevo id
	 * @param {{id?: string, title: String, description: String, price: Number, image: String}}
	 * @returns {Promise<item|null>}
	 */
	this.create = async ({
		id = String() | undefined,
		title = String(),
		description = String(),
		price = Number(),
		image = String(),
	}) => {
		//

		if (!title || !description || !price || !image) {
			return null
		}

		const idGenerated = generateUUID()

		const item = {
			id: !id ? idGenerated : id,
			title: String(title),
			description: String(description),
			price: Number(price),
			image: String(image),
		}
		return item
	}

	return { ...this }
})()
