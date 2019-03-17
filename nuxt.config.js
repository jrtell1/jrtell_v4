const pkg = require('./package');

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'John-Robin Tell',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#35495e' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: []
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  webfontloader: {
    google: {
      families: ['IM+Fell+English+SC']
    }
  },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-webfontloader',
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [{
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faExternalLinkAlt']
      }, {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['faLinkedin', 'faGithubSquare']
      }]
    }]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
};
