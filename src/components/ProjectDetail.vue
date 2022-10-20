<template>
    <router-link
        :to="`/project/${projectId}`"
        class="project-detail"
    >
        <div
            class="project-detail__preview"
            :class="`${projectId}_preview`"
        >
            <img
                v-if="details.image"
                :src="require(`@/assets/projects/${details.image}`)"
                :alt="details.altText"
            />
        </div>

        <section>
            <div class="project-detail__details">
                <div>
                    <h3><slot name="headline" /></h3>
                </div>
            </div>
        </section>
    </router-link>
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
.project-detail {
    display: block;
    flex-basis: 48%;
    margin-bottom: calcRems(80px);
    text-decoration: none;
    transition: all .3s ease;
    
    &:hover {
        transform: scale(1.05);
    }

    &:last-of-type {
        align-self: center;
    }

    &__preview {
        @include boxShadow();
        border-radius: calcRems(5px);
        height: calcRems(300px);
        margin-bottom: calcRems(30px);
        overflow: hidden;
        width: 100%;

        @include bp(desktop) {
            flex-shrink: 1;
            height: calcRems(250px);
            margin: 0;
        }

        img {
            display: block;
            width: 100%;
        }

        &.altria-fast-lane_preview,
        &.admin-ui-library_preview {
            align-items: center;
            display: flex;
            justify-content: center;

            img {
                max-width: 80%;
                max-height: 80%;
            }
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