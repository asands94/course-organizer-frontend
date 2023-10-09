import apiUrl from './apiConfig'
import axios from 'axios'

export const signUp = (credentials) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/sign-up',
    data: {
      username: credentials.username,
      email: credentials.email,
      password: credentials.password,
    },
  })
}

export const signIn = (credentials) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/sign-in',
    data: {
      username: credentials.username,
      password: credentials.password,
    },
  })
}

export const verify = () => {
  const token = localStorage.getItem('token')
  if (token) {
    const res = axios.get('/verify')
    return res.data
  } else {
    return false
  }
}
