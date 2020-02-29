<template>
  <div>
    <v-btn @click.stop="dialog=true" rounded class="btn-border">
      <v-icon>mdi-plus</v-icon>
      <span>Add</span>
    </v-btn>
    <v-dialog v-model="dialog" max-width="40%">
      <v-card color="#1f1f1f">
        <v-card-title>
          <h3>New Task</h3>
        </v-card-title>
        <v-card-text>
          <v-form class="px-3">
            <v-textarea
              prepend-icon="mdi-view-list"
              color="accent"
              outlined
              auto-grow
              row-height="1"
              label="Content"
              v-model="content"
              class="pt-5"
            ></v-textarea>
            <v-row justify="space-around">
              <v-col align-self="center" offset="9">
                <v-text-field label="Hours" color="accent" suffix="hr" v-model="hours"></v-text-field>
              </v-col>
            </v-row>
            <div class="text-right">
              <v-btn class="primary" @click="addTK()">Submit</v-btn>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {
      dialog: false,
      content: "",
      hours: ""
    };
  },
  computed: {
    ...mapState('SprintBacklog', ['currentSprintID']),
    ...mapState('ProductBacklog', ['currentPBID'])
  },
  methods: {
    ...mapActions('Task', ['addTask']),
    addTK() {
        var task = { sprintbacklogID: this.currentSprintID, productbacklogID: this.currentPBID, content: this.content, hours: this.hours}
        this.addTask(task)
        this.content = ''
        this.hours = ''
        this.dialog = false
    }
  }
};
</script>

<style>
.btn-border {
  border: #b7a57a 1px solid;
}
</style>