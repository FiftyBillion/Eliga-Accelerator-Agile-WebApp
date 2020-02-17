<template>
    <v-container>
      <v-slide-y-transition mode="out-in">
          <v-layout row wrap align-center>
            <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg4 offset-lg4>
              <v-card style="margin-bottom:200px;">
                <div class="pa-3">
                    <v-img src="../assets/EligaLogo.png" class="mx-auto" max-height="160" max-width="130"></v-img>
                </div>
                <hr>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">Eliga Agile Project Management</h3><br>
                    <div>Welcome to Eliga Management Tool!                         
                      <br><br>
                      Please login to continue
                      <br>
                    </div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn @click="auth0Login()" class="mx-auto">Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-slide-y-transition>
      </v-container>
</template>

<script>
export default {
  name: 'LogIn',
  methods: {
      auth0Login(){
          this.$store.dispatch('auth0Login');

      }
  }
  

}
</script>
