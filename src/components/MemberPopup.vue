<template>
  <div>
    <v-btn @click.stop="dialog=true" color="accent">
      <v-icon left>mdi-plus</v-icon>
      <span>Add Member</span>
    </v-btn>
    <v-dialog v-model="dialog" max-width="40%">
      <v-card color="#1f1f1f">
        <v-card-title>
          <h3>New Member</h3>
        </v-card-title>
        <v-card-text>
          <v-form class="px-3">
            <v-textarea
              prepend-icon="mdi-view-list"
              color="accent"
              outlined
              auto-grow
              row-height="1"
              label="Fullname"
              v-model="name"
              class="pt-5"
              :error-messages="nameErrors"
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-textarea>
             <v-textarea
              prepend-icon="mdi-view-list"
              color="accent"
              outlined
              auto-grow
              row-height="1"
              label="Role"
              v-model="role"
              class="pt-5"
              :error-messages="roleErrors"
              @input="$v.role.$touch()"
              @blur="$v.role.$touch()"
            ></v-textarea>
     

            <div class="text-right">
              <v-btn class="primary" @click="addMember()">Submit</v-btn>
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
      name: '',
      role: ''
    }
  },
  validations:{
    name:{
        required,
        minLength: minLength(2),
        maxLength: maxLength(50)
    },
    role:{
        required,
        minLength: minLength(2),
        maxLength: maxLength(50)
    }
  },
  methods: {
      ...mapActions('People', ['addMEMBER']),
      addMember() {
        this.$v.$touch()
        if(this.$v.$invalid){
          console.log("Submission Fail")    
        }else{
          var member = {name: this.name, role: this.role}
          this.addMEMBER(member)
          this.dialog = false
          this.name = ''
          this.role = ''
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
        !this.$v.name.minLength && errors.push('Name must be at least 2 characters long')
        !this.$v.name.maxLength && errors.push('Name must be at most 50 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      roleErrors () {
        const errors = []
        if (!this.$v.role.$dirty) return errors
        !this.$v.role.minLength && errors.push('Role must be at least 2 characters long')
        !this.$v.role.maxLength && errors.push('Role must be at most 50 characters long')
        !this.$v.role.required && errors.push('Role is required.')
        return errors
      }
  }
};
</script>