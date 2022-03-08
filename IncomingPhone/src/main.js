import { createApp } from 'vue'
import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

Vue.config.productionTip = false

// Method for getting value of the named cookie.
function getCookie(name) {
    let cookie = {}
    document.cookie.split(';').forEach(function(el) {
        let [k, v] = el.split('=')
        cookie[k.trim()] = v
    })
    return cookie[name]
}
/* 
 * Configure Axios and SuperOffice authentication
 */
axios.defaults.headers.common["Accept"] = 'application/json'
axios.defaults.headers.common["SO-Language"] = 'nb-no'

if (process.env.NODE_ENV == 'development') {
    const {
        VUE_APP_BASE_URL: BASE_URL,
        VUE_APP_USERNAME: USERNAME,
        VUE_APP_PASSWORD: PASSWORD
    } = process.env
    if ([BASE_URL, USERNAME, PASSWORD].some(i => !i)) {
        throw Error(`Missing one of [VUE_APP_BASE_URL, VUE_APP_USERNAME, VUE_APP_PASSWORD] in required project root file '.env.development'`)
    }
    axios.defaults.baseURL = BASE_URL
        // For local development Basic authorization is used against a local SuperOffice.
    axios.defaults.headers.common['Authorization'] = `Basic ${btoa(`${USERNAME}:${PASSWORD}`)}`
} else {
  /*
   * For SOD/Online the build files must be uploaded as Documents, so that we are hosted on the same domain, and served via a CRMScript.
   * This allows us to use the Cookies and XSRF token from the currently logged in session in SuperOffice.
   * No CustomApp client_id/client_secret is needed when using this setup.
   */
  axios.defaults.headers.common['X-XSRF-TOKEN'] = getCookie('XSRF-TOKEN')
  const cust = /Cust\d{5}/.exec(window.location.href).shift()
  const baseURL = `/${cust}`

  axios.defaults.baseURL = baseURL
}

// Define HTTP Routing
const routes = 
[
    {
        path: '/',
        name: 'phone',
        component: App
    },
    {
        path: '&phone',
        name: 'phone',
        component: App
    },
]
// Configure Vue Router
const router = createRouter({
  history:createWebHistory(),
  routes
})
export default router

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')