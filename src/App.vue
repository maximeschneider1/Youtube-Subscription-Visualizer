<template>
  <v-app>

    <navigation></navigation>
<!--    <oauth></oauth>-->
    <router-view></router-view>
  </v-app>

</template>

<script>
  import Navigation from "./components/Navigation";

  function getCookieValue(a) {
    var b = document.cookie.match('(^|[^;]+)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
  }

  export default {
    name: 'App',

    components: {
      Navigation,
    },
    mounted() {
      var isUserLogged = getCookieValue("userLogged");
      if ((isUserLogged == "true")) {
        console.log("User is connected")
        this.$store.state.userLogged = isUserLogged
      } else {
        console.log("you have to connect to continue")
        return
      }
    }

  };
</script>
