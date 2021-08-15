import Vue from 'vue';
import Vuetify from 'vuetify/lib';
// import fa from 'vuetify/es5/locale/fa';
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '../assets/main.scss'

Vue.use(Vuetify);

// Vuetify.config.silent = true

export default new Vuetify({
  rtl: true,
  theme: {
    themes: {
      light: {
        primary: '#EA3F86',
        secondary: '#a2a2a2',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        light: '#f334'
      },
    },
  },
});