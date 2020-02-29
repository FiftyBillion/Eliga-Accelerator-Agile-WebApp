<template>
  <div class="sprintplanning">
    <v-container>
      <v-row>
        <v-col cols="3">
          <h1>Sprint Planning</h1>
        </v-col>
        <v-col>
          <v-btn
            class="btn-border center-btn"
            rounded
            active-class="accent"
            large
            route
            :to="{name: 'pbtos'}"
          >
            <span class="pr-1">User Story</span>
            <v-icon>mdi-arrow-right</v-icon>
            <span class="pl-1">Sprint</span>
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            class="btn-border center-btn"
            rounded
            active-class="accent"
            large
            route
            :to="{name: 'sprintreview'}"
          >
            <span>Sprint Review</span>
          </v-btn>
        </v-col>

      </v-row>
    </v-container>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'sprintplanning'

}
</script>

<style scoped>
.btn-border {
  border: #b7a57a 1px solid;
}
.v-btn:not(.v-btn--text):not(.v-btn--outlined).v-btn--active:before {
  opacity: 0;
}
.center-btn {
  margin: 0 30%;
}
</style>