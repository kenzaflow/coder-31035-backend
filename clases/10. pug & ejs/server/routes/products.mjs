import Express from "express"
import container from "../../container/container.mjs"
import item from "../../container/item.mjs"

const URL = '/products'

function Products() {
    const Router = Express.Router()

    Router.delete('/:id', async (req, res) => {
        const result = await container.deleteByID({ id: req.params.id })

        result && res.sendStatus(200)
        !result && res.sendStatus(404)
    })

    Router.put('/:id', async (req, res) => {

        let updatedItem = await item.create({ ...req.body, id: req.params.id })

        if (updatedItem) {
            const result =
                await container.saveUpdate(updatedItem)
            if (!result) updatedItem = false
        }

        updatedItem === null && res.sendStatus(406)
        !updatedItem && res.sendStatus(404)
        updatedItem && res.send(updatedItem.id)

    })

    Router.post('/', async (req, res) => {

        const newItem = await item.create(req.body)

        !newItem && res.sendStatus(406)
        if (newItem) {
            await container.saveNew(newItem)
            res.send(newItem.id)
        }
    })

    Router.get('/random', async (req, res) => {
        const item = await container.getRandom()
        res.send(item)
    })

    Router.get('/:id', async (req, res) => {
        const item = await container.getByID({ id: req.params.id })

        item && res.send(item)
        !item && res.sendStatus(404)
    })

    Router.get('/', async (req, res) => {
        const items = await container.getAll()
        res.send(items)
    })

    return Router
}

export { URL, Products as Router }