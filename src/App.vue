<template>
  <v-app>
    <v-content>
      <Navbar />
      <router-view class="mx-4 mb-4"></router-view>
      <v-btn @click="logout" v-if="this.$store.state.userIsAuthorized">Logout</v-btn>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: { Navbar },
  data: () => ({

  }),
methods:{
  logout(){
    this.$store.dispatch('auth0Logout');
  }
},
beforeCreate(){

}
};
</script>
