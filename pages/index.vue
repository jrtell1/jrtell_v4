<template>
  <div class="two-column-layout">
    <section class="hero">
      <div class="container">
        <div class="presentation">
          <img class="portrait portrait--animation" src="https://res.cloudinary.com/jrtell/image/upload/w_200,h_200,c_fill,g_face,f_auto/v1552242769/jrtell/Snapchat-1254887129" alt="Portrait"/>
          <h1 class="title fade-left-on-load">
            John-Robin Tell
          </h1>
          <h2 class="subtitle fade-left-on-load">
            Fullstack Developer<br>
            <small>With a JavaScript obsession...</small>
          </h2>
          <div class="links">
            <a class="button button--business button--animation-1" href="https://www.linkedin.com/in/john-robin-tell-b8bb235b/" target="_blank" rel="noopener noreferrer">
              <fa :icon="['fab', 'linkedin']"></fa>
              LinkedIn
            </a>
            <a class="button button--github button--animation-2" href="https://github.com/jrtell1" target="_blank" rel="noopener noreferrer">
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

    <div class="main-content">
      <section class="simplicity-container">
        <div>
          <h2 class="subtitle">I strive for</h2>
          <h2 class="title">Simplicity & Excellence</h2>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <h3 class="section__title">Latest projects</h3>
          <index-projects/>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <proficiencies/>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import IndexProjects from './-index-projects';
  import Proficiencies from './-index-proficiencies';

  export default {
    components: { Proficiencies, IndexProjects }
  }
</script>

<style>
  body {
    background: url('~assets/trianglify.svg') #162433 no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }

  .two-column-layout {
    display: flex;
    height: 100%;
  }

  .section {
    padding-top: 60px;
    padding-bottom: 60px;
    background: white;
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

  .button--business {
    border-color: #4F6D7A;
    background: #4F6D7A;
    color: #ffffff;
  }

  .button--github {
    border-color: #6e5494;
    background: #6e5494;
    color: #ffffff;
  }

  .button--github:hover {
    background: #5b3f84;
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
    background: transparent;
    color: white;
    overflow: hidden;
  }

  .arrows {
    position: absolute;
    bottom: 30px;
    display: none;
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
    line-height: 80px;
    display: block;
    font-weight: 300;
    font-size: 60px;
    letter-spacing: 1px;
    color: white;
    text-shadow: 0px 0px 3px #000000;
  }

  .subtitle {
    font-weight: 300;
    font-size: 32px;
    word-spacing: 5px;
    padding-bottom: 15px;
    color: white;
    animation-delay: 400ms !important;
    line-height: 25px;
    text-shadow: 0px 0px 3px #000000;
  }

  .subtitle small {
    font-size: 15px;
    font-style: italic;
  }

  .links {
    padding-top: 15px;
  }

  .hero {
    flex: 0 1 auto;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .portrait--animation {
    animation: fadein 1000ms;
  }

  .button--animation-1 {
    animation: fadeinbottom 1000ms;
  }

  .button--animation-2 {
    animation: fadeinbottom 1300ms;
  }

  .fade-left-on-load {
    animation: fadeinleft 1000ms forwards;
    opacity: 0;
    animation-delay: 200ms;
  }

  .main-content {
    flex: 1;
    height: 100%;
    overflow-y: scroll;
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
      transform: translateX(-400px);
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

  @media screen and (max-width: 1200px) {
    body, html {
      height: auto;
    }

    .two-column-layout {
      display: block;
    }

    .hero {
      min-height: 100vh;
      width: 100%;
    }

    .arrows {
      display: flex;
    }
  }

  @media screen and (max-width: 600px) {
    .title {
      font-size: 40px;
      line-height: 50px;
    }

    .subtitle {
      font-size: 22px;
    }
  }
</style>
