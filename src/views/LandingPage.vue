<template>
  <div>
    <About />
    <Projects />
    <Clients />
    <Footer />
  </div>
</template>

<script>
  import About from '../components/About';
  import Clients from '../components/Clients';
  import Footer from '../components/Footer';
  import Projects from '../components/Projects';

  export default {
    components: {
      About,
      Clients,
      Footer,
      Projects,
    },
  }
</script>