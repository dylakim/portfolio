<template>
  <div>
    <AboutMe />
    <ProjectsList />
    <ClientsList />
    <TheFooter />
  </div>
</template>

<script>
  import AboutMe from '../components/AboutMe';
  import ClientsList from '../components/ClientsList';
  import TheFooter from '../components/TheFooter';
  import ProjectsList from '../components/ProjectsList';

  export default {
    components: {
      AboutMe,
      ClientsList,
      TheFooter,
      ProjectsList,
    },
  }
</script>