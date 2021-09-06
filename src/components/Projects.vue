<template>
    <section id="projects">
        <div class="description">
            <div>
                <h1>Projects</h1>
                <p>Below are working examples of a few of my recent projects. Most of the projects I work on are short-lived, due to the nature of promotional advertising. Some promotions may no longer be active.</p>
            </div>
        </div>

        <div id="projects__examples">
            <Project
                v-for="(project, index) in projects"
                :key="project.name"
                :project-id="index"
                :details="project"
            >
                
                <template v-slot:headline>{{ project.headline }}</template>
                <template v-slot:body>
                    <div v-html="project.body" />
                </template>
            </Project>
        </div>
    </section>
</template>

<script>
    import projects from '../data/projects.json';
    import Project from './Project';

    export default {
        components: {
            Project,
        },

        data () {
            return {
                projects,
            };
        },
    };
</script>

<style lang="scss">
#projects {
    margin: 0 0 calcRems(75px);
    
    @include bp(desktop) {
        margin: 0 auto calcRems(85px);
        width: calcRems(920px);
    }

    .description {
        margin: 0 auto calcRems(40px);
        padding: calcRems(45px) calcRems(80px);

        @include bp(desktop) {
            padding: calcRems(50px) calcRems(200px);
        }
    }

    &__examples {
        margin: 0 calcRems(40px);

        @include bp(desktop) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
    }
}
</style>