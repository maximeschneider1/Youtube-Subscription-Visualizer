<template>
  <v-content>
    <v-container fill-height fluid>
      <v-layout flex wrap>
      <v-row align="center"
      justify="center">
        <v-flex>
        <v-text> k</v-text>
          <v-subheader class="justify-center"
            >Developed with VueJS and Golang using OAuth2</v-subheader
          >
          <v-subheader class="justify-center"
            >This application is not yet registred as official Google
            Application</v-subheader
          >
          <v-subheader class="justify-center"
            >Oauth2 consent scope: read only Youtube account
            informations</v-subheader
          >
          <v-subheader class="justify-center">
          © 
            <a href="http://hello.maximeschneider.fr" id="internal-link"
              > Maxime Schneider, 2021</a
            ></v-subheader
          >
          <oauth class="justify-center"></oauth>
          <!--          <v-subheader class="justify-center">Source code is available at https://github.com/maximeschneider1/YoutubeApp</v-subheader>
-->
        </v-flex>
        </v-row>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Oauth from "../components/Oauth.vue";

export default {
  name: "Home",
  components: {
    Oauth,

    // HelloWorld
  },
};
</script>


<style scoped>
#oauth-container {
  background-color: blueviolet;
  max-width: 200px;
}

#internal-link {
  color: inherit; /* blue colors for links too */
}
</style>