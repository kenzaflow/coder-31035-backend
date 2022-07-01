import { generateUUID } from '../helpers/index.mjs'

/**
 * contiene funciones para crear items.
 * en un futuro puede tener para comprobar, sanitizar, etc...
 */
export default new (function item() {
	//
	/**
	 * devuelve un item con los datos ingresados + el nuevo id
	 * @param {{title: String, description: String, price: Number, image: String}}
	 * @returns {{id: String, title: String, description: String, price: Number, image: String}}
	 */
	this.create = async ({
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
			id: idGenerated,
			title: String(title),
			description: String(description),
			price: Number(price),
			image: String(image),
		}
		return item
	}

	return { ...this }
})()
