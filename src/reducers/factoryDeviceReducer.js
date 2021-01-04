import factoryDeviceService from '../services/factoryDevices'

const factoryDeviceReducer = (state = { factoryDevices: [], totalPages: 0, ids: [] }, action) => {
  switch (action.type) {
  case 'ALL_FACTORYDEVICES':
    return { ...state, ids: action.data.map(device => device.id )}
  case 'ALL_FACTORYDEVICES_PAGEABLE':
    return { ...state, factoryDevices: action.data.content, totalPages: action.data.totalPages }
  case 'NEW_FACTORYDEVICE':
    return { ...state, factoryDevices: state.factoryDevices.concat(action.data) }
  case 'UPDATE_FACTORYDEVICE':
    return { ...state, factoryDevices: state.factoryDevices
      .map(factoryDevice => factoryDevice.id === action.data.id ? action.data : factoryDevice)
    }
  case 'DELETE_FACTORYDEVICE':
    return { ...state, factoryDevices: state.factoryDevices.filter(factoryDevice => factoryDevice.id !== action.data) }
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

export const getAllFactoryDevicesPageable = (page, items) => {
  return async dispatch => {
    const factoryDevices = await factoryDeviceService.getAllPageable(page, items)

    dispatch({
      type: 'ALL_FACTORYDEVICES_PAGEABLE',
      data: factoryDevices
    })
  }
}

export const createFactoryDevice = content => {
  return async dispatch => {
    const newFactoryDevice = await factoryDeviceService.create(content)

    dispatch({
      type: 'NEW_FACTORYDEVICE',
      data: newFactoryDevice
    })
  }
}

export const updateFactoryDevice = content => {
  console.log(content)
  return async dispatch => {
    const editedFactoryDevice = await factoryDeviceService.update(content)

    dispatch ({
      type: 'UPDATE_FACTORYDEVICE',
      data: editedFactoryDevice
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