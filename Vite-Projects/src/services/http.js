import axios from 'axios'

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
/*
import axios from 'axios'
//const DEV = process.env.NODE_ENV !== 'production'
const DEV_BASE_URL = 'https://online3.superoffice.com/Cust28294/CS/scripts/customer.fcgi?'
//const PROD_BASE_URL = ''
const envParams = {
  _sf: 0,
  action: 'safeParse',
  includeId: 'economy-endpoint',
  key: 'En4gPkdgoNm0eone'
}
const http = axios.create({
  DEV_BASE_URL,
  xsrfCookieName: '',
  xsrfHeaderName: ''
})
const formify = data => {
  const formData = new FormData()
  for (const key in data) {
    const value = typeof data[key] === 'object' ? JSON.stringify(data[key]) : data[key]
    formData.append(key, value)
  }
  return formData
}
export default {
  get(project_id, method) {
    const params = {
      ...envParams,
      project_id,
      method
    }
    return http({
      url: DEV_BASE_URL,
      params
    })
  },
  getCache(method) {
    const params = {
      ...envParams,
      method
    }
    return http({
      url: DEV_BASE_URL,
      params
    })
  },
  saveLine(method, data) {
    const params = {
      ...envParams,
      method
    }
    return http({
      url: DEV_BASE_URL,
      params,
      method: 'POST',
      data: formify(data)
    })
  },
  deleteLine(method, _id) {
    const params = {
      ...envParams,
      method,
      _id
    }
    return http({
      url: DEV_BASE_URL,
      params,
      method: 'POST'
    })
  },
  saveAll(method, data) {
    const params = {
      ...envParams,
      method
    }
    return http({
      url: DEV_BASE_URL,
      params,
      method: 'POST',
      data: formify(data)
    })
  },
}
*/