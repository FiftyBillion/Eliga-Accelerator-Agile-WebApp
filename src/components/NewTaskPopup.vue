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
              :error-messages="contentErrors"
              class="pt-5"
              required
              @input="$v.content.$touch()"
              @blur="$v.content.$touch()"
            ></v-textarea>
            <v-row justify="space-around">
              <v-col align-self="center" offset="9">
                <v-text-field label="Hours" color="accent" suffix="hr" v-model="hours"
                :error-messages="hoursErrors"
                required
                @input="$v.hours.$touch()"
                @blur="$v.hours.$touch()"
                ></v-text-field>
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
import {required, minLength, maxLength, between} from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      dialog: false,
      content: "",
      hours: ""
    };
  },
  validations:{
    content:{
        required,
        minLength: minLength(3),
        maxLength: maxLength(100)
    },
    hours:{
        required,
        between: between(0,1000)
      }
  },
  watch: {
    //if dialog change, this will run
    dialog() {
      if(this.dialog == false) {
        this.$v.$reset()
      }
    }
  },
  computed: {
    ...mapState('SprintBacklog', ['currentSprintID']),
    ...mapState('ProductBacklog', ['currentPBID']),
    contentErrors () {
        const errors = []
        if (!this.$v.content.$dirty) return errors
        !this.$v.content.minLength && errors.push('Content must be at least 3 characters long')
        !this.$v.content.maxLength && errors.push('Content must be at most 100 characters long')
        !this.$v.content.required && errors.push('Content is required.')
        return errors
      },
    hoursErrors () {
        const errors = []
        if (!this.$v.hours.$dirty) return errors
        !this.$v.hours.between && errors.push('Hours must be between 0-1000')
        !this.$v.hours.required && errors.push('Hours is required.')
        return errors
      },
  },
  methods: {
    ...mapActions('Task', ['addTask']),
    addTK() {
      this.$v.$touch()
      if(this.$v.$invalid){
          console.log("Submission Fail")    
      }else{
        var task = { sprintbacklogID: this.currentSprintID, productbacklogID: this.currentPBID, content: this.content, hours: this.hours}
        this.addTask(task)
        this.content = ''
        this.hours = ''
        this.dialog = false
      }
    }
  }
};
</script>

<style>
.btn-border {
  border: #b7a57a 1px solid;
}
</style>