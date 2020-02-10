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
          <v-col cols="4">
            <span>Product Backlog</span>
          </v-col>
          <v-col cols="1">
            <v-btn color="accent">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
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
        <v-row align="center" v-for="item in items" :key="item.content">
          <v-col cols="8">
            <v-card class="accent">
              <div>
                <v-card-text>{{ item.content }}</v-card-text>
              </div>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-chip color="red darken-4">{{ item.priority }}</v-chip>
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
import PBPopup from '@/components/PBPopup'

export default {
  name: "product-backlog",
  data() {
    return {
      items: [
        { content: "Hello 1", priority: "High", hour: "10" },
        { content: "Hello 2", priority: "Mid", hour: "8" },
        { content: "Hello 3", priority: "Low", hour: "9" },
        { content: "Hello 4", priority: "High", hour: "5" }
      ]
    };
  },
  components: {
    PBPopup
  }
};
</script>