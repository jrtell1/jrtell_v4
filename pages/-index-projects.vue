<template>
  <div>
    <div class="project">
      <div class="project__image">
        <img src="https://res.cloudinary.com/jrtell/image/upload/c_scale,f_auto,q_auto,w_300/v1552838252/jrtell/hemlagat" alt="Restaurang Hemlagat website"/>
      </div>
      <div class="project__content">
        <h2 class="project__title">Restaurang Hemlagat</h2>
        <p>
          My first jamstack!<br>
          The objective was to create a quick and simple website. I decided to use <a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer">Nuxt.js</a> and its
          static site generator, combined with <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a> for hosting and deployment.<br>
          The lunch menu needed to be dynamically updated by non-technical users. I settled for <a href="https://www.contentful.com/" target="_blank" rel="noopener noreferrer">Contentful</a> as the headless CMS and backend for this.
        </p>

        <a class="button project__button" target="_blank" rel="noopener noreferrer" href="https://www.hemlagatjonkoping.se/">
          Check out project
          <fa :icon="['fas', 'external-link-alt']"></fa>
        </a>
      </div>
    </div>

    <div class="project">
      <div class="project__image">
        <img src="https://res.cloudinary.com/jrtell/image/upload/c_scale,f_auto,q_auto,w_300,e_blur:200/v1552844646/jrtell/secret" alt="Secret project website"/>
      </div>
      <div class="project__content">
        <h2 class="project__title">Secret project - Work in progress</h2>
        <p>
          A personal project I've been working on for almost a year. Soon ready for an initial release.<br>
          Built as a PWA (Progressive Web Application). A platform for direct trade between local producers and consumers in communities.
        </p>

        <a class="button project__button" target="_blank" rel="noopener noreferrer" disabled>
          Check out project
          <fa :icon="['fas', 'external-link-alt']"></fa>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index-projects'
  };
</script>

<style scoped>
  .project {
    display: flex;
    background: #f7f7f7;
    transition: all 200ms ease-in-out;
    padding: 20px;
    border: 2px solid transparent;
  }

  @media screen and (max-width: 600px) {
    .project {
      display: block;
    }
  }

  .project:hover {
    border-color: #35495e;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  }

  .project__image {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
  }

  .project__image img {
    display: block;
    max-width: 100%;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    border: 1px solid lightgray;
  }

  .project__content {
    padding: 0 20px;
  }

  .project__title {
    font-size: 35px;
    font-weight: 300;
    text-transform: capitalize;
  }

  .project__button {
    margin: 20px 0 0 0;
  }
</style>
