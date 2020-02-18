<template>
  <v-app>

    <navigation></navigation>
<!--    <oauth></oauth>-->
    <router-view></router-view>
  </v-app>

</template>

<script>
  // import HelloWorld from './components/HelloWorld';
  import Navigation from "./components/Navigation";
  // import Oauth from "./components/Oauth";

  export default {
    name: 'App',

    components: {
      // HelloWorld,
      Navigation,
      // Oauth,
    },

  };
</script>
