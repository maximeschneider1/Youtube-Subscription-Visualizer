<template>
    <v-content>
        <v-container fill-height fluid>
            <v-layout wrap justify-center="center" align-center>
                <div>
                    <p>Please connect to use YSS app</p>
                    <Oauth></Oauth>
                </div>
            </v-layout>
        </v-container>
    </v-content>

</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'
    import Oauth from "./Oauth";
    export default {
        name: 'Default',
        components: {
            Oauth,
            // HelloWorld
        }
    }
</script>

<style scoped>
    /*#subscriptions {*/
    /*  position: absolute;*/
    /*}*/
</style>