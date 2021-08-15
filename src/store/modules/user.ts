import axios from 'axios'
import router from 'vue-router'

const user = {
  state: {
    // profile: ''
  },

  mutations: {
  },

  actions: {
    // getUser({
    //   commit
    // }) {
    //   axios.get('https://accounts.frotel.com/api/user/profile', {
    //     headers: {
    //       Authorization: "Bearer " + getToken()
    //     }
    //   }).then(res => {
    //     var decode = VueJwtDecode.decode(getToken());
    //     var is_admin = decode.roles.includes('SUPER_ADMIN' || 'FINANCIAL_ADMIN');
    //     commit('SET_PROFILE', res.data.data)
    //     localStorage.setItem('__client__', is_admin || 0)
    //     commit('SET_ADMIN', is_admin)
    //   }).catch(() => {
    //     removeToken();
    //     router.push({
    //       name: "login"
    //     });
    //   })
    // },
  }
};

export default user