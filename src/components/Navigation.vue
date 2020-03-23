<template>
    <nav>
        <v-app-bar
                app
                clipped-left
                color="red"
                :elevation=1 dark class="deep-purple accent-4">
            <v-toolbar-title>YOUTUBE<b><i>SUBSEARCH    </i></b></v-toolbar-title>
            <v-spacer></v-spacer>
            <oauth></oauth>
        </v-app-bar>
            <v-navigation-drawer
                    v-model="drawer"
                    app
                    clipped
                    :elevation=1 class="deep-purple accent-4"
                                 dark
                                 permanent>
                <v-list>
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
