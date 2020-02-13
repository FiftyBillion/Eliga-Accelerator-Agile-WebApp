<template>
  <div class="sprint-backlog">
    <v-container>
      <h1>Sprint Backlog</h1>
    </v-container>

    <v-container>
      <v-row>
        <v-col>
          <v-btn large route :to="{name: 'pbtosb'}">
            <span class="pr-1">Product Backlog</span>
            <v-icon>mdi-arrow-right</v-icon>
            <span class="pl-1">Sprint Backlog</span> 
          </v-btn>
        </v-col>
        <v-col>
          <v-btn large route :to="{name: 'sbtosprint'}">
            <span class="pr-1">Sprint Backlog</span>
            <v-icon>mdi-arrow-right</v-icon>
            <span class="pl-1">Sprint</span> 
          </v-btn>
        </v-col>
        <v-col>
          <v-btn large route :to="{name: 'sprint'}">
            <span>Sprints</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-divider class="secondary darken-4"></v-divider>

    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'sprint-backlog'

}
</script>
