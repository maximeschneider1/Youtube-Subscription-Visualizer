<template>
    <div>
            <v-btn block :href="posts">Connect</v-btn>
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