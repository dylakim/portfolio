<template>
    <section id="projects">
        <div class="description">
            <div>
                <h2>Projects</h2>
                <p>Below are few examples of of my current or recent projects. due to the nature of promotional advertising, many of the projects I have worked on are short-lived.</p>
            </div>
        </div>

        <div id="projects__examples">
            <ProjectDetail
                v-for="(project, index) in projects"
                :key="project.name"
                :project-id="index"
                :details="project"
            >
                
                <template v-slot:headline>{{ project.headline }}</template>
                <template v-slot:body>
                    <div v-html="project.body" />
                </template>
            </ProjectDetail>
        </div>
    </section>
</template>

<script>
    import projects from '../data/projects.json';
    import ProjectDetail from './ProjectDetail';

    export default {
        components: {
            ProjectDetail,
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
        max-width: calcRems(720px);

        @include bp(desktop) {
            padding: calcRems(20px) 0;
        }

        p {
            padding: 0;
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