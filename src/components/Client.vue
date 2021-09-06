<template>
    <div class="client">
        <img
            :src="require(`@/assets/clients/${imageFileName}`)"
            :alt="altText"
        >
    </div>
</template>

<script>
    export default {
        props: {
            imageFileName: {
                type: String,
                required: true,
            },
            altText: {
                type: String,
                required: true,
            }
        },
    }
</script>

<style lang="scss">
.client {
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: calcRems(120px);
    width: 40%;
    
    @include bp(desktop) {
        width: 30%;
    }

    img {
        width: 85%;

        @include bp(desktop) {
            width: 65%;
        }
    }
}
</style>