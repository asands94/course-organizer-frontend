import api from './apiConfig'

export const addCourse = async (courseData) => {
  const res = await api.post(`/course`, courseData)
  return res.data
}

export const getCourses = async () => {
  const res = await api.get(`/course`)
  return res.data
}
