<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <h3 class="text-center">Sprint Backlog</h3>
        <v-divider class="secondary darken-4 my-3"></v-divider>
        <v-container>
          <v-row
            class="py-1 px-5"
            v-for="item in SBitems"
            :key="item.id"
            justify="center"
            draggable="true"
            @dragstart="dragStart"
          >
            <v-card class="accent border-radius-50">
              <v-col>
                <v-card-text class="pa-0" large>{{ item.content }}</v-card-text>
              </v-col>
            </v-card>
          </v-row>
        </v-container>
      </v-col>
      <v-divider vertical class="secondary darken-4"></v-divider>
      <v-col>
        <h3 class="text-center">Sprint</h3>
        <v-divider class="secondary darken-4 my-3"></v-divider>
        <v-row class="mx-4">
          <v-col cols="6" v-for="(item, index) in sprint" :key="index">
            <v-card width="70%" class="center accent" @dragover.prevent @drop.prevent="drop">
              <v-card-title class="justify-center subtitle-1">Sprint {{ item.id }}</v-card-title>
              <v-divider></v-divider>
              <v-card-title class="headline justify-center">3 items</v-card-title>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-btn height="100%" width="70%" class="center-btn accent">
              <v-icon class="display-3" large>mdi-plus</v-icon>
              <span class="display-1">Add</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("SprintBacklog", ["SBitems"]),
    ...mapState("Sprint", ["sprint"])
  },
  methods: {
    // dragStart: e => {
      
    // },
    // drop: e => {

    // }
  }
};
</script>

<style scoped>
.border-radius-50 {
  border-radius: 50px !important;
}
.center {
  margin-left: auto;
  margin-right: auto;
}
.center-btn {
  margin: 0 15%;
}
</style>