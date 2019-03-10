<template>
  <div>
    <section class="hero">
      <div class="container">
        <div>
          <img class="portrait fade-top-on-load" src="https://res.cloudinary.com/jrtell/image/upload/w_200,h_200,c_fill,g_face/v1552242769/jrtell/Snapchat-1254887129.jpg"/>
          <h1 class="title fade-left-on-load">
            John-Robin Tell
          </h1>
          <h2 class="subtitle fade-right-on-load">
            Fullstack Developer
          </h2>
          <div class="links">
            <a class="button button--green fade-bottom-on-load" href="https://www.linkedin.com/in/john-robin-tell-b8bb235b/" target="_blank">LinkedIn</a>
            <a class="button button--grey fade-bottom-on-load" href="https://github.com/jrtell1" target="_blank">GitHub</a>
          </div>
        </div>
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
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .simplicity-container {
    margin: 0 auto;
    min-height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #35495e;
    color: white;
    overflow: hidden;
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
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    background: linear-gradient(rgba(2,2,2, 0.75), rgba(2,2,2, 0.75)), url("https://res.cloudinary.com/jrtell/image/upload/c_fill,fl_progressive,q_auto,w_1080/v1552236316/jrtell/bg2.jpg") top no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }

  .fade-top-on-load {
    animation: fadeintop 1000ms;
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

  .fade-bottom-on-load {
    animation: fadeinbottom 1000ms;
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

  .fade-left-on-load {
    animation: fadeinleft 1000ms;
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


  .fade-right-on-load {
    animation: fadeinright 1000ms;
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

  @media screen and (max-width: 600px) {
    .title {
      font-size: 40px;
    }

    .subtitle {
      font-size: 22px;
    }
  }
</style>
