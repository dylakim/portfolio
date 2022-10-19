<template>
    <section class="clients">
        <h2>Clients</h2>
        <p>I've had the pleasure of working with many different brands over the last 7+ years. These are just a few.</p>

        <div class="clients__logos">
            <ClientLogo
                v-for="client in clients"
                :key="client.name"
                :imageFileName="client.image"
                :altText="client.name"
            />
        </div>

    </section>
</template>

<script>
    import clients from '../data/clients.json';
    import ClientLogo from './ClientLogo';

    export default {
        components: {
            ClientLogo,
        },

        data () {
            return {
                clients,
            };
        },
    }
</script>

<style lang="scss">
.clients {
    padding: 0 calcRems(80px);
    margin-bottom: calcRems(75px);

    @include bp(desktop) {
        margin: 0 auto calcRems(85px);
        max-width: calcRems(920px);
    }

    p {
        @include bp(desktop) {
            padding: 0;
            margin: auto;
            max-width: calcRems(720px);
        }
    }

    &__logos {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: calcRems(20px) 0;
        
        @include bp(desktop) {
            margin: calcRems(40px) 0;
        }
    }
}
</style>