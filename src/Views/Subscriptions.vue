<template>
  <v-content>
    <v-container fluid grid-list-xl>
      <h1>List of all your subs</h1>
      <v-layout wrap justify-space-around>
        <v-flex v-for="result in results" :key="result">
          <v-card class="mx-auto" max-width="400" v-bind:href="result.URL" target="_blank" >
            <v-img
                    class="white--text align-end"
                    height="200px"
                    v-bind:src="result.Thumbnail"
            >
            </v-img>
            <v-card-title>{{result.Name}} </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
    <!--  </v-list-item>-->

<!--</v-list-item-group>-->
<!--    <v-card-->
<!--            class="mx-auto"-->
<!--            max-width="400"-->
<!--    >-->
<!--      <v-img-->
<!--              class="white&#45;&#45;text align-end"-->
<!--              height="200px"-->
<!--              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"-->
<!--      >-->
<!--        <v-card-title>Top 10 Australian beaches</v-card-title>-->
<!--      </v-img>-->

<!--      <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>-->

<!--      <v-card-text class="text&#45;&#45;primary">-->
<!--        <div>Whitehaven Beach</div>-->

<!--        <div>Whitsunday Island, Whitsunday Islands</div>-->
<!--      </v-card-text>-->

<!--      <v-card-actions>-->
<!--        <v-btn-->
<!--                color="orange"-->
<!--                text-->
<!--        >-->
<!--          Share-->
<!--        </v-btn>-->

<!--        <v-btn-->
<!--                color="orange"-->
<!--                text-->
<!--        >-->
<!--          Explore-->
<!--        </v-btn>-->
<!--      </v-card-actions>-->
<!--    </v-card>-->





</template>

<script>
  import axios from 'axios';
  export default {
    name: 'app',
    data() {

      return {
        results: [

        ]
      }

    },
    created () {
        axios.get('http://localhost:8081/firstpage',
        ).then(response => {
          this.results = response.data
          console.log(response)
        })
      }}

</script>

<style scoped>
  /*#subscriptions {*/
  /*  position: absolute;*/
  /*}*/

</style>