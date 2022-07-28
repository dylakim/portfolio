<template>
  <div>
    <AboutMe />
    <!-- <Projects /> -->
    <ClientsList />
    <TheFooter />
  </div>
</template>

<script>
  import AboutMe from '../components/AboutMe';
  import ClientsList from '../components/ClientsList';
  import TheFooter from '../components/TheFooter';
  // import Projects from '../components/Projects';

  export default {
    components: {
      AboutMe,
      ClientsList,
      TheFooter,
      // Projects,
    },
  }
</script>