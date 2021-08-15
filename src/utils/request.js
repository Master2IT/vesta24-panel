import Vue from 'vue'
import config from '@/config/config'
import axios from 'axios'
import {
  EventBus
} from "@/utils/event-bus.js";
import {
  getToken,
} from '@/utils/auth'

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// create an axios instance
const service = axios.create({
  baseURL: config.base_url, // api base_url
  timeout: 120000, // request timeout,
});
// request interceptor
service.interceptors.request.use(
  reqConfig => {
    // Do something before request is sent
    if (getToken()) {
      reqConfig.headers['Authorization'] = 'Bearer ' + getToken();
      reqConfig.headers['Access-Control-Allow-Origin'] = '*';
      reqConfig.headers['Access-Control-Allow-Credentials'] = true;
      if (!config.frotel_panel) {
        var key = 'store_id'
        var store_id = getCookie(key)
        if (store_id) {
          if (!config.hasOwnProperty('params')) {
            reqConfig.params = {
              ...reqConfig.params,
              store_id: parseInt(store_id)
            }
          } else {
            reqConfig.params.store_id = parseInt(store_id)
          }
        }
      }
    }

    return reqConfig
  },
  error => {
    // Do something with request error
    Promise.reject(error)
  }
);

// response interceptor
service.interceptors.response.use(
  response => {

    if (response.status === 401) {
      // auto logout if 401 response returned from api
      // removeToken();
      // window.location.href = "/account"
      // location.reload(true);
    }

    if (!response.data.error)
      return Promise.resolve(response.data);

    const error = response.statusText;
    EventBus.$emit('setSnack', {
      text: error.message ? error.message : error,
      color: 'red'
    })
    return Promise.reject(error);
  },
  error => {
    // const errorMessage = error.response.data.reason || error.response.data.status || error.response.data.result || error.response.data.message || "مشکلی بوجود امده است";

    if (error.response) {
      if (error.response.status === 401) {
        // auto logout if 401 response returned from api
        // removeToken();
        // window.location.href = "/account"
      }
      // return Promise.reject(error);
    }

    // if (errorMessage == 'Network Error') {
    //   removeToken();
    //   window.location.href = "/account"
    // }

    // if (errorMessage == 'اطلاعات بازاریاب یافت نشد' || errorMessage == 'بازاریابی با این شناسه یافت نشد.') {
    //   removeToken();
    //   window.location.href = "/api/transform"
    // }

    // EventBus.$emit('setSnack', {
    //   text: errorMessage,
    //   color: 'red'
    // })

    return Promise.reject(error)
  }
);

export default service