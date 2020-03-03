<template>
  <div class="people">
    <v-container>
      <h1>People</h1>
    </v-container>
    

    <v-container class="my-5">
    <v-layout>
      <v-flex xs12 md6 class="">
      <div>Members
        <MemberPopup></MemberPopup>
      </div><br>
      </v-flex>
    </v-layout>

    <v-divider></v-divider>

      <v-row>
        <v-col xs12 sm6 md4 lg3 v-for="person in member" :key="person.id">
        <v-card class="text-xs-center ma-3">
        <v-card-text>
          <div class="subheading">{{ person.name }}</div>
          <div class="grey--text">{{ person.role }}</div>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="removeMEMBER(member)" class="remove-btn">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-card-actions>
        </v-card>
        </v-col>
      </v-row>
      <v-btn @click="test()">Test</v-btn>
      
      
    </v-container>

  </div>
</template>

<script>
import MemberPopup from "@/components/MemberPopup";
import { mapState, mapActions } from "vuex";
import Axios from 'axios'
// @ is an alias to /src

export default {
  name: 'people',
  data: () => ({
  }),
  components: { MemberPopup },

  computed: {
    ...mapState('People', ['member'])
  },
  methods: {
    ...mapActions('People', ['removeMEMBER']),
    removeMEMBER(member) {
      this.removeMEMBER(member)
    },
    async test() {
      // Get the access token from the auth wrapper
      const token = await this.$auth0.getTokenSilently();

      // Use Axios to make a call to the API
      const { data } = await Axios.get("https://dev-6qgo211e.auth0.com/api/v2/users/", {
        headers: {
          Authorization: `Bearer ${token}`    // send the access token through the 'Authorization' header
        }
      });

      console.log(data)
    }
  },
  mounted() {
    this.$store.dispatch('People/getMEMBER')
  }
}
</script>
