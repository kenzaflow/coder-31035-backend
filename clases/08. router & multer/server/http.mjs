import http from 'http'
import CreateExpress from './express.mjs'

export default async function StartServer() {

    const server = http.createServer(await CreateExpress())

    const port = process.env.PORT | 8080

    server.listen(port, () => {
        console.log(new Date());
        console.log('Server started at port', port)
    })
}