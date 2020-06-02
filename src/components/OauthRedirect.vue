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
    },
    
}
</script>

<style>

</style>>