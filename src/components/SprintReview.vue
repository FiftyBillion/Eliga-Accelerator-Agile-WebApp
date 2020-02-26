<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <h3 class="text-center">Sprint</h3>
        <v-divider class="secondary darken-4 my-3"></v-divider>
        <v-row class="mx-4">
          <v-col cols="6" v-for="item in sprint" :key="item.id">
            <v-card width="70%" class="center border-card" ripple>
              <v-card-title class="justify-center subtitle-1">{{ item.name }}</v-card-title>
              <v-divider></v-divider>
              <v-card-title class="headline justify-center">3 items</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-divider vertical class="secondary darken-4"></v-divider>
      <v-col>
        <h3 class="text-center">Product Backlog</h3>
        <v-divider class="secondary darken-4 my-3"></v-divider>
        <v-row class="py-1 px-5" v-for="(item, index) in SBitems" :key="index" justify="center">
          <v-card class="accent border-radius-50">
            <v-col>
              <v-card-text class="pa-0" large>{{ item.content }}</v-card-text>
            </v-col>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('Sprint', ['sprint'])
  },
  mounted() {
    this.$store.dispatch('Sprint/getSprint')
  }
}
</script>

<style scoped>
  .border-radius-50 {
  border-radius: 50px !important;
}
.center {
  margin-left: auto;
  margin-right: auto;
}
.border-card {
  border: #b7a57a 1px solid;
}
</style>