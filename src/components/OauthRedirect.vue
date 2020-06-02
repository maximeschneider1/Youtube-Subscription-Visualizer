<template>
  <h1>Ici</h1>
</template>

<script>
export default {

    name: "OauthRedirect",

    data() {
        return { 
            token: this.$route.params.token,
        }
    },

    mounted() {
        console.log("Bien reçu capitaine", this.token)
        this.$store.state.userLogged = "true"
        this.$store.state.JWToken = this.token
    },
    
}
</script>

<style>

</style>>