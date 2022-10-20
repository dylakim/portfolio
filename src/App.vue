<template>
  <div>
    <header>
      <div class="logo">Kim Dyla</div>
      <SocialLinks />
    </header>
    

    <main>
      <router-view v-slot="{ Component }">
          <Transition name="fade">
              <component :is="Component" />
          </Transition>
      </router-view>
    </main>
  </div>
</template>

<script>
import SocialLinks from './components/SocialLinks';
import TheHeader from './components/TheHeader';

export default {
  name: 'App',

  components: {
    SocialLinks,
    TheHeader,
  },
}
</script>
