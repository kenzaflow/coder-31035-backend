import Express from "express"
import container from "../../container/container.mjs"

const URL = '/products'

function Products() {
    const Router = Express.Router()

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