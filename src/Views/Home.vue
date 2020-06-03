<template>
  <v-content>
    <v-container fill-height fluid>
      <v-layout flex wrap>
        <v-flex>
          <v-subheader class="justify-center">Welcome to Youtube SubSearch</v-subheader>
          <v-subheader class="justify-center">Developped with VueJS and Golang using OAuth2</v-subheader>
          <v-subheader class="justify-center">The application is not registred as official Google Application</v-subheader>
          <v-subheader class="justify-center">The scope of the user's Oauth consent is only for reading Youtube account informations</v-subheader>
          <v-subheader class="justify-center">Source code is available at https://github.com/maximeschneider1/YoutubeApp</v-subheader>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {

  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>
