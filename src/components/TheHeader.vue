<template>
    <header>
        <div class="logo">Kim Dyla</div>
        <SocialLinks />
    </header>
</template>

<script>
import SocialLinks from './SocialLinks';

export default {
  name: 'TheHeader',

  components: {
    SocialLinks,
  },
}
</script>
