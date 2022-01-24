<template>
  <h1>Ici</h1>
</template>

<script>
export default {

    name: "OauthRedirect",

    data() {
        return { 
            
        }
    },

    mounted() {
        console.log("Bien reçu capitaine", this.$route.params.token)
        this.$store.state.userLogged = "true"
        this.$store.state.JWToken = this.$route.params.token
        window.location.href = 'https://immense-shore-78585.herokuapp.com/#/';
        // window.location.href = 'http://localhost:8080/#/';
    },
    
}
</script>

<style>

</style>>