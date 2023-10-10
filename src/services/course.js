import api from './apiConfig'

export const addCourse = async (courseData) => {
  const res = await api.post(`/course`, courseData)
  return res.data
}
