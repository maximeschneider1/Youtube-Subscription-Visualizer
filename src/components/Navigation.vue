<template>
    <nav>
        <v-toolbar :elevation=1 dark class="deep-purple accent-4">
            <v-spacer></v-spacer>
<!--            <v-btn flat>SIGN IN</v-btn>-->
            <oauth></oauth>
        </v-toolbar>
            <v-navigation-drawer clipped app :elevation=1 class="deep-purple accent-4"
                                 dark
                                 permanent>
                <v-list>
                    <v-subheader>YOUTUBE <b><i>SUBSEARCH</i></b></v-subheader>

                    <v-list-item v-for="(item, io) in items" :key="io" :to="item.url">
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.text }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>

                <template v-slot:append>
                    <div class="pa-2">
<!--                        <oauth></oauth>-->
                        <v-subheader>VERSION 1</v-subheader>
                    </div>
                </template>
            </v-navigation-drawer>
    </nav>
</template>


<script>
    import Oauth from "./Oauth";

    export default {
        name: 'Navigation',

        components: {
            // HelloWorld,
            Oauth,
        },

        data: () => ({
            item: 1,
            items: [
                { text: 'Home', icon: 'mdi-flag', url: '/'},
                { text: 'Subscription', icon: 'mdi-account' , url: '/subscriptions'},
                { text: 'Random', icon: 'mdi-clock' , url: '/random'},
            ],
            // drawer: true

        }),
    }



    // new ({
    // el : '#nav',
    //     data: {
    //         newItem : '',
    //         menuItems: ["sub", "random"],
    //     },
    // })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /*#sidebar {*/
    /*    !*position: absolute;*!*/
    /*    height: 100%;*/
    /*}*/

</style>
