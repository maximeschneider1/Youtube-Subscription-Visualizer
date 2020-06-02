<template>
  <v-content v-if = "isUserLogged=='true'">
  <OauthRedirect></OauthRedirect>
    <v-container fluid grid-list-xl dark>
      <v-subheader>List of all your subs</v-subheader>
      <v-layout wrap justify-space-around>
        <v-flex v-for="(result, idx) in results" :key="idx">
          <v-card class="mx-auto deep-purple accent-4" width="240px" dark v-bind:href="result.URL" target="_blank" >
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
      <v-layout row wrap>

        <v-row align="center" justify="space-around">
          <div v-if = "prevToken===''">
            <v-btn @click.native="prevSubs()" rounded class=" deep-purple accent-4 white--text bottom-row" x-large disabled>Previous</v-btn>
          </div>
          <div v-else>
            <v-btn @click.native="prevSubs()" rounded class=" deep-purple accent-4 white--text bottom-row" x-large >Previous</v-btn>
          </div>

          <div v-if = "nextToken===''">
            <v-btn @click.native="nextSubs()" rounded class=" deep-purple accent-4 white--text bottom-row" x-large disabled>Next</v-btn>
          </div>
          <div v-else>
            <v-btn @click.native="nextSubs()" rounded class=" deep-purple accent-4 white--text bottom-row" x-large>Next</v-btn>
          </div>
        </v-row>


      </v-layout>
    </v-container>
  </v-content>
  <div v-else>
    <OauthRedirect/>
    <Default/>
  </div>
</template>

<script>
  import axios from 'axios';
  import Default from "../components/Default";
  import OauthRedirect from "../components/OauthRedirect"

  function getCookieValue(a) {
    var b = document.cookie.match('(^|[^;]+)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
  }

  export default {
    name: 'myNav',
    components: {
      Default, 
      OauthRedirect
      },
    data() {
// counties: []
      return {
        results: [
        ],
        pagination: {
          page: 1,
          total: '',
          perPage: 5,
          visible: 5
        },
        nextToken : '',
        prevToken : '',
        isUserLogged: this.$store.state.userLogged,
      }
    },
    methods : {
      nextSubs() {
        axios.get('https://salty-eyrie-42146.herokuapp.com/subscriptions', {
                  headers: {
                    'content-Type': 'application/json',
                    "Accept": "/",
                    // "jwtToken": getCookieValue("jwtToken"),
                    "jwtToken": this.$store.state.userLogged,
                    "nextPageToken" : this.nextToken,
                    "prevPageToken" : this.prevToken,
                  },
                },
        ).then(response => {
          console.log(response)
          this.results = response.data.Subscriptions
          this.prevToken = response.data.PrevPageToken
          this.nextToken = response.data.NextPageToken
          this.pagination.total = response.data.TotalResults
          this.pagination.perPage = response.data.ResultPerPage
        })
      },
      prevSubs() {
        console.log(this.nextToken)
        console.log(this.prevToken)
        axios.get('https://salty-eyrie-42146.herokuapp.com/subscriptions', {
                  headers: {
                    'content-Type': 'application/json',
                    "Accept": "/",
                    // "jwtToken": getCookieValue("jwtToken"),
                    "jwtToken": this.$store.state.userLogged,
                    "prevPageToken" : this.prevToken,
                  },
                },
        ).then(response => {
          console.log(response)
          this.results = response.data.Subscriptions
          this.prevToken = response.data.PrevPageToken
          this.nextToken = response.data.NextPageToken
          this.pagination.total = response.data.TotalResults
          this.pagination.perPage = response.data.ResultPerPage
        })
      },
    },
    mounted () {
      if ((this.isUserLogged == "false")) {
        return
      }
      axios.get('https://salty-eyrie-42146.herokuapp.com/subscriptions', {
                headers: {
                  'content-Type': 'application/json',
                  "Accept": "/",
                  // "jwtToken": getCookieValue("jwtToken"),
                  "jwtToken": this.$store.state.JWToken,
                },
              },
      ).then(response => {
        console.log(response)
         getCookieValue("jwtToken")
        this.results = response.data.Subscriptions
        this.nextToken = response.data.NextPageToken
        this.pagination.total = response.data.TotalResults
        this.pagination.perPage = response.data.ResultPerPage
      })
    },
  }
</script>

<style scoped>
  /*#subscriptions {*/
  /*  position: absolute;*/
  /*}*/

  .bottom-row {
    margin-top: 20%;
  }

</style>



<!--          <v-pagination-->
<!--                  circle-->
<!--                  @click.native="nextSubs()"-->
<!--                  v-model="pagination.page"-->
<!--                  :length="(pagination.total / pagination.perPage) >> 0"-->
<!--                  :total-visible="7"-->
<!--          />-->