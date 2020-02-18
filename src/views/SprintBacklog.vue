<template>
  <div class="sprint-backlog">
    <v-container>
      <h1>Sprint Backlog</h1>
    </v-container>

    <v-container>
      <v-row>
        <v-col>
          <v-btn
            class="btn-border center-btn"
            rounded
            active-class="accent"
            large
            route
            :to="{name: 'pbtosb'}"
          >
            <span class="pr-1">Product Backlog</span>
            <v-icon>mdi-arrow-right</v-icon>
            <span class="pl-1">Sprint Backlog</span>
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            class="btn-border center-btn"
            rounded
            active-class="accent"
            large
            route
            :to="{name: 'sbtosprint'}"
          >
            <span class="pr-1">Sprint Backlog</span>
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
            :to="{name: 'sprint'}"
          >
            <span>Sprints</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "sprint-backlog"
};
</script>

<style scoped>
.btn-border {
  border: #b7a57a 1px solid;
}
.v-btn:not(.v-btn--text):not(.v-btn--outlined).v-btn--active:before {
  opacity: 0;
}
.center-btn {
  margin: 0 25%;
}
</style>