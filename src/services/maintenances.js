import axios from 'axios'
const baseUrl = 'http://localhost:8080/maintenances'

const getOne = (id) => {
  const request = axios.get(`${baseUrl}/${id}`)
  return request
    .then(response => response.data)
    .catch(error => console.log(`Maintenance with id ${id} not found`))
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getAllPageable = (page, items, deviceId) => {
  const request = axios.get(`${baseUrl}/paginated?page=${page-1}&items=${items}&deviceId=${deviceId}`)
  return request.then(response => response.data)
}

const getByDeviceId = async id => {
  const request = axios.get(`${baseUrl}/findbydevice/${id}`)
  return request.then(response => response.data)
}

const create = async newObject => {
  const response = await axios.post(`${baseUrl}/add`, newObject)
  return response.data
}

const update = async newObject => {
  const response = await axios.put(`${baseUrl}/edit`, newObject)
  return response.data
}

const deleteMaintenance = async id => {
  const response = await axios.delete(`${baseUrl}/delete/${id}`)
  return response.data
}

export default { getOne, getAll, getAllPageable, getByDeviceId, create, update, deleteMaintenance }