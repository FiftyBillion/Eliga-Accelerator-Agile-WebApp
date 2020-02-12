<template>
  <div class="people">
    <h1>People</h1>

    

    <v-container class="my-5">
    <v-layout>
      <v-flex xs12 md6 class="">
      <div>Members
        <v-btn small color="grey" class="mx-12" >
          <v-icon left small>mdi-account-plus</v-icon>
            <span class= "caption text-lowercase">Add Member</span>
        </v-btn>
      </div><br>
      </v-flex>
    </v-layout>

    <v-divider></v-divider>

      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
        <v-card class="text-xs-center ma-3">
          <v-responsive class="pt-4">
            <v-avatar size="100">
              <img :src="person.avatar">
            </v-avatar>
          </v-responsive>
        <v-card-text>
          <div class="subheading">{{ person.name }}</div>
          <div class="grey--text">{{ person.role }}</div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="grey">
            <v-icon small left>mdi-message-text-outline</v-icon>
            <span>Message</span>
          </v-btn>
        </v-card-actions>
        </v-card>
        </v-flex>
      </v-layout>
      
    </v-container>
      

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'people',
  data: () => ({  
  team: [
        { name: 'Kevin Wu', role: 'Web Developer', avatar: '/IronMan.png' },
        { name: 'Daniel Cheng', role: 'Web Developer', avatar:'/SpongeBob.png' },
        { name: 'Ki Tae Park', role: 'Web Developer', avatar:'/Conan.png' },
        { name: 'Rasapon Pinyapap', role: 'Web Developer', avatar:'Naruto.png' },
      ]

    
  }),
}
</script>
