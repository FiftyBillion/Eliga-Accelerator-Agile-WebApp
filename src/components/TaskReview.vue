<template>
  <div>
    <v-row>
      <v-col offset="2" cols="3">
        <span>Content</span>
      </v-col>
      <v-col cols="2">
        <span>Assign To</span>
      </v-col>
      <v-col cols="1" class="pl-0">
        <span>Hours</span>
      </v-col>
      <v-col cols="1">
        <span>Status</span>
      </v-col>
      <v-col cols="2" class="ml-10 pl-10">
        <span>Date Completed</span>
      </v-col>
    </v-row>
    <v-divider class="secondary darken-4"></v-divider>
    <v-container class="scroll">
      <v-row v-for="item in task" :key="item.id">
        <v-col>
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
import { mapState } from "vuex";
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