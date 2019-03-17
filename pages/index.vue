<template>
  <div>
    <section class="hero">
      <div class="container">
        <div class="presentation">
          <img class="portrait portrait--animation" src="https://res.cloudinary.com/jrtell/image/upload/w_200,h_200,c_fill,g_face,f_auto/v1552242867/jrtell/20190310_155108" alt="Portrait"/>
          <h1 class="title fade-left-on-load">
            John-Robin Tell
          </h1>
          <h2 class="subtitle fade-right-on-load">
            Fullstack Developer
          </h2>
          <div class="links">
            <a class="button button--linkedin button--animation" href="https://www.linkedin.com/in/john-robin-tell-b8bb235b/" target="_blank" rel="noopener noreferrer">
              <fa :icon="['fab', 'linkedin']"></fa>
              LinkedIn
            </a>
            <a class="button button--github button--animation" href="https://github.com/jrtell1" target="_blank" rel="noopener noreferrer">
              <fa :icon="['fab', 'github-square']"></fa>
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div class="arrows">
        <div class="arrow"></div>
        <div class="arrow"></div>
      </div>
    </section>

    <section class="simplicity-container">
      <div>
        <h2 class="subtitle">I strive for</h2>
        <h2 class="title">Simplicity</h2>
        <h2 class="title">&</h2>
        <h2 class="title">Excellence</h2>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h3 class="section__title">Latest projects</h3>
        <index-projects/>
      </div>
    </section>
  </div>
</template>

<script>
  import IndexProjects from './-index-projects';

  export default {
    components: { IndexProjects }
  }
</script>

<style scoped>
  .section {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .section__title {
    display: block;
    font-weight: 300;
    font-size: 50px;
    letter-spacing: 1px;
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 30px;
  }

  .container {
    margin: 0 auto;
    max-width: 1000px;
    padding: 0 20px;
  }

  .button {
    margin-left: 5px;
    margin-right: 5px;
  }

  .button--linkedin {
    border-color: #4F6D7A;
    color: #4F6D7A;
  }

  .button--linkedin:hover {
    background: #4F6D7A;
    color: #ffffff;
  }

  .button--github {
    border-color: #6e5494;
    color: #6e5494;
  }

  .button--github:hover {
    background: #6e5494;
    color: #ffffff;
  }

  .presentation {
    margin-bottom: 50px;
  }

  .simplicity-container {
    margin: 0 auto;
    padding: 60px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #35495e;
    color: white;
    overflow: hidden;
  }

  .arrows {
    position: absolute;
    bottom: 30px;
    display: flex;
    flex-direction: column;
    animation: hover 1500ms infinite;
  }

  .arrow {
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
  }

  .portrait {
    border-radius: 50%;
    border: 5px solid #adadad;
    overflow: hidden;
    -webkit-user-drag: none;
  }

  .title {
    font-family: 'IM Fell English SC', serif;
    display: block;
    font-weight: 300;
    font-size: 60px;
    letter-spacing: 1px;
    color: white;
  }

  .subtitle {
    font-weight: 300;
    font-size: 32px;
    word-spacing: 5px;
    padding-bottom: 15px;
    color: white;
  }

  .links {
    padding-top: 15px;
  }

  .hero {
    overflow: hidden;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: linear-gradient(rgba(2,2,2, 0.55), rgba(2,2,2, 0.55)), url("https://res.cloudinary.com/jrtell/image/upload/c_fill,fl_progressive,q_auto,e_blur:500,w_1920,f_auto/v1552236316/jrtell/bg2.jpg") top no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }

  .portrait--animation {
    animation: fadein 1000ms;
  }

  .button--animation {
    animation: fadeinbottom 1000ms;
  }

  .fade-left-on-load {
    animation: fadeinleft 1000ms;
  }

  .fade-right-on-load {
    animation: fadeinright 1000ms;
  }

  @keyframes fadeinbottom {
    from {
      opacity: 0;
      transform: translateY(200px);
    }
    to   {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to   {
      opacity: 1;
    }
  }

  @keyframes fadeintop {
    from {
      opacity: 0;
      transform: translateY(-200px);
    }
    to   {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes fadeinleft {
    from {
      opacity: 0;
      transform: translateX(-200px);
    }
    to   {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @keyframes fadeinright {
    from {
      opacity: 0;
      transform: translateX(200px);
    }
    to   {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @keyframes hover {
    0% {
      transform: translateY(-10px);
    }
    50%   {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-10px);
    }
  }

  @media screen and (max-width: 600px) {
    .title {
      font-size: 40px;
    }

    .subtitle {
      font-size: 22px;
    }
  }
</style>
