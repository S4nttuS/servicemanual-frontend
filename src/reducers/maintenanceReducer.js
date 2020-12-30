import maintenanceService from '../services/maintenances'

const maintenanceReducer = (state = [], action) => {
  switch (action.type) {
  case 'ALL_MAINTENANCES':
    return action.data
  case 'ALL_MAINTENANCES_PAGEABLE':
    return action.data
  case 'ALL_MAINTENANCES_BY_DEVICE':
    return action.data
  case 'NEW_MAINTENANCE':
    return state.concat(action.data)
  case 'UPDATE_MAINTENANCE':
    return state
      .map(maintenance => maintenance.id === action.data.id ? action.data : maintenance)
  case 'DELETE_MAINTENANCE':
    return state.filter(maintenance => maintenance.id !== action.data)
  default:
    return state
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

export const getAllMaintenancesPageable = (page, items) => {
  return async dispatch => {
    const maintenances = await maintenanceService.getAllPageable(page, items)
    
    dispatch({
      type: 'ALL_MAINTENANCES_PAGEABLE',
      data: maintenances.content
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