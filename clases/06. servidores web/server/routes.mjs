import { readdir } from 'fs/promises'

export default async function UseRoutes(App = Express()) {

    const routeFiles = await readdir('./server/routes/')

    for (const routeFile of routeFiles) {
        const path = `./routes/${routeFile}`
        const module = await import(path)
        App.use(module.URL, module.Router())
    }

    return App
}