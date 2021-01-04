import maintenanceService from '../services/maintenances'

const maintenanceReducer = (state = { maintenances: [], totalPages: 0, maintenance: {} }, action) => {
  switch (action.type) {
    case 'ONE_MAINTENANCE':
      return { ...state, maintenance: action.data }
  case 'ALL_MAINTENANCES':
    return { ...state, maintenances: action.data }
  case 'ALL_MAINTENANCES_PAGEABLE':
    return { ...state, maintenances: action.data.content, totalPages: action.data.totalPages }
  case 'ALL_MAINTENANCES_BY_DEVICE':
    return { ...state, maintenances: action.data }
  case 'NEW_MAINTENANCE':
    return { ...state, maintenances: state.maintenances.concat(action.data) }
  case 'UPDATE_MAINTENANCE':
    return { ...state, maintenances: state.maintenances
      .map(maintenance => maintenance.id === action.data.id ? action.data : maintenance)
    }
  case 'DELETE_MAINTENANCE':
    return { 
      ...state, 
      maintenances: state.maintenances.filter(maintenance => maintenance.id !== action.data),
      maintenance: state.maintenance.id === action.data ? undefined : state.maintenance 
    }
  default:
    return state
  }
}

export const getMaintenance = (id) => {
  return async dispatch => {
    const maintenance = await maintenanceService.getOne(id)

    dispatch({
      type: 'ONE_MAINTENANCE',
      data: maintenance
    })
  }
}

export const getAllMaintenances = () => {
  return async dispatch => {
    const maintenances = await maintenanceService.getAll()

    dispatch({
      type: 'ALL_MAINTENANCES',
      data: maintenances
    })
  }
}

export const getAllMaintenancesPageable = (page, items, deviceId) => {
  return async dispatch => {
    const maintenances = await maintenanceService.getAllPageable(page, items, deviceId)

    dispatch({
      type: 'ALL_MAINTENANCES_PAGEABLE',
      data: maintenances
    })
  }
}

export const getMaintenancesByDeviceId = id => {
  return async dispatch => {
    const maintenances = await maintenanceService.getByDeviceId(id)

    dispatch({
      type: 'ALL_MAINTENANCES_BY_DEVICE',
      data: maintenances
    })
  }
}

export const createMaintenance = content => {
  return async dispatch => {
    const newMaintenance = await maintenanceService.create(content)
    
    dispatch({
      type: 'NEW_MAINTENANCE',
      data: newMaintenance
    })
  }
}

export const updateMaintenance = content => {
  console.log(content)
  return async dispatch => {
    const editedMaintenance = await maintenanceService.update(content)

    dispatch ({
      type: 'UPDATED_MAINTENANCE',
      data: editedMaintenance
    })
  }
}

export const deleteMaintenance = id => {
  return async dispatch => {
    await maintenanceService.deleteMaintenance(id)
    
    dispatch({
      type: 'DELETE_MAINTENANCE',
      data: id
    })
  }
}

export default maintenanceReducer