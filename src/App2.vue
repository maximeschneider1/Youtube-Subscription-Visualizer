<template>
  <v-app>
    <h1>Salut</h1>
    <navigation></navigation>
    <oauth></oauth>
  </v-app>

</template>

<script>
  // import HelloWorld from './components/HelloWorld';
  import Navigation from "./components/Navigation";
  import Oauth from "./components/Oauth";

  export default {
    name: 'App',

    components: {
      // HelloWorld,
      Navigation,
      Oauth,
    },

  };
</script>
