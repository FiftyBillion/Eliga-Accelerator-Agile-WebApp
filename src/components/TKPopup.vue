<template>

  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn class="accent" dark v-on="on">Add New Project</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline accent lighten-2" primary-title>Add a New Project</v-card-title>
           <v-card-text>
             <v-form class="px-3" ref="form">
               <v-text-field v-model="title" label="Title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
               <v-textarea v-model="content" label="Information" prepend-icon="mdi-pencil" :rules="inputRules" ></v-textarea>
               <v-spacer></v-spacer>

                    <v-menu max-width="290">
                        <template v-slot:activator ="{ on }" >
                            <v-text-field v-model="formattedDate" label="Due date" prepend-icon="mdi-calendar-range" v-on="on"></v-text-field>
                        </template>
                        <v-date-picker v-model="formattedDate"></v-date-picker>
                    </v-menu>


               <v-btn flat @click="submit" class="primary mx-0 mt-3">Add Project</v-btn>
             </v-form>
       </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template> 

<script>
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import { mapActions } from 'vuex'
 

export default {
  data() {
    return {
      title: '',
      content:'',
      due: null,
      inputRules: [
          v => v.length >= 3 || 'Minimum lenght is 3 characters'
      ]
    }
  },
  methods: {
    ...mapActions('Project', ['addProject']),
    submit() {
      if(this.$refs.form.validate()) {

      // eslint-disable-next-line no-console
      console.log(this.title, this.content)
      
      var pro = { title: this.title, content: this.content, due: this.formattedDate, person: 'Ki Tae', status: 'ongoing' }
      this.addProject(pro)
      this.title = ''
      this.content = ''
      this.due = null
     }

    },
  computed: {
    formattedDate(){
    return this.due ? format(parseISO(this.due), 'YYYY MM DD') : ''
   }
  }
 }
}
</script>

