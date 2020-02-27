<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <h3 class="text-center">Product Backlog (Unassigned)</h3>
        <v-divider class="secondary darken-4 my-3"></v-divider>
        <v-container class="scroll">
          <v-row
            class="py-1 px-5"
            v-for="item in unassignPB"
            :key="item.id"
            justify="center"
            :pbid="item.id"
            draggable="true"
            @dragstart="start"
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
        <v-container class="scroll">
          <v-row class="mx-4">
            <v-col cols="6" v-for="item in sprint" :key="item.id">
              <v-card width="70%" class="center accent">
                <v-card-title
                  class="justify-center subtitle-1 wordBreak"
                  @dragover.prevent
                  @drop="drop"
                  :sprintid="item.id"
                >{{ item.name }}</v-card-title>
                <v-card-subtitle class="text-center pb-0 pt-4">Start Date: {{item.startDate}}</v-card-subtitle>
                <v-card-subtitle class="text-center pt-0">Due Date: {{item.dueDate}}</v-card-subtitle>
                <v-divider></v-divider>
                <v-card-title class="justify-center">
                    <v-btn @click="removeS(item)">
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                </v-card-title>
              </v-card>
            </v-col>
            <v-col cols="6">
              <SprintPopup></SprintPopup>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import SprintPopup from '../components/SprintPopup'

export default {
  data() {
    return {
      dragPBId: "",
      dropSprintId: ""
    };
  },
  components: {
      SprintPopup
  },
  computed: {
    ...mapState("ProductBacklog", ["unassignPB"]),
    ...mapState("Sprint", ["sprint"])
  },
  mounted() {
    this.$store.dispatch("Sprint/getSprint");
    this.$store.dispatch("ProductBacklog/getUnassignPB");
  },
  methods: {
    ...mapActions("ProductBacklog", ["assignSID"]),
    ...mapActions("Sprint", ["removeSprint"]),
    start(evt) {
      this.dragPBId = evt.target.attributes.pbid.value;
    },
    drop(evt) {
      this.dropSprintId = evt.target.attributes.sprintid.value;
      this.assignSID({pbid: this.dragPBId, sprintid: this.dropSprintId});
    },
    removeS(sprint) {
        this.removeSprint(sprint)
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
.center-btn {
  margin: 0 15%;
}
.wordBreak {
  word-break: keep-all;
}
.scroll {
  overflow-y: scroll;
  height: 55vh;
}
</style>