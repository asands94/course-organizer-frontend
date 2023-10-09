import api from './apiConfig'
import jwtDecode from 'jwt-decode'

export const signUp = async (credentials) => {
  const res = await api.post('/sign-up', credentials)
  localStorage.setItem('token', res.data.token)
  let user = jwtDecode(res.data.token)
  return user
}

export const signIn = async (credentials) => {
  const res = await api.post('/sign-in', credentials)
  localStorage.setItem('token', res.data.token)
  let user = jwtDecode(res.data.token)
  return user
}

export const verify = () => {
  const token = localStorage.getItem('token')
  if (token) {
    const res = api.get('/verify')
    return res.data
  } else {
    return false
  }
}
