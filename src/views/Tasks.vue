<template>
  <div class="tasks">
    <h1>Tasks</h1>
      <v-container class="my-5">

        <v-row justify-start class="mb-3">
         
         <v-btn small flat color="grey" @click="sortBy('title')">
          <v-icon small left>mdi-folder</v-icon>
          <span class="caption text-lowercase">By project name</span>
        </v-btn>
        <v-btn small flat color="grey" @click="sortBy('person')">
          <v-icon small left>mdi-account</v-icon>
          <span class="caption text-lowercase">By Person</span>
        </v-btn>
      </v-row>
        <v-col class="mt-4 mb-3"> 
             <Popup />
        </v-col> 

        <v-card flat v-for="project in projects" :key="project.title">
        <v-row wrap :class="`pa-3 project ${project.status}`">
          <v-col xs="12" md="6">
            <div class="grey--text">Project title</div>
            <div>{{ project.title}}</div>
          </v-col>
          <v-col xs="6" ms="4" md="2">
            <div class="grey--text">Person</div>
            <div>{{ project.person}}</div>
          </v-col>
          <v-col xs="6" ms="4" md="2">
            <div class="grey--text">Due by</div>
            <div>{{ project.due}}</div>
          </v-col>
          <v-col xs="2" sm="4" md="2">
            <div class="right">
              <v-chip small :color="`${project.status}`" class="v-chip--active dark grey--text caption my-2">{{project.status}}</v-chip>
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
        
        
      </v-container>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  
  name: 'tasks',
  data () {
    return {
      projects: [
        { title: 'Design a new website', person: 'Ki Tae Park', due: '17th Mar 2020', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Kevin Wu', due: '17th Mar 2020', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Rasapon Pinyapap', due: '17th Mar 20208', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a database', person: 'Daniel Cheng', due: '17th Mar 2020', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
 },
 methods: {
    sortBy(prop) {
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  }

}
</script>

<style>

.project.complete {
   border-left: 4px solid greenyellow;
}
.project.ongoing{
  border-left: 4px solid blue;
}
.project.overdue{
  border-left: 4px solid red;;
}
.v-chip.complete{
  background: greenyellow;
}
.v-chip.ongoing{
  background: blue;
}
.v-chip.overdue{
  background: red;
}


</style>
    