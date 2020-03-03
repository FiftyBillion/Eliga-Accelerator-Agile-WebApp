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
        <v-col cols="3" align-self="center">
          <v-btn class="primary" @click="startEnd()">Generate Chart</v-btn>
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
        :data="lineChart"
        xtitle="Date"
        ytitle="Tasks"
        :colors="['#b7a57a', '#4b2e83',  '#4287f5']"
        v-if="display"
        ></line-chart>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
// eslint-disable-next-line no-unused-vars

export default {
  name: "burndown-chart",
  data() {
    return {
      menu: false,
      menu2: false,
      startDate: '',
      endDate: '',
      ddd: {"2020-01-06": 20,
            "2020-01-13": 0},
      display: false,
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
            "2020-02-06": 9,
            "2020-02-16": 7,
            "2020-03-02": 0
          }
        }
      ]
    };
  },
  methods: {
    ...mapActions('Burndown', ['setStartEnd','setData', 'resetChart']),
    startEnd() {
      this.resetChart()
      var dates = [this.startDate, this.endDate]
      this.setStartEnd(dates)
      this.setData()
      this.display = true
    }
  },
  computed: {
    ...mapState('Burndown', ['lineChart'])
  }
};
</script>

<style>
</style>