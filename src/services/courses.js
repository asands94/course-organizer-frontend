import api from './apiConfig'

export const addCourse = async (courseData) => {
  const res = await api.post(`/course`, courseData)
  return res.data
}

export const getCourses = async () => {
  const res = await api.get(`/course`)
  return res.data
}

export const getCourse = async (id) => {
  const res = await api.get(`/course/${id}`)
  return res.data
}

export const deleteCourse = async (id) => {
  const res = await api.delete(`/course/${id}`)
  return res.data
}

export const updateCourse = async (id, courseData) => {
  const res = await api.put(`/course/${id}`, courseData)
  return res.data
}

export const addTagToCourse = async (courseId, tagId) => {
  const res = await api.post(`/course/${courseId}/${tagId}`)
  return res.data
}
