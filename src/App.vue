<template>
  <v-app>
    <v-content>
      <Navbar />
      <router-view class="mx-4 mb-4"></router-view>
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
};
</script>
