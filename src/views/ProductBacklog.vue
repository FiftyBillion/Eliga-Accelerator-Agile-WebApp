<template>
  <div class="product-backlog">
    <h1>Product Backlog</h1>

    <v-container class="my-1">
       
      <v-layout>
        <v-flex xs12 md6>
        <v-btn small color="grey">
          <v-icon left small>mdi-flag</v-icon>
          <span class= "caption text-lowercase">Sort By Priority</span>
        </v-btn>
        <v-btn small color="grey" class="mx-6">
          <v-icon left small>mdi-alarm</v-icon>
          <span class= "caption text-lowercase">Sort By Hour</span>
        </v-btn>
        <v-btn small color="grey" class="mx-8">
          <v-icon left small>mdi-database-plus</v-icon>
          <span class= "caption text-lowercase">Add Product Backlog</span>
        </v-btn>
          
        
        </v-flex>
      </v-layout><br>

      <v-layout>
        <v-flex xs12 md6 class="">
          <div>Product Backlog</div>
        </v-flex>
        <v-flex xs12 md6>
          <div>Priority</div>
        </v-flex>
        <v-flex xs12 md6>
          <div>Hours</div>
        </v-flex>
        
        
      </v-layout>
      <v-divider></v-divider>
    </v-container>

  </div>
</template>

<script>
export default {
  name: 'product-backlog'

}
</script>
