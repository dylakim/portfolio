<template>
  <div
    class="project-page"
    :class="projectID"
  >
        <div class="back-home">
            <a
                href=""
                @click.prevent="$router.go(-1)"
            >
                <font-awesome-icon :icon="faArrowLeft" />
                Back
            </a>
        </div>

        <div class="project">
            <div>
                <h1>{{ project.headline }}</h1>
                <p v-html="project.body"></p>

                <div
                    v-if="project.externalLinks?.length"
                    class="external-links"
                >
                    <div
                        v-for="(link, index) in project.externalLinks"
                        :key="index"
                        class="external-link"
                    >
                        <a
                            :href="link.url"
                            target="_blank"
                        >
                            <template v-if="link.type === 'website'">
                                <font-awesome-icon :icon="faGlobe" />
                                {{ link.label || `View ${project.name}` }}
                            </template>

                            <template v-if="link.type === 'github'">
                                <font-awesome-icon :icon="faGithub" />
                                View GitHub Project
                            </template>
                        </a>
                    </div>
                </div>

                <ul
                    v-if="project.techList"
                    class="tech-list"
                >
                    <li
                        v-for="item in project.techList"
                        :key="item"
                    >
                        {{ item }}
                    </li>
                </ul>
            </div> 

            <div
                v-if="project.image"
                class="project__image"
            >
                <img
                    :src="require(`@/assets/projects/${project.image}`)"
                    :alt="project.altText"
                >
            </div>
        </div>
  </div>
</template>

<script>
  import { faArrowLeft, faGlobe } from '@fortawesome/free-solid-svg-icons';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
  import projects from '../data/projects.json';

  export default {
    props: ['projectID'],

    data () {
        return {
            faArrowLeft,
            faGithub,
            faGlobe,
        };
    },

    computed: {
        project () {
            return { ...projects[this.projectID] };
        },
    },
  };
</script>

<style lang="scss">
.project-page {
    margin: calcRems(40px);

    @include bp(desktop) {
        margin: calcRems(40px) auto;
        width: calcRems(920px);
    }

    &.altria-fast-lane,
    &.admin-ui-library {
        .project {
            @include bp(mobile) {
               display: flex;
               flex-direction: column-reverse;
            }

            &__image {
                @include bp(mobile) {
                    margin-bottom: calcRems(60px);
                    margin-top: 0;
                }

                img {
                    box-shadow: none;
                }
            }
        }
    }

    &.admin-ui-library {
        .project__image img {
            display: block;
            margin: auto;
            width: calcRems(250px);
        }
    }

    .back-home {
        text-align: left;

        a {
            background: $colorPurpleDk;
            border-radius: calcRems(20px);
            color: $colorWhite;
            display: inline-block;
            font-size: calcRems(20px);
            padding: calcRems(6px) calcRems(19px);
            text-decoration: none;

            @include bp(desktop) {
                font-size: calcRems(12px);
            }
        }
    }

    .project {
        margin-top: calcRems(40px);
        text-align: left;

        @include bp(desktop) {
            display: flex;
            gap: calcRems(60px);
        }

        & > div {
            flex-basis: 50%;
        }

        &__image {
            @include bp(mobile) {
                margin-top: calcRems(60px);
            }

            img {
                box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
                max-width: 100%;
            }
        }

        .external-links {
            margin-bottom: calcRems(40px);

            .external-link {
                margin-bottom: calcRems(10px);

                a {
                    font-size: calcRems(22px);
                    text-decoration: none;

                    @include bp(desktop) {
                        font-size: calcRems(16px);
                    }
                }
            }
        }

        .tech-list {
            li {
                background: $colorGrayLt;
                border-radius: calcRems(15px);
                display: inline-block;
                margin-bottom: calcRems(10px);
                margin-inline-end: calcRems(10px);
                padding: calcRems(2px) calcRems(12px);

                @include bp(mobile) {
                    font-size: calcRems(26px);
                    margin-bottom: calcRems(15px);
                }
            }
        }
    }
}
</style>