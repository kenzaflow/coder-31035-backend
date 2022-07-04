import container from './container/container.mjs'
import item from './container/item.mjs'

const main = async () => {
	console.clear()

	// ================================
	// Crea un { ...item }

	/*
		await item.create({
			title: 'Birrita',
			description: 'De la buena pa',
			image: 'url...',
			price: 290, // LRPTM
		}) 
	*/

	// Crea un { ...item }
	// ================================

	// ================================
	// Guarda un { ...item }

	/*
		await container.save(
			await item.create({
				title: 'Birrita',
				description: 'De la buena pa',
				image: 'url...',
				price: 290, // LRPTM
			})
		)
	*/

	// Guarda un { ...item }
	// ================================

	// ================================
	// Contar todos los [ items ]

	/*
		await container.countAll()
	*/

	// Contar todos los [ items ]
	// ================================

	// ================================
	// Obtener todos los [ items ]

	/*
		await container.getAll()
	*/

	// Obtener todos los [ items ]
	// ================================

	// ================================
	// Obtener un item por { id }

	/* 
		await container.getByID( { id: 'dc5e4f88-0cb5-4fb0-b1e2-10239d07732c' } )
	*/

	// Obtener un item por { id }
	// ================================

	// ================================
	// Eliminar un item por { id }

	/* 
		await container.deleteByID({ id: 'dc5e4f88-0cb5-4fb0-b1e2-10239d07732c' })
	*/

	// Eliminar un item por { id }
	// ================================
}

main()

//
//
//
// IGNORAME :)
//

// ================================
// Template

/*

	*/

// Template
// ================================
