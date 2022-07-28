<template>
    <div id="footer">
        <p>View source code on <a href="https://github.com/dylakim/portfolio" target="_blank">GitHub</a></p>
        <p><font-awesome-icon class="heart" :icon="faHeart" /> <a href="https://dyla.dev" title="Dyla Home" target="_blank">dyla.dev</a></p>
    </div>
</template>

<script>
    import {
        faHeart,
    } from '@fortawesome/free-solid-svg-icons';

    export default {
        data (){
            return {
                faHeart,
            };
        },
    }
</script>

<style lang="scss">
#footer {
    padding-top: calcRems(80px);

    p {
        font-size: calcRems(14px);
    }

    .heart {
        color: rgb(209, 0, 0);
    }
}
</style>
