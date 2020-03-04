<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <h3 class="text-center">Task (Unassigned)</h3>
        <v-divider class="secondary darken-4 my-3"></v-divider>
        <v-container class="scroll">
          <v-row
            class="py-1 px-5"
            v-for="item in unassignTask"
            :key="item.id"
            justify="center"
            :taskid="item.id"
            draggable="true"
            @dragstart="start"
          >
            <v-card class="accent border-radius-50">
              <v-col>
                <v-card-text class="pa-0" large>{{ item.content }}</v-card-text>
              </v-col>
            </v-card>
          </v-row>
        </v-container>
      </v-col>
      <v-divider vertical class="secondary darken-4"></v-divider>
      <v-col>
        <h3 class="text-center">People</h3>
        <v-divider class="secondary darken-4 my-3"></v-divider>
        <v-container class="scroll">
          <v-row class="mx-4">
            <v-col cols="12" v-for="item in member" :key="item.id">
              <v-card class="center border-card" @dragover.prevent @drop="drop" :memberid="item.id" :membername="item.name">
                <v-row align="center" :memberid="item.id" :membername="item.name">
                  <v-col cols="2" offset="1" :memberid="item.id" :membername="item.name">
                    <v-avatar :memberid="item.id" :membername="item.name">
                      <v-img
                        :src="`https://picsum.photos/200?random=${item.id}`"
                        @dragover.stop
                      ></v-img>
                    </v-avatar>
                  </v-col>
                  <v-col>
                    <v-card-title class="title wordBreak" :memberid="item.id" :membername="item.name">{{ item.name }}</v-card-title>
                    <v-card-subtitle :memberid="item.id" :membername="item.name">Roles: {{item.role}}</v-card-subtitle>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      dragTaskID: "",
      dropMemberID: '',
      dropMemberName: ''
    };
  },
  computed: {
    ...mapState("Task", ["unassignTask"]),
    ...mapState("People", ["member"])
  },
  mounted() {
    this.$store.dispatch("Task/getUnassignTask");
    this.$store.dispatch("People/getMEMBER");
  },
  methods: {
    ...mapActions("Task", ["assignMemberID"]),
    start(evt) {
      this.dragTaskID = evt.target.attributes.taskid.value;
    },
    drop(evt) {
      this.dropMemberID = evt.target.attributes.memberid.value;
      this.dropMemberName = evt.target.attributes.membername.value;
      this.assignMemberID({taskid: this.dragTaskID, memberid: this.dropMemberID, membername: this.dropMemberName});
    }
  }
};
</script>

<style scoped>
.border-radius-50 {
  border-radius: 50px !important;
}
.scroll {
  overflow-y: scroll;
  height: 60vh;
}
.border-card {
  border: #b7a57a 1px solid;
}
</style>