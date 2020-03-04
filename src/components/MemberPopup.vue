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
            ></v-textarea>
            <br>
             <v-textarea
              prepend-icon="mdi-view-list"
              color="accent"
              outlined
              auto-grow
              row-height="1"
              label="Role"
              v-model="role"
              class="pt-5"
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
export default {
  data() {
    return {
      dialog: false,
      name: '',
      role: ''
    }
  },
  methods: {
      ...mapActions('People', ['addMEMBER']),
      addMember() {
          var member = {name: this.name, role: this.role}
          this.addMEMBER(member)
          this.dialog = false
          this.name = ''
          this.role = ''
      } 
  }
};
</script>