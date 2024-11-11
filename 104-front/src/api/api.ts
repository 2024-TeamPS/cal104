import axios from 'axios'

const DOMAIN = 'http://localhost:8081'

const API = axios.create({
  baseURL: `${DOMAIN}/api`,
  withCredentials: true,
})

export default API
