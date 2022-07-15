import { readdir } from 'fs/promises'

export default async function useRoutes(App = Express()) {

    const routeFiles = await readdir('./server/routes/')

    for (const routeFile of routeFiles) {
        const path = `./routes/${routeFile}`
        const module = await import(path)
        App.use('/api' + module.URL, module.Router())
    }

    return App
}