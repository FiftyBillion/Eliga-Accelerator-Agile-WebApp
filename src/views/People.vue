<template>
  <div class="people">
    <v-container class="pt-5">
      <h1>People</h1>
    </v-container>

    <v-container>
      <v-row>
        <v-col cols="5">
          <MemberPopup></MemberPopup>
        </v-col>
        <v-col align-self="center">
          <span class="title">Members</span>
        </v-col>
      </v-row>
      <v-divider class="secondary darken-4"></v-divider>
    </v-container>
    <v-container class="scroll">
      <v-row>
        <v-col v-for="person in member" :key="person.id" cols="4">
          <div class="border-card">
          <v-card class="mx-2 black">
            <v-row>
              <v-col cols="2" align-self="center" offset="1" class="pl-2">
                <v-avatar color="indigo" size="60">
                  <v-img :src="`https://picsum.photos/200?random=${person.id}`"></v-img>
                </v-avatar>
              </v-col>
              <v-col>
                <v-card-title>{{ person.name }}</v-card-title>
                <v-card-text>{{ person.role }}</v-card-text>
              </v-col>
            </v-row>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="removeM(person.id)" class="red darken-4">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import MemberPopup from "@/components/MemberPopup";
import { mapState, mapActions } from "vuex";
import Axios from 'axios'

export default {
  name: "people",
  data: () => ({}),
  components: { MemberPopup },

  computed: {
    ...mapState("People", ["member"])
  },
  methods: {
    ...mapActions("People", ["removeMEMBER"]),
    removeM(personid) {
      this.removeMEMBER(personid);
      Axios.get(`http://54.188.22.63/api/task/?assignTo=${personid}`)
      .then(Response => {
        this.clearAssign(Response.data)
      })
    },
    clearAssign(res) {
      for(var i = 0; i < res.length; i++) {
          Axios.patch(`http://54.188.22.63/api/task/${res[i].id}/`, {assignTo: 0, assignToName: "None"})
        }
    }
  },
  mounted() {
    this.$store.dispatch("People/getMEMBER");
  }
};
</script>

<style>
.scroll {
  overflow-y: scroll;
  height: 62vh;
}
.border-card {
  border: #b7a57a 1px solid;
}
</style>