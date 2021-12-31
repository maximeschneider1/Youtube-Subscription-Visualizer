<template>
    <v-content>
        <v-container fill-height fluid>
            <v-layout wrap just y-center="center" align-center>
                <div>
                    <p>Please connect to use YSS app</p>
                    <Oauth></Oauth>
                </div>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    import Oauth from "./Oauth";
    export default {
        name: 'Default',
        components: {
            Oauth,
            // HelloWorld
        }
    }
</script>