import api from './apiConfig'

export const addTag = async (tagData) => {
  const res = await api.post(`/tag`, tagData)
  return res.data
}

export const getTags = async () => {
  const res = await api.get(`/tag`)
  return res.data
}

export const getTag = async (id) => {
  const res = await api.get(`/tag/${id}`)
  return res.data
}

export const deleteTag = async (id) => {
  const res = await api.delete(`/tag/${id}`)
  return res.data
}

export const updateTag = async (id, tagData) => {
  const res = await api.put(`/tag/${id}`, tagData)
  return res.data
}
