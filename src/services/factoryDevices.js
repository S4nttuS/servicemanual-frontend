import axios from 'axios'
const baseUrl = '/factorydevices'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async newObject => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

const update = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject)
  return response.data
}

const deletefactoryDevice = async id => {

  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.data
}

const createComment = async (id, comment) => {
  const response = await axios.post(`${baseUrl}/${id}/comments`, comment)
  return response.data
}

export default { getAll, create, update, deletefactoryDevice, createComment}