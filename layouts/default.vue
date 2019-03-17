<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .button {
    display: inline-block;
    border-radius: 4px;
    transition: all 100ms ease-in-out;
    padding: 10px 30px;
    text-decoration: none;
  }

  .button:hover {
    transform: translateY(-2px);
  }

  .button--green {
    border: 1px solid #3b8070;
    color: #3b8070;
  }

  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }

  .button--grey {
    border: 1px solid #35495e;
    color: #35495e;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }

  ::selection {
    background: #2c4968;
  }
</style>
