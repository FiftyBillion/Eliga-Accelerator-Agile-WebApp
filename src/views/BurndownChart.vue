<template>
  <div class="burndown-chart">
    <v-container>
      <h1>Burndown Chart</h1>
    </v-container>

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
      <v-col > 
        <AddChtPopup />
      </v-col> 

    </v-container>
    
    <!-- Add Burndown Chart Popup-->
    
    <v-divider class="secondary darken-4"></v-divider>

    <v-container>
       <v-row wrap>
         <v-col xs="12" md="5" >
           <v-card outlined>
            
             <v-container>
               <v-row>
         <!--   <v-btn color="primary">
                   <v-icon left>mdi-checkbox-multiple-blank</v-icon>
                   <span>KiTae's Project</span>
                 </v-btn> -->
                 <ProInfoPopup />


                 <v-spacer></v-spacer>

                <v-btn @click="updateChart_1" color="accent">
                   <v-icon left>mdi-chart-bar</v-icon>
                   <span>Update Chart</span>
                 </v-btn>
               </v-row>
             </v-container>
              
                <line-chart :data="lineChartData_1"></line-chart>

                <pie-chart :data="pieChartData_1"></pie-chart>
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

                     <v-btn @click="updateChart_2" color="accent">
                        <v-icon left>mdi-chart-bar</v-icon>
                         <span>Update Chart</span>
                     </v-btn>
                   </v-row>
                </v-container>
               
                    <line-chart :colors="['yellow', 'green', 'white']" :data="lineChartData_2"></line-chart>

                    <pie-chart :colors="['yellow', 'green', 'white']"  :data="pieChartData_2"></pie-chart>
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

                     <v-btn @click="updateChart_3" color="accent">
                        <v-icon left>mdi-chart-bar</v-icon>
                         <span>Update Chart</span>
                     </v-btn>
                   </v-row>
                </v-container>
            
                   <line-chart :colors="['red', 'purple', 'green']" :data="lineChartData_3"></line-chart>

                   <pie-chart :colors="['red', 'purple', 'green']" :data="pieChartData_3"></pie-chart>

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

                     <v-btn @click="updateChart_4" color="accent">
                        <v-icon left>mdi-chart-bar</v-icon>
                         <span>Update Chart</span>
                     </v-btn>
                   </v-row>
                </v-container>
               
                   <line-chart :colors="['grey', 'orange', 'blue']" :data="lineChartData_4"></line-chart>

                   <pie-chart :colors="['grey', 'orange', 'blue']" :data="pieChartData_4"></pie-chart>

              </v-card>
           </v-col>
        </v-row>  
        

    </v-container>

   
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import AddChtPopup from '@/components/AddChtPopup.vue'
import ProInfoPopup from '@/components/ProInfoPopup.vue'

