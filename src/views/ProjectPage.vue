<template>
  <div> 
    <h2>
      {{ projectData.name }}<br>
      <img src="" alt=""><br>
      
      <!-- remove class -->
      <img
        :src="require(`@/assets/projects/${projectData.image}`)"
        :alt="projectData.imageAlt"
        class="project__preview" 
      ><br>
      
      {{ projectData.headline }}<br>
      <div v-html="projectData.body"></div>
    </h2>
  </div>
</template>

<script>
  import projects from '../data/projects.json';

  export default {
    props: ['project'],

    data () {
      return {
        projects,
      };
    },

    computed: {
      projectData () {
        return this.projects[this.project];
      }
    },
  };
</script>

<style lang="scss">

</style>