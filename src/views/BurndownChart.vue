<template>
  <div class="burndown-chart">
    <h1>Burndown Chart</h1>

    <v-container>

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
    </v-container>
    
    <!-- Add Burndown Chart Popup-->
    <v-col class="mt-4 mb-3"> 
        <BrChPopup />
    </v-col> 

    <v-divider class="secondary darken-4"></v-divider>

    <v-container>
       <v-row wrap>
         <v-col xs="12" md="5" >
           <v-card outlined>
            
             <v-container>
               <v-row>
                 <v-btn color="primary">
                   <v-icon left>mdi-checkbox-multiple-blank</v-icon>
                   <span>KiTae's Project</span>
                 </v-btn>

                 <v-spacer></v-spacer>

                <v-btn @click="updateChart" color="accent">
                   <v-icon left>mdi-chart-bar</v-icon>
                   <span>Update Chart</span>
                 </v-btn>
               </v-row>
             </v-container>
              
                <line-chart :data="lineChartData"></line-chart>

                <pie-chart :data="pieChartData"></pie-chart>
           </v-card>   
         </v-col>   
         
          <v-col xs="12" md="5">
              <v-card outlined>

                <v-container>
                   <v-row>
                     <v-btn color="green">
                        <v-icon left>mdi-checkbox-multiple-blank</v-icon>
                        <span>Kevin's Project</span>
                     </v-btn>

                     <v-spacer></v-spacer>

                     <v-btn @click="updateChart" color="accent">
                        <v-icon left>mdi-chart-bar</v-icon>
                         <span>Update Chart</span>
                     </v-btn>
                   </v-row>
                </v-container>
               
                    <line-chart :data="lineChartData"></line-chart>

                    <pie-chart :data="pieChartData"></pie-chart>
              </v-card>
          </v-col>
        </v-row>  

        <v-row wrap justify>
          <v-col xs="12" md="5" >

            <v-card outlined>
               
               <v-container>
                   <v-row>
                     <v-btn color="grey">
                        <v-icon left>mdi-checkbox-multiple-blank</v-icon>
                        <span>Daniel's Project</span>
                     </v-btn>

                     <v-spacer></v-spacer>

                     <v-btn @click="updateChart" color="accent">
                        <v-icon left>mdi-chart-bar</v-icon>
                         <span>Update Chart</span>
                     </v-btn>
                   </v-row>
                </v-container>
            
                   <line-chart :data="lineChartData"></line-chart>

                   <pie-chart :data="pieChartData"></pie-chart>

            </v-card>   
          </v-col>
         
           <v-col xs="12" md="5" >
             <v-card outlined>

                <v-container>
                   <v-row>
                     <v-btn color="pink">
                        <v-icon left>mdi-checkbox-multiple-blank</v-icon>
                        <span>Rasapon's Project</span>
                     </v-btn>

                     <v-spacer></v-spacer>

                     <v-btn @click="updateChart" color="accent">
                        <v-icon left>mdi-chart-bar</v-icon>
                         <span>Update Chart</span>
                     </v-btn>
                   </v-row>
                </v-container>
               
                   <line-chart :data="lineChartData"></line-chart>

                   <pie-chart :data="pieChartData"></pie-chart>

              </v-card>
           </v-col>
        </v-row>  
        

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
