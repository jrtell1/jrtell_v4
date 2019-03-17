<template>
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

      <a class="button project__button" href="" target="_blank" rel="noopener noreferrer">
        Check out project
        <fa :icon="['fas', 'external-link-alt']"></fa>
      </a>
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
    background: #eff2f7;
    transition: all 200ms ease-in-out;
    padding: 20px;
  }

  @media screen and (max-width: 600px) {
    .project {
      display: block;
    }
  }

  .project:hover {
    color: #ffffff;
    background: #35495e;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  }

  .project:hover a {
    color: #ffffff;
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
  }

  .project__content {
    padding: 0 20px;
  }

  .project__title {
    font-size: 40px;
    font-weight: 300;
  }

  .project__button {
    margin: 20px 0 0 0;
  }

  .project:hover .project__button {
    border-color: #ffffff;
    color: #ffffff;
  }

  .project:hover .project__button:hover {
    color: #22292f;
    background-color: #ffffff;
  }
</style>
