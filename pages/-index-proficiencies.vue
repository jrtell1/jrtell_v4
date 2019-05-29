<template>
  <div class="proficiencies">
    <div class="proficiencies__column">
      <h4 class="proficiencies__title">Languages</h4>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>PHP</li>
        <li>SQL</li>
      </ul>
    </div>
    <div class="proficiencies__column">
      <h4 class="proficiencies__title">Frameworks</h4>
      <ul>
        <li>VueJs</li>
        <li>NuxtJs</li>
        <li>Laravel</li>
        <li>Socket.io</li>
        <li>Tailwindcss</li>
        <li>Bulma</li>
      </ul>
    </div>
    <div class="proficiencies__column">
      <h4 class="proficiencies__title">Tools</h4>
      <ul>
        <li>Docker</li>
        <li>GitHub</li>
        <li>Netlify</li>
        <li>Cloudinary CDN</li>
        <li>Webpack</li>
        <li>Nginx</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'proficiencies'
  };
</script>

<style scoped>
  .proficiencies {
    display: flex;
  }

  .proficiencies__column {
    flex: 1;
  }

  .proficiencies__title {
    font-size: 18px;
    font-weight: 500;
  }

  .proficiencies__column ul {
    padding: 0;
  }

  .proficiencies__column li {
    list-style: none;
    padding: 2px 10px;
  }

  .proficiencies__column li::before {
    border-radius: 3px;
    content: "";
    display: inline-block;
    height: 10px;
    width: 10px;
    margin-right: 5px;
    background: #1c5ca0;
  }
</style>