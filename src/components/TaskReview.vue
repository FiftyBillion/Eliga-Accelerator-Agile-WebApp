<template>
  <div>
    <v-row>
      <v-col offset="1" cols="4" class="pl-10">
        <span>Content</span>
      </v-col>
      <v-col cols="2" class="pl-10 ml-8">
        <span>Assign To</span>
      </v-col>
      <v-col cols="1" class="pl-2">
        <span>Hours</span>
      </v-col>
      <v-col cols="1">
        <span>Status</span>
      </v-col>
      <v-col cols="2" class="ml-3 pl-10">
        <span>Date Completed</span>
      </v-col>
    </v-row>
    <v-divider class="secondary darken-4"></v-divider>
    <v-container class="scroll">
      <v-row v-for="item in task" :key="item.id">
        <v-col cols="1" align-self="center" class="px-0">
          <v-btn rounded class="red darken-4" @click="deleteTask(item.id)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-col>
        <v-col class="pl-0">
          <v-card>
            <v-row>
              <v-col cols="5">
                <v-card-text>{{item.content}}</v-card-text>
              </v-col>
              <v-col cols="2" align-self="center">
                <v-chip>{{item.assignToName}}</v-chip>
              </v-col>
              <v-col cols="1" align-self="center">
                <v-chip>{{item.hours}} hr</v-chip>
              </v-col>
              <v-col cols="2" align-self="center">
                <v-chip :class="`${item.status}`">{{item.status}}</v-chip>
              </v-col>
              <v-col align-self="center">
                <DateCompletedPopup v-if="item.dateCompleted === null" :taskid="item.id"></DateCompletedPopup>
                <v-chip v-else>{{item.dateCompleted}}</v-chip>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import DateCompletedPopup from "../components/DateCompletedPopup";
export default {
  computed: {
    ...mapState("Task", ["task"])
  },
  mounted() {
    this.$store.dispatch("Task/getTask");
  },
  components: {
    DateCompletedPopup
  },
  methods: {
    ...mapActions("Task", ["removeTaskReview"]),
    deleteTask(taskid) {
      this.removeTaskReview(taskid)
    }
  }
};
</script>

<style scope>
.scroll {
  overflow-y: scroll;
  height: 66vh;
}
.Incomplete {
  background-color: darkred !important;
}
.Completed {
  background-color: green !important;
}
</style>