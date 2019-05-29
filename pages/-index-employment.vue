<template>
  <div>
    <a class="employment" href="https://www.alektumgroup.se/" target="_blank">
      <h4>Alektum Group</h4>
      <div>2019 - Current</div>
      <div>Front-End Developer</div>
      <div class="icon">
        <fa :icon="['fas', 'external-link-alt']"></fa>
      </div>
    </a>

    <a class="employment" href="https://rebelwalls.com/" target="_blank">
      <h4>Rebel Walls</h4>
      <div>2016 - 2019</div>
      <div>Systems Developer</div>
      <div class="icon">
        <fa :icon="['fas', 'external-link-alt']"></fa>
      </div>
    </a>

    <a class="employment">
      <h4>Self-employed</h4>
      <div>2013 - 2016</div>
      <div>Fullstack Developer</div>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'employment'
  };
</script>

<style scoped>
  .employment {
    display: flex;
    justify-content: space-around;
    background: #f7f7f7;
    transition: all 200ms ease-in-out;
    padding: 20px;
    border: 2px solid transparent;
    text-decoration: none;
    animation: projectfadein 400ms ease-out;
    position: relative;
  }

  @media screen and (max-width: 600px) {
    .employment {
      display: block;
    }
  }

  .employment:hover {
    border-color: #35495e;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  }

  .icon {
    position: absolute;
    right: 20px;
    top: 20px;
    bottom: 20px;
  }
</style>