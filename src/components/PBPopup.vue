<template>
  <div>
    <v-btn @click.stop="dialog=true" color="accent">
      <v-icon left>mdi-plus</v-icon>
      <span>Add</span>
    </v-btn>
    <v-dialog v-model="dialog" max-width="40%">
      <v-card color="#1f1f1f">
        <v-card-title>
          <h3>New Product Backlog</h3>
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
              <v-col cols="6">
                <v-overflow-btn
                  prepend-icon="mdi-speedometer"
                  :items="dropdown_priority"
                  label="Priority"
                  chips
                  rounded
                  item-color="secondary"
                  v-model="priority"
                  :error-messages="priorityErrors"
                  required
                  @input="$v.priority.$touch()"
                  @blur="$v.priority.$touch()"
                ></v-overflow-btn>
              </v-col>
              <v-col cols="3" align-self="center">
                <v-text-field label="Hours" color="accent" suffix="hr" v-model="hours"
                :error-messages="hoursErrors"
                required
                @input="$v.hours.$touch()"
                @blur="$v.hours.$touch()"
                ></v-text-field>
              </v-col>
            </v-row>
            <div class="text-right">
              <v-btn class="primary" @click="addBacklog">Submit</v-btn>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import {required, minLength, maxLength, between} from 'vuelidate/lib/validators';
export default {
  data() {
    return {
      //when the popup is open, it change it to true, when close, it change it to false
      dialog: false,
      content: "",
      priority: "",
      hours: "",
      pb: { content: this.content, priority: this.priority, hours: this.hours},
      dropdown_priority: ["High", "Mid", "Low"],
    }
  },
  validations:{
      content:{
        required,
        minLength: minLength(3),
        maxLength: maxLength(100)
      },
      priority:{
        required,
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
  computed:{
    contentErrors () {
        const errors = []
        if (!this.$v.content.$dirty) return errors
        !this.$v.content.minLength && errors.push('Content must be at least 3 characters long')
        !this.$v.content.maxLength && errors.push('Content must be at most 100 characters long')
        !this.$v.content.required && errors.push('Content is required.')
        return errors
      },
    priorityErrors () {
        const errors = []
        if (!this.$v.priority.$dirty) return errors
        !this.$v.priority.required && errors.push('Priority is required')
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
      ...mapActions('ProductBacklog', ['addPB']),
      addBacklog() {
        this.$v.$touch()
        if(this.$v.$invalid){
          console.log("Submission Fail")    
        }else{
          var pb = { content: this.content, priority: this.priority, hours: this.hours}
          this.addPB(pb)
          this.dialog = false
          this.content = ''
          this.priority = ''
          this.hours = ''
        }
     
      }
  }
};
</script>