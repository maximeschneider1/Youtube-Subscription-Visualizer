<template>
  <v-content v-if = "isUserLogged=='true'">
    <v-container fluid grid-list-xl>
      <v-subheader>Your subscription of the day</v-subheader>
      <v-layout wrap justify-space-around>
        <v-flex >
          <v-card class="mx-auto" max-width="400" v-bind:href="results.URL" target="_blank" >
            <v-img
                    class="white--text align-end"
                    height="200px"
                    v-bind:src="results.Thumbnail"
            >
            </v-img>
            <v-card-title>{{results.Name}} </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
  <div v-else>
    <Default/>
  </div>
</template>

<script>
  import axios from 'axios';
  import Default from "../components/Default";

  export default {
    name: 'app',
    components: {Default},
    data() {

      return {
        results: '',
        isUserLogged: this.$store.state.userLogged,
      }

    },
    mounted () {
      if ((this.isUserLogged == "false")) {
        return
      }

      axios.get('http://localhost:8081/random',
      ).then(response => {
        this.results = response.data
        console.log(response)
        console.log(this.results)
      })
    },
  }

</script>