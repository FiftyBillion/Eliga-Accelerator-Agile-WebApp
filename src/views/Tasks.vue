<template>
  <div class="task">
    <v-container>
      <v-row>
        <v-col cols="3">
          <h1>Tasks</h1>
        </v-col>
        <v-col>
          <v-btn
            class="btn-border center-btn"
            rounded
            active-class="accent"
            large
            route
            :to="{name: 'tasktopeople'}"
          >
            <span class="pr-1">Task</span>
            <v-icon>mdi-arrow-right</v-icon>
            <span class="pl-1">People</span>
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            class="btn-border center-btn"
            rounded
            active-class="accent"
            large
            route
            :to="{name: 'taskreview'}"
          >
            <span>Task Review</span>
          </v-btn>
        </v-col>

      </v-row>
    </v-container>
    <router-view></router-view>
  </div>
</template>


<style scoped>
.v-btn:not(.v-btn--text):not(.v-btn--outlined).v-btn--active:before {
  opacity: 0;
}
</style>