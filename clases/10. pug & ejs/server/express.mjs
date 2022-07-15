import Express from "express"
import useTemplates from "./templates.mjs"
import useRoutes from "./routes.mjs"

export default async function CreateExpress() {

    let App = Express()

    App.use(Express.json())
    App.use(Express.urlencoded({ extended: true }))

    App = await useRoutes(App)

    App = await useTemplates(App)

    App.all('*', (req, res) => {
        res.sendStatus(501)
    })

    return App
}