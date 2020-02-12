<template>
  <div class="burndown-chart">
    <h1>Burndown Chart</h1>

    <v-container class="my-5">
      
       <v-card outlined>

         <line-chart :data="lineChartData"></line-chart>

         <pie-chart :data="pieChartData"></pie-chart>

         <v-btn @click="updateChart" color="accent">
            <v-icon left>mdi-chart-bar</v-icon>
            <span>Update Chart</span>
         </v-btn>
      </v-card>   

      <v-card>
        

      </v-card>

    </v-container>

  </div>
</template>

<script>
export default {
  name: 'burndown-chart',
  data(){
    return {
      lineChartData: [
         {name: 'Remaining Actual Tasks',   data: {'2020-01-06': 20, '2020-01-13': 18, '2020-01-20': 16, '2020-01-12': 14, '2020-01-27': 13,
                                                   '2020-02-03': 12, '2020-02-10': 10, '2020-02-17': 10, '2020-02-24': 10, '2020-03-02': 10}},

         {name: 'Remaining Tasks',          data: {'2020-01-06': 20, '2020-01-13': 18, '2020-01-20': 16, '2020-01-12': 14, '2020-01-27': 12,
                                                   '2020-02-03': 10, '2020-02-10': 8, '2020-02-17': 6, '2020-02-24': 3, '2020-03-02': 0}},

         {name: 'Baseline Remaining Tasks', data: {'2020-01-06': 18, '2020-01-13': 16, '2020-01-20': 14, '2020-01-12': 12, '2020-01-27': 10,
                                                   '2020-02-03': 7, '2020-02-10': 5, '2020-02-17': 3, '2020-02-24': 1, '2020-03-02': 0}}
      ],
      
      pieChartData: [ ['Remaining Actual Tasks (h)', 12], ['Remaining Tasks (h)',10],  ['Baseline Remaining Tasks', 9]]
      

    }
  },
  methods: {
    updateChart() {
    this.lineChartData = [
         {name: 'Remaining Actual Tasks',   data: {'2020-01-06': 20, '2020-01-13': 18, '2020-01-20': 16, '2020-01-12': 14, '2020-01-27': 12,
                                                   '2020-02-03': 12, '2020-02-10': 8, '2020-02-17': 6, '2020-02-24': 3, '2020-03-02': 10}},

         {name: 'Remaining Tasks',          data: {'2020-01-06': 20, '2020-01-13': 18, '2020-01-20': 16, '2020-01-12': 14, '2020-01-27': 12,
                                                   '2020-02-03': 12, '2020-02-10': 8, '2020-02-17': 6, '2020-02-24': 3, '2020-03-02': 0}},

         {name: 'Baseline Remaining Tasks', data: {'2020-01-06': 18, '2020-01-13': 16, '2020-01-20': 14, '2020-01-12': 12, '2020-01-27': 10,
                                                   '2020-02-03': 7, '2020-02-10': 5, '2020-02-17': 3, '2020-02-24': 1, '2020-03-02': 0}}
      ],
    this.pieChartData =   [ ['Remaining Actual Tasks (h)', 10], ['Remaining Tasks (h)',4],  ['Baseline Remaining Tasks', 3]]
        
      
    }
  }


}

</script>
