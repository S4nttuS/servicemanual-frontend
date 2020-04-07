import factoryDeviceService from '../services/factoryDevices'

const factoryDeviceReducer = (state = [], action) => {
  switch (action.type) {
  case 'INIT_factoryDeviceS':
    return action.data.sort((a, b) => b.likes - a.likes)
  case 'NEW_factoryDevice':
    return state.concat(action.data)
  case 'UPDATE_factoryDevice':
    return state
      .map(factoryDevice => factoryDevice.id === action.data.id ? action.data : factoryDevice)
      .sort((a, b) => b.likes - a.likes)
  case 'DELETE_factoryDevice':
    return state.filter(factoryDevice => factoryDevice.id !== action.data)
  default:
    return state
  }
}

export const initializefactoryDevices = () => {
  return async dispatch => {
    const factoryDevices = await factoryDeviceService.getAll()

    dispatch({
      type: 'INIT_factoryDeviceS',
      data: factoryDevices
    })
  }
}

export const createfactoryDevice = content => {
  return async dispatch => {
    const newfactoryDevice = await factoryDeviceService.create(content)

    dispatch({
      type: 'NEW_factoryDevice',
      data: newfactoryDevice
    })
  }
}

export const addLike = factoryDevice => {
  return async dispatch => {
    const newfactoryDevice = { ...factoryDevice, likes: factoryDevice.likes + 1 }
    const updatedfactoryDevice = await factoryDeviceService.update(factoryDevice.id, newfactoryDevice)

    dispatch({
      type: 'UPDATE_factoryDevice',
      data: updatedfactoryDevice
    })
  }
}

export const removefactoryDevice = id => {
  return async dispatch => {
    await factoryDeviceService.deletefactoryDevice(id)

    dispatch({
      type: 'DELETE_factoryDevice',
      data: id
    })
  }
}

export const addComment = (id, comment) => {
  return async dispatch => {
    const updatedfactoryDevice = await factoryDeviceService.createComment(id, comment)

    dispatch({
      type: 'UPDATE_factoryDevice',
      data: updatedfactoryDevice
    })
  }
}

export default factoryDeviceReducer