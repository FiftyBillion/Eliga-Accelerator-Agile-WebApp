<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <h3 class="text-center">Sprint</h3>
        <v-divider class="secondary darken-4 my-3"></v-divider>
        <v-container class="scroll">
        <v-row class="mx-4">
          <v-col cols="6" v-for="item in sprint" :key="item.id">
            <v-card width="70%" class="center border-card" ripple @click="getThePB(item)">
              <v-card-title class="justify-center subtitle-1 wordBreak">{{ item.name }}</v-card-title>
              <v-card-subtitle class="text-center pb-0 pt-4">Start Date: {{item.startDate}}</v-card-subtitle>
              <v-card-subtitle class="text-center pt-0">Due Date: {{item.dueDate}}</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
        </v-container>
      </v-col>
      <v-divider vertical class="secondary darken-4"></v-divider>
      <v-col>
        <h3 class="text-center">Product Backlog</h3>
        <v-divider class="secondary darken-4 my-3"></v-divider>
        <v-container class="scroll">
        <v-row class="py-1 px-5" v-for="item in PBinSprint" :key="item.id" justify="center">
          <v-card class="accent border-radius-50">
            <v-col>
              <v-card-text class="pa-0" large>{{ item.content }}</v-card-text>
            </v-col>
          </v-card>
        </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("Sprint", ["sprint"]),
    ...mapState("ProductBacklog", ["PBinSprint"])
  },
  mounted() {
    this.$store.dispatch("Sprint/getSprint");
  },
  methods: {
    ...mapActions("ProductBacklog", ["getPBInSprint"]),
    getThePB(sprint) {
      this.getPBInSprint(sprint);
    }
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
.border-card {
  border: #b7a57a 1px solid;
}
.scroll {
    overflow-y: scroll;
  height: 55vh;
}
.wordBreak {
  word-break: keep-all;
}
</style>