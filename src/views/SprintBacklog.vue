<template>
  <div class="sprint-backlog">
    <v-container>
      <v-row>
        <v-col cols="3">
          <h1>Sprint Backlog</h1>
        </v-col>
        <v-col cols="2" align-self="center">
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn color="accent" v-on="on">Choose Sprint</v-btn>
            </template>
            <v-list>
              <v-list-item three-line v-for="item in sprint" :key="item.id" @click="getThePB(item)">
                <v-list-item-content>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
                <v-list-item-subtitle>Start Date: {{ item.startDate}}</v-list-item-subtitle>
                <v-list-item-subtitle>Due Date: {{ item.dueDate}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
        <v-col align-self="center">
          <h4>Current Sprint: <span class="title" v-if="currentSprintName != ''">"{{ currentSprintName }}"</span></h4>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col cols="6">
          <h3 class="text-center">User Story</h3>
          <v-divider class="secondary darken-4 my-3"></v-divider>
          <v-container class="scroll">
          <v-row class="py-1 px-5" v-for="item in PBinSprint2" :key="item.id" justify="center">
            <v-card class="border-card border-radius-50" ripple @click="getTheTask(item)" :class="{ active: active_pb == item.id}">
              <v-col>
                <v-card-text class="pa-0" large>{{ item.content }}</v-card-text>
              </v-col>
            </v-card>
          </v-row>
          </v-container>
        </v-col>
        <v-divider vertical class="secondary darken-4"></v-divider>
        <v-col>
          <h3 class="text-center">Task</h3>
          <v-divider class="secondary darken-4 my-3"></v-divider>
          <v-container class="scroll">
          <v-row class="py-1 px-5" v-for="item in taskInPB" :key="item.id" justify="center">
            <v-col>
            <v-card class="accent border-radius-50">
              <v-container class="py-0">
              <v-row>
              <v-col cols="9" class="pr-0" align-self="center">
                <v-card-text class="pa-0" large>
                  {{ item.content }}
                </v-card-text>
              </v-col>
              <v-col class="pr-0" align-self="center">
                <v-btn rounded @click="deleteTask(item.id)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-col>
              </v-row>
              </v-container>
            </v-card>
            </v-col>
            <v-col cols="2">
              <v-row justify="center">
                <v-chip>{{item.hours}} hr</v-chip>
              </v-row>
              <v-row>
                <v-chip :class="`${item.status}`">{{item.status}}</v-chip>
              </v-row>
            </v-col>
          </v-row>
          <v-row class="py-1" justify="center">
            <NewTaskPopup v-if="currentPBID != 0"></NewTaskPopup>
          </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import NewTaskPopup from '../components/NewTaskPopup'

export default {
  name: "sprint-backlog",
  data() {
    return {
    }
  },
  components: {
    NewTaskPopup
  },
  computed: {
    ...mapState("ProductBacklog", ["PBinSprint2", "currentPBID", "active_pb"]),
    ...mapState("Sprint", ["sprint"]),
    ...mapState("SprintBacklog", ['currentSprintName']),
    ...mapState("Task", ['taskInPB'])
  },
  mounted() {
    this.$store.dispatch("Sprint/getSprint")
    this.$store.dispatch("SprintBacklog/getSB")
    this.$store.dispatch("Task/getTask")
  },
  methods: {
    ...mapActions("ProductBacklog", ["getPBInSprint2", "setCurrentPBID", "resetCurrentPBID", "setActivePB"]),
    ...mapActions("SprintBacklog", ["setCurrentSprintName"]),
    ...mapActions("Task", ["getTaskInPB", "resetTaskInPB", "removeTask"]),
    getThePB(sprint) {
      this.getPBInSprint2(sprint);
      this.setCurrentSprintName(sprint)
      this.resetTaskInPB();
      this.resetCurrentPBID();
    },
    getTheTask(pb) {
      this.setCurrentPBID(pb)
      this.getTaskInPB(pb)
      this.setActivePB(pb.id)
    },
    deleteTask(taskID) {
      this.removeTask(taskID)
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
.active {
  background-color: #85754d;
}
.Incomplete {
  background-color: darkred !important;
}
.Completed {
  background-color: green !important;
}
.scroll {
  overflow-y: scroll;
  height: 60vh;
}
</style>