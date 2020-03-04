<template>
  <nav>
    <v-app-bar app flat class="primary">
      <v-app-bar-nav-icon class="font-weight-light" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="secondary--text headline">
        <span class="font-weight-light">Eliga Accelerator</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on" class="font-weight-light">
            <v-icon left>mdi-chevron-down</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(link,idx) in links" :key="idx" :to="link.route">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <span>
        <v-img src="../assets/EligaLogo.png" max-height="50" max-width="50"></v-img>
      </span>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="black">
      <v-container>
        <v-row>
          <v-col class="mx-5">
            <v-avatar>
              <v-img
                :src="profilepicture"
              ></v-img>
            </v-avatar>
            <span class="ml-5">{{profilename}}</span>
          </v-col>
        </v-row>
      </v-container>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append v-if="this.$store.state.userIsAuthorized">
        <div class="pa-10">
          <v-btn block color="red darken-4" @click="logout">
            <span>Sign Out</span>
            <v-icon right>mdi-exit-to-app</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      drawer: true,
      links: [
        { icon: "mdi-speedometer", text: "Dashboard", route: "/" },
        {
          icon: "mdi-checkbox-multiple-blank",
          text: "Product Backlog",
          route: "/productbacklog"
        },
        { icon: "mdi-all-inclusive", text: "Sprint Planning", route: "/sprintplanning" },
        { icon: "mdi-run", text: "Sprint Backlog", route: "/sprintbacklog" },
        { icon: "mdi-view-list", text: "Tasks", route: "/tasks" },
        {
          icon: "mdi-chart-bar",
          text: "Burndown Chart",
          route: "/burndownchart"
        },
        { icon: "mdi-account-multiple", text: "People", route: "/people" }
      ],
      profilename: '',
      profilepicture: ''
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('auth0Logout')
    },
    getdata(){
      this.profilename = localStorage.getItem('profilename')
      this.profilepicture = localStorage.getItem('profilepicture')
    }
    
  },
  computed:{
    ...mapState(['profile'])
  },
  mounted() {
    this.getdata()
  }
}
</script>