<template>
  <div class="hero">
  <section class="container">
    <div>
      <img class="portrait" src="https://res.cloudinary.com/jrtell/image/upload/w_200,h_200,c_fill,g_face/v1532716014/jrtell/Snapchat-483615629.jpg"/>
      <h1 class="title">
        John-Robin Tell
      </h1>
      <h2 class="subtitle">
        Fullstack Developer
      </h2>
      <div class="links">
        <a class="button--green" href="https://www.linkedin.com/in/john-robin-tell-b8bb235b/" target="_blank">LinkedIn</a>
        <a class="button--grey" href="https://github.com/jrtell1" target="_blank">GitHub</a>
      </div>
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

  .portrait {
    border-radius: 50%;
    border: 5px solid #adadad;
    overflow: hidden;
  }

  .title {
    /*font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;*/
    /*font-family: 'Cinzel Decorative', cursive;*/
    /*font-family: 'Cormorant Unicase', serif;*/
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
    /*background: linear-gradient(rgba(23,23,56, 0.8), rgba(23,23,56, 0.8)), url("https://res.cloudinary.com/jrtell/image/upload/c_crop,fl_progressive,q_auto,w_1920,h_1080/v1552236316/jrtell/bg2.jpg") top no-repeat;*/
    /*background: linear-gradient(rgba(25,19,8, 0.8), rgba(25,19,8, 0.8)), url("https://res.cloudinary.com/jrtell/image/upload/c_crop,fl_progressive,q_auto,w_1920,h_1080/v1552236316/jrtell/bg2.jpg") top no-repeat;*/
    /*background: linear-gradient(rgba(14,16,61, 0.75), rgba(14,16,61, 0.75)), url("https://res.cloudinary.com/jrtell/image/upload/c_crop,fl_progressive,q_auto,w_1920,h_1080/v1552236316/jrtell/bg2.jpg") top no-repeat;*/
    background: linear-gradient(rgba(2,2,2, 0.75), rgba(2,2,2, 0.75)), url("https://res.cloudinary.com/jrtell/image/upload/c_crop,fl_progressive,q_auto,w_1920,h_1080/v1552236316/jrtell/bg2.jpg") top no-repeat;
    background-size: cover;
    background-attachment: fixed;
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
