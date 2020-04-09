import factoryDeviceService from '../services/factoryDevices'

const factoryDeviceReducer = (state = [], action) => {
  switch (action.type) {
  case 'ALL_FACTORYDEVICES':
    return action.data
  case 'NEW_FACTORYDEVICE':
    return state.concat(action.data)
  case 'UPDATE_FACTORYDEVICE':
    return state
  case 'DELETE_FACTORYDEVICE':
    return state.filter(factoryDevice => factoryDevice.id !== action.data)
  default:
    return state
  }
}

export const getAllFactoryDevices = () => {
  return async dispatch => {
    const factoryDevices = await factoryDeviceService.getAll()

    dispatch({
      type: 'ALL_FACTORYDEVICES',
      data: factoryDevices
    })
  }
}

export const createFactoryDevice = content => {
  return async dispatch => {
    const newfactoryDevice = await factoryDeviceService.create(content)

    dispatch({
      type: 'NEW_FACTORYDEVICE',
      data: newfactoryDevice
    })
  }
}

export const deleteFactoryDevice = id => {
  return async dispatch => {
    await factoryDeviceService.deleteFactoryDevice(id)
    
    dispatch({
      type: 'DELETE_FACTORYDEVICE',
      data: id
    })
  }
}

export default factoryDeviceReducer