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
      { hid: 'description', name: 'description', content: pkg.description },
      { property: 'og:title', content: 'John-Robin Tell' },
      { property: 'og:description', content: 'Fullstack Developer with an JavaScript obsession...' },
      { property: 'og:image', content: 'https://res.cloudinary.com/jrtell/image/upload/w_200,h_200,c_fill,g_face,f_auto/v1552242769/jrtell/Snapchat-1254887129' }
    ],
    link: [
      { rel: 'preload', href: 'https://fonts.googleapis.com/css?family=IM+Fell+English+SC', as: 'style', crossorigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=IM+Fell+English+SC' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

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
