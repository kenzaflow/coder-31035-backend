import Express from "express"
import UseRoutes from "./routes.mjs"

export default async function CreateExpress() {

    let App = Express()

    App = await UseRoutes(App)

    App.all('*', (req, res) => {
        res.sendStatus(400)
    })

    return App
}