export default {
  components : { AddChtPopup, ProInfoPopup}, 
  name: 'burndown-chart',
  data(){
    return {
      lineChartData_1: [
         {name: 'Remaining Actual Tasks',   data: {'2020-01-06': 20, '2020-01-13': 18, '2020-01-20': 16, '2020-01-12': 14, '2020-01-27': 13,
                                                   '2020-02-03': 12, '2020-02-10': 10, '2020-02-17': 10, '2020-02-24': 10, '2020-03-02': 10}},

         {name: 'Remaining Tasks',          data: {'2020-01-06': 20, '2020-01-13': 18, '2020-01-20': 16, '2020-01-12': 14, '2020-01-27': 12,
                                                   '2020-02-03': 10, '2020-02-10': 8, '2020-02-17': 6, '2020-02-24': 3, '2020-03-02': 0}},

         {name: 'Baseline Remaining Tasks', data: {'2020-01-06': 18, '2020-01-13': 16, '2020-01-20': 14, '2020-01-12': 12, '2020-01-27': 10,
                                                   '2020-02-03': 7, '2020-02-10': 5, '2020-02-17': 3, '2020-02-24': 1, '2020-03-02': 0}}
      ],
      lineChartData_2: [
         {name: 'Remaining Actual Tasks',   data: {'2020-01-06': 20, '2020-01-13': 20, '2020-01-20': 18, '2020-01-12': 14, '2020-01-27': 13,
                                                   '2020-02-03': 12, '2020-02-10': 8, '2020-02-17': 8, '2020-02-24': 8, '2020-03-02': 8}},

         {name: 'Remaining Tasks',          data: {'2020-01-06': 20, '2020-01-13': 18, '2020-01-20': 16, '2020-01-12': 14, '2020-01-27': 12,
                                                   '2020-02-03': 10, '2020-02-10': 6, '2020-02-17': 4, '2020-02-24': 3, '2020-03-02': 0}},

         {name: 'Baseline Remaining Tasks', data: {'2020-01-06': 18, '2020-01-13': 18, '2020-01-20': 14, '2020-01-12': 12, '2020-01-27': 10,
                                                   '2020-02-03': 7, '2020-02-10': 5, '2020-02-17': 3, '2020-02-24': 1, '2020-03-02': 0}}
      ],
      
      lineChartData_3: [
         {name: 'Remaining Actual Tasks',   data: {'2020-01-06': 20, '2020-01-13': 20, '2020-01-20': 18, '2020-01-12': 18, '2020-01-27': 15,
                                                   '2020-02-03': 12, '2020-02-10': 10, '2020-02-17': 10, '2020-02-24': 8, '2020-03-02': 8}},

         {name: 'Remaining Tasks',          data: {'2020-01-06': 20, '2020-01-13': 18, '2020-01-20': 16, '2020-01-12': 12, '2020-01-27': 10,
                                                   '2020-02-03': 10, '2020-02-10': 4, '2020-02-17': 4, '2020-02-24': 3, '2020-03-02': 0}},

         {name: 'Baseline Remaining Tasks', data: {'2020-01-06': 15, '2020-01-13': 14, '2020-01-20': 14, '2020-01-12': 12, '2020-01-27': 8,
                                                   '2020-02-03': 7, '2020-02-10': 5, '2020-02-17': 3, '2020-02-24': 2, '2020-03-02': 0}}
      ],

      lineChartData_4: [
         {name: 'Remaining Actual Tasks',   data: {'2020-01-06': 20, '2020-01-13': 20, '2020-01-20': 18, '2020-01-12': 18, '2020-01-27': 15,
                                                   '2020-02-03': 12, '2020-02-10': 10, '2020-02-17': 10, '2020-02-24': 8, '2020-03-02': 8}},

         {name: 'Remaining Tasks',          data: {'2020-01-06': 20, '2020-01-13': 18, '2020-01-20': 16, '2020-01-12': 12, '2020-01-27': 10,
                                                   '2020-02-03': 10, '2020-02-10': 4, '2020-02-17': 4, '2020-02-24': 3, '2020-03-02': 0}},

         {name: 'Baseline Remaining Tasks', data: {'2020-01-06': 15, '2020-01-13': 14, '2020-01-20': 14, '2020-01-12': 12, '2020-01-27': 8,
                                                   '2020-02-03': 7, '2020-02-10': 5, '2020-02-17': 3, '2020-02-24': 2, '2020-03-02': 0}}
      ],


      
      pieChartData_1: [ ['Remaining Actual Tasks (h)', 12], ['Remaining Tasks (h)',10],  ['Baseline Remaining Tasks', 9]],

      pieChartData_2: [ ['Remaining Actual Tasks (h)', 12], ['Remaining Tasks (h)',8],  ['Baseline Remaining Tasks', 4]],

      pieChartData_3: [ ['Remaining Actual Tasks (h)', 15], ['Remaining Tasks (h)',10],  ['Baseline Remaining Tasks', 4]],

      pieChartData_4: [ ['Remaining Actual Tasks (h)', 13], ['Remaining Tasks (h)',12],  ['Baseline Remaining Tasks', 6]],
    }
  },
  methods: {
    updateChart_1() {
    this.lineChartData_1 = [
         {name: 'Remaining Actual Tasks',   data: {'2020-01-06': 20, '2020-01-13': 18, '2020-01-20': 16, '2020-01-12': 14, '2020-01-27': 12,
                                                   '2020-02-03': 12, '2020-02-10': 8, '2020-02-17': 6, '2020-02-24': 3, '2020-03-02': 10}},

         {name: 'Remaining Tasks',          data: {'2020-01-06': 20, '2020-01-13': 18, '2020-01-20': 16, '2020-01-12': 14, '2020-01-27': 12,
                                                   '2020-02-03': 12, '2020-02-10': 8, '2020-02-17': 6, '2020-02-24': 3, '2020-03-02': 0}},

         {name: 'Baseline Remaining Tasks', data: {'2020-01-06': 18, '2020-01-13': 16, '2020-01-20': 14, '2020-01-12': 12, '2020-01-27': 10,
                                                   '2020-02-03': 7, '2020-02-10': 5, '2020-02-17': 3, '2020-02-24': 1, '2020-03-02': 0}}
      ],

    this.pieChartData_1 =   [ ['Remaining Actual Tasks (h)', 10], ['Remaining Tasks (h)',4],  ['Baseline Remaining Tasks', 3]]
    },

    updateChart_2() {
    this.lineChartData_2 = [
         {name: 'Remaining Actual Tasks',   data: {'2020-01-06': 18, '2020-01-13': 16, '2020-01-20': 15, '2020-01-12': 12, '2020-01-27': 12,
                                                   '2020-02-03': 12, '2020-02-10': 6, '2020-02-17': 6, '2020-02-24': 3, '2020-03-02': 0}},

         {name: 'Remaining Tasks',          data: {'2020-01-06': 17, '2020-01-13': 15, '2020-01-20': 14, '2020-01-12': 11, '2020-01-27': 10,
                                                   '2020-02-03': 10, '2020-02-10': 8, '2020-02-17': 4, '2020-02-24': 1, '2020-03-02': 0}},

         {name: 'Baseline Remaining Tasks', data: {'2020-01-06': 16, '2020-01-13': 14, '2020-01-20': 12, '2020-01-12': 10, '2020-01-27': 8,
                                                   '2020-02-03': 5, '2020-02-10': 4, '2020-02-17': 3, '2020-02-24': 1, '2020-03-02': 0}}
      ],

    this.pieChartData_2 =   [ ['Remaining Actual Tasks (h)', 5], ['Remaining Tasks (h)',3],  ['Baseline Remaining Tasks', 4]]
    },

    updateChart_3() {
    this.lineChartData_3 = [
         {name: 'Remaining Actual Tasks',   data: {'2020-01-06': 18, '2020-01-13': 16, '2020-01-20': 10, '2020-01-12': 10, '2020-01-27': 10,
                                                   '2020-02-03': 10, '2020-02-10': 5, '2020-02-17': 5, '2020-02-24': 3, '2020-03-02': 0}},

         {name: 'Remaining Tasks',          data: {'2020-01-06': 17, '2020-01-13': 15, '2020-01-20': 14, '2020-01-12': 11, '2020-01-27': 10,
                                                   '2020-02-03': 10, '2020-02-10': 8, '2020-02-17': 4, '2020-02-24': 1, '2020-03-02': 0}},

         {name: 'Baseline Remaining Tasks', data: {'2020-01-06': 16, '2020-01-13': 14, '2020-01-20': 12, '2020-01-12': 10, '2020-01-27': 8,
                                                   '2020-02-03': 3, '2020-02-10': 3, '2020-02-17': 3, '2020-02-24': 1, '2020-03-02': 0}}
      ],

    this.pieChartData_3 =   [ ['Remaining Actual Tasks (h)', 10], ['Remaining Tasks (h)',5],  ['Baseline Remaining Tasks', 5]]
    },
    
    updateChart_4() {
    this.lineChartData_4 = [
         {name: 'Remaining Actual Tasks',   data: {'2020-01-06': 12, '2020-01-13': 12, '2020-01-20': 10, '2020-01-12': 10, '2020-01-27': 10,
                                                   '2020-02-03': 8, '2020-02-10': 3, '2020-02-17': 3, '2020-02-24': 2, '2020-03-02': 0}},

         {name: 'Remaining Tasks',          data: {'2020-01-06': 17, '2020-01-13': 15, '2020-01-20': 14, '2020-01-12': 11, '2020-01-27': 10,
                                                   '2020-02-03': 10, '2020-02-10': 8, '2020-02-17': 4, '2020-02-24': 1, '2020-03-02': 0}},

         {name: 'Baseline Remaining Tasks', data: {'2020-01-06': 16, '2020-01-13': 14, '2020-01-20': 12, '2020-01-12': 10, '2020-01-27': 8,
                                                   '2020-02-03': 3, '2020-02-10': 3, '2020-02-17': 3, '2020-02-24': 1, '2020-03-02': 0}}
      ],

    this.pieChartData_4 =   [ ['Remaining Actual Tasks (h)', 8], ['Remaining Tasks (h)',5],  ['Baseline Remaining Tasks', 5]]
    }
    
  }


}

</script>
