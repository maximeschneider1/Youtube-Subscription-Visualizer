<template>
  <nav>
    <v-app-bar
      app
      clipped-left
      color="red"
      :elevation="0"
      dark
      class="teal lighten-2"
    >
      <v-toolbar-title><b><i>SUBSCROWD </i></b></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      :elevation="1"
      class="teal lighten-2"
      dark
      permanent
    >
      <div v-if = "this.$store.state.userLogged === 'false'">
        <v-list>
          <v-subheader class="justify-center"
            >Please connect to your Youtube account to launch this</v-subheader
          >
          <oauth />
        </v-list>
      </div>

      <div v-if = "this.$store.state.userLogged === 'true'">
        <v-list>
          <v-list-item
            v-for="(item, io) in this.items"
            :key="io"
            :to="item.url"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          
          <v-list-item>
            <v-list-item-icon>
              <v-icon @click="addTodo()">mdi-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <input
                type="text"
                v-model="todoText"
                class="no-outline"
                placeholder="Create a category"
              />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>

      <template v-slot:append>
        <div class="pa-2">
          <v-subheader class="justify-center">
            ©
            <a href="http://hello.maximeschneider.fr" id="internal-link"
              >Maxime Schneider, 2021</a
            ></v-subheader
          >
        </div>
      </template>
    </v-navigation-drawer>
  </nav>
</template>


<script>
import Oauth from "./Oauth";

export default {
  name: "Navigation",

  components: {
    Oauth,
  },

  data() {
    return {
      items: [
        { text: "Home", icon: "mdi-flag", url: "/" },
        { text: "Subscription", icon: "mdi-account", url: "/subscriptions" },
        { text: "Random", icon: "mdi-clock", url: "/random" },
      ],
      addIcon: "playlist_add",
      // isUserLogged: this.$store.state.userLogged,
    };
  },

  // data: () => ({
  //   item: 1,
  //   addIcon: "playlist_add",
  //   items: [
  //     { text: "Home", icon: "mdi-flag", url: "/" },
  //     { text: "Subscription", icon: "mdi-account", url: "/subscriptions" },
  //     { text: "Random", icon: "mdi-clock", url: "/random" },
  //   ],
  //   isUserLogged: this.$store.state.userLogged,

  //   // drawer: true
  // }),
  methods: {
    addTodo: function () {
      var newTodo = this.todoText.trim();
      
      if (!newTodo) {
        return;
      }
      this.items.push({ text: newTodo, icon: "mdi-pencil-plus" });
      this.todoText = "";
    },
  },
};

// new ({
// el : '#nav',
//     data: {
//         newItem : '',
//         menuItems: ["sub", "random"],
//     },
// })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.no-outline:focus {
  outline: none;
}

#internal-link {
  color: inherit; /* blue colors for links too */
}
/*#sidebar {*/
/*    !*position: absolute;*!*/
/*    height: 100%;*/
/*}*/
</style>
