<template>
  <nav>
    <v-app-bar flat class="primary">
      <v-toolbar-title class="secondary--text headline">
        <span class="font-weight-light">Eliga Accelerator</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="mx-5">
        <v-img src="../assets/Eliga Accelerator LOGO (Final Version).png" max-height="50" max-width="50"></v-img>
      </span>
      <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app class="black">
      <v-list>
        <v-list-item v-for="link in links" :key='link.text' router :to="link.route">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { icon: 'mdi-speedometer', text: 'Dashboard', route: '/'},
        { icon: 'mdi-checkbox-multiple-blank', text: 'Product Backlog', route: '/productbacklog'},
        { icon: 'mdi-run', text: 'Sprint Backlog', route: '/sprintbacklog'},
        { icon: 'mdi-chart-bar', text: 'Burndown Chart', route: '/burndownchart'},
        { icon: 'mdi-view-list', text: 'Tasks', route: '/tasks'},
        { icon: 'mdi-account-multiple', text: 'People', route: '/people'}
      ]
    }
  },
}
</script>