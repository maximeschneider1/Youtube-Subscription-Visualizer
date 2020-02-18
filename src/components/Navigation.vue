<template>
    <div id="customNav">
        <v-toolbar >
            <v-toolbar-title>Youtube SubSearch</v-toolbar-title>


            <v-spacer></v-spacer>
<!--            <v-btn icon>-->
<!--            <v-icon>mdi-magnify</v-icon>-->
<!--        </v-btn>-->
<!--            <v-btn icon>-->
<!--                <v-icon>mdi-heart</v-icon>-->
<!--            </v-btn>-->

<!--            <v-btn icon>-->
<!--                <v-icon>mdi-dots-vertical</v-icon>-->
<!--            </v-btn>-->
            <oauth></oauth>
        </v-toolbar>

        <v-card class="m-auto" max-width="300"  tile>
            <v-list rounded>
<!--                <v-subheader>Welcome to YSS</v-subheader>-->

                <v-list-item-group v-model="item" color="primary">

                    <v-list-item v-for="(item, i) in items" :key="i" :to="item.url">

                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>

                    </v-list-item>

                </v-list-item-group>
            </v-list>
        </v-card>
    </div>
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
                { text: 'Subscription', icon: 'mdi-account' , url: '/about'},
                { text: 'Random', icon: 'mdi-clock' , url: '/random'},
            ],
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

</style>
