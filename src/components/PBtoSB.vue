<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <h3 class="text-center">Product Backlog</h3>
        <v-divider class="secondary darken-4 my-3"></v-divider>
        <v-row class="py-1 px-5" v-for="(item, index) in PBitems" :key="index" justify="center">
          <v-card class="border-golden border-radius-50" ripple>
            <v-col>
              <v-card-text class="pa-0" large>{{ item.content }}</v-card-text>
            </v-col>
          </v-card>
        </v-row>
      </v-col>
      <v-divider vertical class="secondary darken-4"></v-divider>
      <v-col>
        <h3 class="text-center">Sprint Backlog</h3>
        <v-divider class="secondary darken-4 my-3"></v-divider>
        <v-row class="py-1 px-5" v-for="(item, index) in SBitems" :key="index" justify="center">
          <v-card class="accent border-radius-50">
            <v-col>
              <v-card-text class="pa-0" large>{{ item.content }}</v-card-text>
            </v-col>
          </v-card>
        </v-row>
        <v-row class="py-1" justify="center">
          <v-btn rounded class="btn-border">
            <v-icon>mdi-plus</v-icon>
            <span>Add</span>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("ProductBacklog", ["PBitems"]),
    ...mapState("SprintBacklog", ["SBitems"])
  }
};
</script>

<style scoped>
  .border-golden {
    border: #b7a57a solid 1px;
  }
  .border-radius-50 {
    border-radius: 50px !important;
  }
  .btn-border {
    border: #b7a57a 1px solid;
  }
</style>