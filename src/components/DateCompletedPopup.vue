<template>
  <div>
    <v-btn @click.stop="dialog=true" class="center-btn primary">
      <span>Pick a date</span>
    </v-btn>
    <v-dialog v-model="dialog" max-width="40%">
      <v-card color="#1f1f1f">
        <v-card-title>
          <h3>Set Complete Date</h3>
        </v-card-title>
        <v-card-text>
          <v-form class="px-3">
            <v-row>
              <v-col cols="6">
                <v-menu
                  v-model="menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="dateComplete"
                      label="Date Completed"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="dateComplete" @input="menu = false"></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
            <div class="text-right">
              <v-btn class="primary" @click="setDate()">Submit</v-btn>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    taskid: Number
  },
  data() {
    return {
      dialog: false,
      dateComplete: "",
      menu: false
    };
  },
  methods: {
    ...mapActions('Task', ['setDateCompleted']),
    setDate() {
      this.setDateCompleted({taskid: this.taskid, dateCompleted: this.dateComplete})
      this.dialog = false
    }
  }
};
</script>