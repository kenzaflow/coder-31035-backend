import { config } from "../config/config.mjs"
import Express from "express"
import { engine as engineHandlebars } from "express-handlebars"
import pug from 'pug'
import { readdir } from 'fs/promises'
import container from "../container/container.mjs"

export default async function useTemplates(App = Express()) {

    if (config.template.engine === 'none') return App

    if (config.template.caching) App.enable('view cache')

    if (config.template.engine === 'handlebars') App = await useHandlebars(App)
    if (config.template.engine === 'pug') App = await usePug(App)
    if (config.template.engine === 'ejs') App = await useEjs(App)

    App.get('/', (req, res) => {
        res.render('pages/home');
    });

    App.get('/contact', (req, res) => {
        res.render('pages/contact', { phone: '+1-541-754-3010' });
    });

    App.get('/products', async (req, res) => {
        res.render('pages/products', { products: await container.getAll() });
    });

    App.use(Express.static('./assets/'))

    return App
}

async function useHandlebars(App = Express()) {

    App.engine('handlebars', engineHandlebars())
    App.set('view engine', 'handlebars')
    App.set('views', './views/handlebars/')

    return App
}

async function usePug(App = Express()) {

    App.set('view engine', 'pug')
    App.set('views', './views/pug/')

    return App
}

async function useEjs(App = Express()) {

    App.set('view engine', 'ejs')
    App.set('views', './views/ejs/')

    return App
}