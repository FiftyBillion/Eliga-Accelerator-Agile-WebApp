<template>
  <div>
    <v-btn @click.stop="dialog=true" color="accent">
      <v-icon left>mdi-plus</v-icon>
      <span>Add</span>
    </v-btn>
    <v-dialog v-model="dialog" max-width="40%">
      <v-card color="#1f1f1f">
        <v-card-title>
          <h3>New Product Backlog</h3>
        </v-card-title>
        <v-card-text>
          <v-form class="px-3">
            <v-textarea
              prepend-icon="mdi-view-list"
              color="accent"
              outlined
              auto-grow
              row-height="1"
              label="Content"
              v-model="content"
              class="pt-5"
            ></v-textarea>
            <v-row justify="space-around">
              <v-col cols="6">
                <v-overflow-btn
                  prepend-icon="mdi-speedometer"
                  :items="dropdown_priority"
                  label="Priority"
                  chips
                  rounded
                  item-color="secondary"
                ></v-overflow-btn>
              </v-col>
              <v-col cols="3" align-self="center">
                <v-text-field label="Hours" color="accent" suffix="hr"></v-text-field>
              </v-col>
            </v-row>
            <div class="text-right">
              <v-btn class="primary">Submit</v-btn>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      content: "",
      dropdown_priority: ["High", "Mid", "Low"]
    };
  }
};
</script>