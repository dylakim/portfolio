<template>
    <section id="about">
        <div class="description">
            <div>
                <h1>Front End Web Developer</h1>

                <p>I am a Senior Interface Developer and Platform Tech Lead at Merkle where I have built many responsive and accessible promotional sites at a rapid pace over the last 7 years.</p>
                
                <p>Now I'm looking for my next challenge. I would love an opportunity to work with a product where, with modern frontend technology, I can build and maintain reusable and scalable components or applications. I love building something once and using it anywhere which is no surprise considering my organized mind, focus on efficiency, and priority to make others lives easier (and mine 😜).</p>

                <p>If you would like to connect, get in touch over on <a href="https://www.linkedin.com/in/dylakim" target="_blank">LinkedIn</a>!</p>
            </div>
        </div>

        <div id="skills">
            <section>
                <font-awesome-icon :icon="faCode" />
                <h2>Technology</h2>
                <ul>
                    <li>Vue.js</li>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS/SCSS</li>
                </ul>
            </section>

            <section>
                <font-awesome-icon :icon="faTools" />
                <h2>Tools</h2>
                <ul>
                    <li>Git</li>
                    <li>Bitbucket</li>
                    <li>Jira</li>
                    <li>VSCode</li>
                    <li>Photoshop</li>
                </ul>
            </section>

            <section>
                <font-awesome-icon :icon="faHeart" />
                <h2>Interests</h2>
                <ul>
                    <li>Travel</li>
                    <li>Mountain Biking</li>
                    <li>Snowboarding</li>
                    <li>Cocktails</li>
                    <li>Netflix and Chill</li>
                </ul>
            </section>
        </div>
    </section>
</template>

<script>
    import {
        faCode,
        faHeart,
        faMapMarkerAlt,
        faTools,
    } from '@fortawesome/free-solid-svg-icons';

    export default {
        data (){
            return {
                faCode,
                faHeart,
                faMapMarkerAlt,
                faTools,
            };
        },
    }
</script>

<style lang="scss">
#about {
    margin-bottom: calcRems(40px);

    @include bp(desktop) {
        margin-bottom: calcRems(100px);
    }

    .description {
        background: $colorPurpleDk;
        padding: calcRems(60px) calcRems(80px) calcRems(140px);

        h1, p, a {
            color: $colorWhite;
        }

        & > div {
            margin: auto;
            max-width: calcRems(720px);
        }

        .fa-map-marker-alt {
            margin-right: calcRems(5px);
        }
    }

    #skills {
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: calcRems(-75px) auto calcRems(40px);
        padding: 0 calcRems(40px);
        
        @include bp(desktop) {
            margin: calcRems(-90px) auto calcRems(45px);
            padding: 0;
            width: calcRems(920px);
        }

        section {
            background: $colorWhite;
            border: 1px solid $colorPurpleDk;
            border-radius: calcRems(15px);
            @include boxShadow();
            box-sizing: border-box;
            flex-basis: calcRems(270px);
            padding: calcRems(30px) 0;
            
            @include bp(desktop) {
                flex-basis: calcRems(286px);
                padding: calcRems(35px) 0 calcRems(50px);
            }

            &:last-of-type {
                @include bp(mobile) {
                    flex-basis: 100%;
                    margin-top: calcRems(20px);
                }
            }

            h2 {
                @extend h3;
            }

            svg {
                color: $colorPurpleDk;
                font-size: calcRems(28px);
                margin-bottom: calcRems(15px);
                
                @include bp(desktop) {
                    font-size: calcRems(38px);
                    margin-bottom: calcRems(35px);
                }
            }
        }
    }

    .learn-more {
        font-size: calcRems(16px);

        @include bp(desktop) {
            font-size: calcRems(18px);
        }
    }
}
</style>
