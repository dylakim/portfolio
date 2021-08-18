<template>
  <div id="app">
    <header>
      <div class="logo">Kim Dyla</div>

      <Social />
    </header>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Social from './components/Social';

export default {
  name: 'App',

  components: {
    Social,
  },
}
</script>
