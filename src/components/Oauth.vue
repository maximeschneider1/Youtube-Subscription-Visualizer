<template>
    <div>
        <div class="my-2">
            <v-btn :href="posts">Connect</v-btn>
        </div>


        <!--        <button v-text="posts"></button>-->
        <!--        <a :href="posts">Connect</a>-->
        <!--        <ul v-if="posts && posts.length ">-->
        <!--            <li v-for="post of posts" v-bind:key="post">-->
        <!--                <p><strong>{{post}}</strong></p>-->
        <!--            </li>-->
        <!--        </ul>-->

        <ul v-if="errors && errors.length">
            <li v-for="error of errors" v-bind:key="error">
                {{error.message}}
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name : "Oauth",
        data() {
            return {
                posts: [],
                errors: []
            }
        },

        // Fetches posts when the component is created.
        mounted() {
            axios.get(`http://127.0.0.1:8081/GoogleLogin`, )
                .then(response => {
                    // JSON responses are automatically parsed.
                    this.posts = response.data
                })
                .catch(e => {
                    console.log('salut')
                    this.errors.push(e)
                })

        },

        clicked(){
            axios.get(`http://127.0.0.1:8081/GoogleLogin`, )
                .then(response => {
                    // JSON responses are automatically parsed.
                    this.posts = response.data
                })
                .catch(e => {
                    console.log('salut')
                    this.errors.push(e)
                })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    button {
        width: 10%;
        margin: 40px 0 0;
        color: cadetblue;
    }
    a {
        width: 10%;
    }
</style>