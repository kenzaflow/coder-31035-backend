//@ts-check

/**
 * Configuration properties for the project
 * @typedef {object} config
 * @property {object} template Templating structure
 * @property {'handlebars' | 'pug' | 'ejs' | 'none'} template.engine Template engine to use
 * @property {boolean} template.caching Enable or disable template caching
 */

/**
 * @type {config}
 */
export const config = {
    template: {
        engine: 'ejs',
        caching: false
    }
}