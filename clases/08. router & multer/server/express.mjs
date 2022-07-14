import Express from "express"
import UseRoutes from "./routes.mjs"

export default async function CreateExpress() {

    let App = Express()

    App.use(Express.json())
    App.use(Express.urlencoded({ extended: true }))

    App = await UseRoutes(App)

    App.all('*', (req, res) => {
        res.sendStatus(400)
    })

    return App
}