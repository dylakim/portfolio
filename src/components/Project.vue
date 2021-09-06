<template>
    <!-- <router-link
        :to="`/project/${projectId}`"
        class="project"
    > -->
    <a
        :href="details.url"
        target="_blank"
        class="project"
    >
        <div class="project__preview">
            <img
                :src="require(`@/assets/projects/${details.image}`)"
                :alt="details.altText"
            />
        </div>
        <section>

            <div class="project__details">
                <div>
                    <h2><slot name="headline" /></h2>
                </div>
            </div>
        </section>
    </a>
    <!-- </router-link> -->
</template>

<script>
    import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

    export default {
        props: {
            projectId: {
                required: true,
                type: String,
            },
            details: {
                required: true,
                type: Object,
            },
        },

        data () {
            return {
                faAngleRight,
            };
        },
    }
</script>

<style lang="scss">
.project {
    display: block;
    flex-basis: 48%;
    margin-bottom: calcRems(80px);
    text-decoration: none;

    &:last-of-type {
        align-self: center;
    }

    &__preview {
        @include boxShadow();
        border-radius: calcRems(3px);
        margin-bottom: calcRems(30px);
        overflow: hidden;
        width: 100%;

        @include bp(desktop) {
            flex-shrink: 1;
            height: calcRems(500px);
            margin: 0;
        }

        img {
            display: block;
            width: 100%;
        }
        
    }

    &__details {
        margin-top: calcRems(20px);

        h2 {
            background: white;
        }
    }
}
</style>