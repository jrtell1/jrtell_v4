<template>
  <nuxt />
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
    color: #22292f;
    height: 100%;
  }

  body {
    height: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  a {
    color: #35495e;
  }

  #__layout,
  #__nuxt {
    height: 100%;
  }

  .button {
    display: inline-block;
    border-radius: 4px;
    transition: all 100ms ease-in-out;
    padding: 10px 20px;
    text-decoration: none;
    border: 1px solid #35495e;
    color: #35495e;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  }

  .button:hover {
    transform: translateY(-2px);
    color: #ffffff;
    background-color: #35495e;
  }

  .button:active {
    transform: translateY(1px);
  }

  .button[disabled] {
    opacity: 0.5;
    cursor: default;
  }

  .button[disabled]:hover,
  .button[disabled]:active {
    transform: none;
    background-color: transparent;
    color: #35495e;
  }

  .button--green {
    border: 1px solid #3b8070;
    color: #3b8070;
  }

  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }

  ::selection {
    background: #2c4968;
    color: #ffffff;
  }
</style>
