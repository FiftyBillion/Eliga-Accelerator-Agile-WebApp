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
        <v-row align="center" v-for="(item, index) in PBitems" :key="index">
          <v-col cols="8" class="py-2">
            <v-card class="accent">
              <v-container class="pa-0">
                <v-row>
                  <v-col cols="10" align-self="center">
                    <div>
                      <v-card-text class="py-0">{{ item.content }}</v-card-text>
                    </div>
                  </v-col>
                  <v-col cols="2" align-self="center">
                    <v-btn @click="removeBacklog(index)">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-chip class="red darken-4">{{ item.priority }}</v-chip>
          </v-col>
          <v-col cols="2">
            <v-chip>{{ item.hour }} hr</v-chip>
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
    ...mapState('ProductBacklog', ['PBitems'])
  },
  methods: {
    ...mapActions('ProductBacklog', ['removePB']),
    removeBacklog(pb) {
      this.removePB(pb)
    }
  }
};
</script>