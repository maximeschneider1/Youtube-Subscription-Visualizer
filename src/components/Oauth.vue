<template>

<div class="text-center" v-if = "isUserLogged==='false'">
        <v-btn rounded  large color="pink lighten-4" class="white--text" :href="posts">Connect</v-btn>
    </div>

    <div v-else>
        <v-menu down :offset-y="offset">
            <template v-slot:activator="{ on }">
                <v-btn block color="teal" rounded  v-on="on">
                    <v-icon>
                        {{ icon }}
                    </v-icon>
                </v-btn>
            </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="logOut"
          href="items.url"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    </div>
</template>

<script>
    import axios from 'axios';
    function setTimeForCookies (minutes) {
        var now = new Date();
        var time = now.getTime();

        time += minutes * 60 * 1000;
        now.setTime(time);
        return now;
    }

    function deleteCookieValue(name) {
        document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        document.cookie = "userLogged=false; expires=" + setTimeForCookies(30) + "; path=/";
        this.isUserLogged = this.$store.state.userLogged
    }

    export default {
        name : "Oauth",
        data() {
            return {
                posts: '',
                url:'/',
                isUserLogged: this.$store.state.userLogged,
                icon: 'mdi-account',
                errors: [], 
                offset: true, 
                items: [
                    { title: 'Log out' },
      ],
            }
        },
        // Fetches posts when the component is created.
        mounted() {
            this.isUserLogged = this.$store.state.userLogged,
            console.log("l'user", this.isUserLogged)
            axios.get(`https://salty-eyrie-42146.herokuapp.com/GoogleLogin`, )
                .then(response => {
                    // JSON responses are automatically parsed.
                    this.posts = response.data
                    console.log(response)
                })
                .catch(e => {
                    this.errors.push(e)
                })

        },
        updated() {
            this.isUserLogged = this.$store.state.userLogged
        },
        methods : {
            logOut: function () {
                deleteCookieValue("jwtToken")
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /*button {*/
    /*    width: 10%;*/
    /*    margin: 40px 0 0;*/
    /*    color: cadetblue;*/
    /*}*/
    /*a {*/
    /*    width: 10%;*/
    /*}*/
</style>