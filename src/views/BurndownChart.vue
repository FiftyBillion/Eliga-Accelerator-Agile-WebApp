<template>
  <div class="burndown-chart">
    <v-container>
      <v-row>
        <v-col cols="3">
          <h1>Burndown Chart</h1>
        </v-col>
        <v-col cols="3" align-self="center">
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="startDate"
                label="Start Date"
                prepend-icon="mdi-calendar"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="startDate" @input="menu = false"></v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="3" align-self="center">
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="endDate"
                label="End Date"
                prepend-icon="mdi-calendar"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="endDate" @input="menu2 = false"></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
    </v-container>
    <!-- Add Burndown Chart Popup-->

    <v-divider class="secondary darken-4"></v-divider>

    <v-container class="pt-5">
      <v-card outlined>
        <v-container>
          <v-row>
            <v-spacer></v-spacer>
          </v-row>
        </v-container>
        <line-chart
        height="450px"
        :data="lineChartData_1"
        :xmin="startDate"
        :xmax="endDate"
        :discrete="true"
        xtitle="Date"
        ytitle="Tasks"
        ></line-chart>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars

export default {
  name: "burndown-chart",
  data() {
    return {
      menu: false,
      menu2: false,
      startDate: '',
      endDate: '',
      lineChartData_1: [
        {
          name: "Remaining Actual Tasks",
          data: {
            "2020-01-06": 20,
            "2020-01-13": 18,
            "2020-01-20": 16,
            "2020-01-12": 14,
            "2020-01-27": 13,
            "2020-02-03": 12,
            "2020-02-10": 10,
            "2020-02-17": 9,
            "2020-02-24": 8,
            "2020-03-02": 7,
            "2020-03-03": 7,
            "2020-03-04": 6,
            "2020-03-05": 5,
            "2020-03-06": 5,
            "2020-03-07": 4,
            "2020-03-08": 2,
            "2020-03-09": 1,
            "2020-03-10": 1,
          }
        },

        {
          name: "Remaining Tasks",
          data: {
            "2020-01-06": 20,
            "2020-01-13": 18,
            "2020-01-20": 16,
            "2020-01-12": 14,
            "2020-01-27": 12,
            "2020-02-03": 10,
            "2020-02-10": 8,
            "2020-02-17": 6,
            "2020-02-24": 3,
            "2020-03-02": 0
          }
        },

        {
          name: "Baseline Remaining Tasks",
          data: {
            "2020-01-06": 18,
            "2020-01-13": 16,
            "2020-01-20": 14,
            "2020-01-12": 12,
            "2020-01-27": 10,
            "2020-02-03": 7,
            "2020-02-10": 5,
            "2020-02-17": 3,
            "2020-02-24": 1,
            "2020-03-02": 0
          }
        }
      ]
    };
  }
};
</script>

<style>
</style>