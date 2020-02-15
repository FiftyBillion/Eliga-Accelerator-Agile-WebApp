<template>

  <div class="text-center">
    <v-dialog v-model="dialog" width="800">
      <template v-slot:activator="{ on }">
        
       <v-btn color="primary" v-on="on">
                   <v-icon left>mdi-checkbox-multiple-blank</v-icon>
                   <span>KiTae's Project</span>
       </v-btn>

      <!--   <v-btn class="accent" dark v-on="on">Add New Project</v-btn> -->

    
      </template>
      <v-card>
        <v-card-title class="headline primary lighten-2" primary-title>KITAE'S PROJECT INFORMATION</v-card-title>
           <v-card-text>
             <v-form class="px-3" ref="form">
               <v-text-field v-model="title" label="Project Title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
               <v-textarea v-model="content" label="Information" prepend-icon="mdi-pencil" :rules="inputRules" ></v-textarea>
               <v-spacer></v-spacer>

                    <v-menu max-width="290">
                        <template v-slot:activator ="{ on }" >
                            <v-text-field :value="formattedDate" label="Due date" prepend-icon="mdi-calendar-range" v-on="on"></v-text-field>
                        </template>
                        <v-date-picker v-model="formattedDate"></v-date-picker>
                    </v-menu>


               <v-btn flat @click="submit" class="accent mx-0 mt-3">Update Info</v-btn>
             </v-form>
       </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template> 

<script>
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

 

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
    submit() {
      if(this.$refs.form.validate()) {

      // eslint-disable-next-line no-console
      console.log(this.title, this.content) 
     }
    },
  computed: {
    formattedDate(){
    return this.due ? format(parseISO(this.due), 'dd MM yyyy') : ''
   },
  }
 }
}
</script>
