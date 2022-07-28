<template>
  <div id="app">
    <header>
      <div class="logo">Kim Dyla</div>
      <SocialLinks />
    </header>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import SocialLinks from './components/SocialLinks';

export default {
  name: 'App',

  components: {
    SocialLinks,
  },
}
</script>
