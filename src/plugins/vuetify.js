import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify, {
  iconfont: 'mdi'
});

export default new Vuetify({
  theme: {
    dark:true,
    themes: {
      dark: {
        primary: '#4b2e83',
        secondary: '#b7a57a',
        accent: '#85754d'
      }
    }
  },
});
