<template>
  <div>
    <v-btn @click.stop="dialog=true" height="100%" width="70%" class="center-btn accent">
      <v-icon class="display-3" large>mdi-plus</v-icon>
      <span class="display-1">Add</span>
    </v-btn>
    <v-dialog v-model="dialog" max-width="40%">
      <v-card color="#1f1f1f">
        <v-card-title>
          <h3>New Sprint</h3>
        </v-card-title>
        <v-card-text>
          <v-form class="px-3">
            <v-textarea
              prepend-icon="mdi-view-list"
              color="accent"
              outlined
              auto-grow
              row-height="1"
              label="Name"
              v-model="name"
              class="pt-5"
              required
              :error-messages="nameErrors"
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-textarea>
            <v-row justify="space-around">
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
                      v-model="startdate"
                      label="Start Date"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="startdate" @input="menu = false"></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="6">
                  <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="duedate"
                      label="Due Date"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="duedate" @input="menu2 = false"></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
            <div class="text-right">
              <v-btn class="primary" @click="addS">Submit</v-btn>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import {required, minLength, maxLength} from 'vuelidate/lib/validators';
export default {
  data() {
    return {
      dialog: false,
      name: "",
      startdate: new Date().toISOString().substr(0, 10),
      menu: false,
      menu2: false,
      duedate: new Date().toISOString().substr(0, 10)
    };
  },
  validations:{
    name:{
        required,
        minLength: minLength(3),
        maxLength: maxLength(100)
    }
  },
  methods: {
      ...mapActions('Sprint', ['addSprint']),
      addS() {
        this.$v.$touch()
        if(this.$v.$invalid){
          console.log("Submission Fail")    
        }else{
          var sprint = { startDate: this.startdate, dueDate: this.duedate, name: this.name}
          this.addSprint(sprint)
          this.name = '',
          this.startdate = new Date().toISOString().substr(0, 10)
          this.duedate = new Date().toISOString().substr(0, 10)
          this.dialog = false
        }
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
    nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.minLength && errors.push('Name must be at least 3 characters long')
        !this.$v.name.maxLength && errors.push('Name must be at most 100 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      }
  }
};
</script>

<style scoped>
.center-btn {
  margin: 0 15%;
}
</style>