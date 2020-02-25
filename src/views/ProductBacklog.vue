<template>
  <div class="product-backlog">
    <v-container>
      <h1>Product Backlog</h1>
    </v-container>

    <v-container class="px-10">
      <v-container>
        <v-row align="center">
          <v-col cols="3">
            <PBPopup></PBPopup>
          </v-col>
          <v-col cols="5">
            <span>Product Backlog</span>
          </v-col>
          <v-col cols="2">
            <span>Priority</span>
          </v-col>
          <v-col cols="2">
            <span>Hours</span>
          </v-col>
        </v-row>
      </v-container>
      <v-divider class="secondary darken-4"></v-divider>

      <v-container>
        <v-row align="center" v-for="item in pb" :key="item.id">
          <v-col cols="8" class="py-2">
            <v-card class="accent">
              <v-container class="pa-0">
                <v-row>
                  <v-col cols="10" align-self="center">
                    <div>
                      <v-card-text class="py-0">{{ item.content }}</v-card-text>
                    </div>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col align-self="center" class="mr-5">
                    <v-btn @click="removeBacklog(item)" class="remove-btn">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-chip :class="`${item.priority}`">{{ item.priority }}</v-chip>
          </v-col>
          <v-col cols="2">
            <v-chip>{{ item.hours }} hr</v-chip>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import PBPopup from "@/components/PBPopup";
import { mapState, mapActions } from "vuex";

export default {
  name: "product-backlog",
  data() {
    return {};
  },
  components: {
    PBPopup
  },
  computed: {
    ...mapState('ProductBacklog', ['pb'])
  },
  methods: {
    ...mapActions('ProductBacklog', ['removePB']),
    removeBacklog(pb) {
      this.removePB(pb)
    }
  },
  mounted() {
    this.$store.dispatch('ProductBacklog/getPB')
  }
};
</script>

<style scoped>
  .v-card:not(.v-sheet--tile):not(.v-card--shaped) {
    border-radius: 50px;
  }
  .remove-btn {
    border-radius: 50px;
  }
  .High {
    background-color: #ad0000 !important;
  }
  .Mid {
    background-color: #c48300 !important;
  }
  .Low {
    background-color: green !important;
  }
</style>