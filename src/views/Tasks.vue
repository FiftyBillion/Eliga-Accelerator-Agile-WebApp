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
<!--
<template>
  <div class="tasks">
    <v-container>
      <h1>Tasks</h1>
    </v-container>
    <v-container class="my-5">
      <v-row justify-start class="mb-3">
        <v-btn small flat color="accent" @click="sortBy('title')">
          <v-icon small left>mdi-folder</v-icon>
          <span class="caption text-lowercase">By project name</span>
        </v-btn>
        <v-btn small flat color="accent" @click="sortBy('person')">
          <v-icon small left>mdi-account</v-icon>
          <span class="caption text-lowercase">By Person</span>
        </v-btn>
      </v-row>

      <v-col class="mt-4 mb-3">
        <TKPopup />
      </v-col>

      <v-card outlined v-for="project in projects" :key="project.title">
        <v-row wrap :class="`pa-3 project ${project.status}`">
          <v-col xs="12" md="6">
            <div class="grey--text">Project title</div>
            <div>{{ project.title}}</div>
          </v-col>
          <v-col xs="6" ms="4" md="2">
            <div class="grey--text">Person</div>
            <div>{{ project.person}}</div>
          </v-col>
          <v-col xs="6" ms="4" md="2">
            <div class="grey--text">Due by</div>
            <div>{{ project.due}}</div>
          </v-col>
          <v-col xs="2" sm="4" md="2">
            <div class="right">
              <v-chip
                small
                :color="`${project.status}`"
                class="v-chip--active dark grey--text caption my-2"
              >{{project.status}}</v-chip>
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import TKPopup from "@/components/TKPopup.vue";
import { mapState } from "vuex";

export default {
  components: { TKPopup },
  name: "tasks",
  data() {
    return {};
  },
  computed: {
    ...mapState("Project", ["projects"])
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  }
};
</script>

<style>
.project.complete {
  border-left: 4px solid greenyellow;
}
.project.ongoing {
  border-left: 4px solid blue;
}
.project.overdue {
  border-left: 4px solid red;
}
.v-chip.complete {
  background: greenyellow;
}
.v-chip.ongoing {
  background: blue;
}
.v-chip.overdue {
  background: red;
}
</style>
-->