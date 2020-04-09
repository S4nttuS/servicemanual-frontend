import axios from 'axios'
const baseUrl = 'http://localhost:8080/factorydevices'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async newObject => {
  const response = await axios.post(`${baseUrl}/add`, newObject)
  return response.data
}

const update = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/edit`, newObject)
  return response.data
}

const deleteFactoryDevice = async id => {
  const response = await axios.delete(`${baseUrl}/delete/${id}`)
  return response.data
}

export default { getAll, create, update, deleteFactoryDevice }