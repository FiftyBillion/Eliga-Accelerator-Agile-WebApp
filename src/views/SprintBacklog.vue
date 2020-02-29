<template>
  <div class="sprint-backlog">
    <v-container>
      <h1>Sprint Backlog</h1>
    </v-container>

    <v-container>
      <v-row>
        <v-col cols="2">
          <h3 class="text-center">Sprint</h3>
          <v-divider class="secondary darken-4 my-3"></v-divider>
          <v-container class="scroll">
          <v-row class="mx-4">
            <v-col cols="12" v-for="item in sprint" :key="item.id">
              <v-card width="100%" class="center border-card" ripple @click="getThePB(item)">
                <v-card-title class="justify-center subtitle-1 wordBreak">{{ item.name }}</v-card-title>
                <v-card-subtitle class="text-center pb-0 pt-4">Start Date:</v-card-subtitle>
                <v-card-subtitle class="text-center pb-0 pt-0">{{item.startDate}}</v-card-subtitle>
                <v-card-subtitle class="text-center pb-0 pt-0">Due Date:</v-card-subtitle>
                <v-card-subtitle class="text-center pt-0">{{item.dueDate}}</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
          </v-container>
        </v-col>
        <v-divider vertical class="secondary darken-4"></v-divider>
        <v-col cols="5">
          <h3 class="text-center">Product Backlog</h3>
          <v-divider class="secondary darken-4 my-3"></v-divider>
          <v-row class="py-1 px-5" v-for="item in PBinSprint" :key="item.id" justify="center">
            <v-card class="accent border-radius-50">
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
          <v-row class="py-1 px-5" v-for="item in SBinSprint" :key="item.id" justify="center">
            <v-card class="accent border-radius-50">
              <v-col>
                <v-card-text class="pa-0" large>{{ item.content }}</v-card-text>
              </v-col>
            </v-card>
          </v-row>
          <v-row class="py-1" justify="center">
          <v-btn rounded class="btn-border" v-if="currentSID != ''">
            <v-icon>mdi-plus</v-icon>
            <span>Add</span>
          </v-btn>
        </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<!--
<template>
  <div class="sprint-backlog">
    <v-container>
      <h1>Sprint Backlog</h1>
    </v-container>

    <v-container>
      <v-row>
        <v-col>
          <v-btn
            class="btn-border center-btn"
            rounded
            active-class="accent"
            large
            route
            :to="{name: 'pbtosb'}"
          >
            <span class="pr-1">Sprint</span>
            <v-icon>mdi-arrow-right</v-icon>
            <span class="pl-1">Sprint Backlog</span>
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            class="btn-border center-btn"
            rounded
            active-class="accent"
            large
            route
            :to="{name: 'sbtosprint'}"
          >
            <span class="pr-1">Sprint Backlog</span>
            <v-icon>mdi-arrow-right</v-icon>
            <span class="pl-1">Sprint</span>
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            class="btn-border center-btn"
            rounded
            active-class="accent"
            large
            route
            :to="{name: 'sprint'}"
          >
            <span>Sprints</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <router-view></router-view>
  </div>
</template>
-->
<script>
import { mapState,mapActions } from 'vuex';
// @ is an alias to /src

export default {
  name: "sprint-backlog",
  data() {
    return {
      currentSID: ''
    }
  },
  computed: {
    ...mapState('Sprint', ['sprint']),
    ...mapState("ProductBacklog", ["PBinSprint"]),
    ...mapState('SprintBacklog', ['SBinSprint'])
  },
  mounted() {
    this.$store.dispatch('Sprint/getSprint'),
    this.$store.dispatch('SprintBacklog/getSB')
  },
  methods: {
    ...mapActions("ProductBacklog", ["getPBInSprint"]),
    ...mapActions("SprintBacklog", ["getSBInSprint"]),
    getThePB(sprint) {
      this.getPBInSprint(sprint)
      this.getSBInSprint(sprint)
      this.currentSID = sprint.id
    }
  }
};
</script>

<style scoped>
.btn-border {
  border: #b7a57a 1px solid;
}
.v-btn:not(.v-btn--text):not(.v-btn--outlined).v-btn--active:before {
  opacity: 0;
}
.center-btn {
  margin: 0 25%;
}
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
    height: 63vh;
}
.wordBreak {
  word-break: keep-all;
}
</style>