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
                    <v-list-item>
                        <v-list-item-icon>
<!--                            <v-btn v-on:click="addTodo()" dark class="btn btn-primary btn-sm ">-->
                                <v-icon v-on:click="addTodo()">mdi-plus</v-icon>
<!--                            </v-btn>-->
                        </v-list-item-icon>

                        <v-list-item-content>
                            <input type="text" v-model="todoText" class="no-outline" placeholder="Create a category" />
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
            addIcon: 'playlist_add',
            items: [
                { text: 'Home', icon: 'mdi-flag', url: '/'},
                { text: 'Subscription', icon: 'mdi-account' , url: '/subscriptions'},
                { text: 'Random', icon: 'mdi-clock' , url: '/random'},
            ],
            // drawer: true
        }
        ),
        methods: {
            addTodo: function() {
                var newTodo = this.todoText.trim();
                if (!newTodo) {return;}
                this.items.push(
                    {text: newTodo, icon:'mdi-pencil-plus'}
                );
                this.todoText = '';
            }
    }
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
    .no-outline:focus {
        outline: none;
    }
    /*#sidebar {*/
    /*    !*position: absolute;*!*/
    /*    height: 100%;*/
    /*}*/

</style>
