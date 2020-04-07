import maintenanceService from '../services/maintenances'

const maintenanceReducer = (state = [], action) => {
  switch (action.type) {
  case 'ALL_MAINTENANCES':
    return action.data
  case 'NEW_MAINTENANCE':
    return state.concat(action.data)
  case 'UPDATE_MAINTENANCE':
    return state
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

export const createMaintenance = (content) => {
  return async dispatch => {
    const newMaintenance = await maintenanceService.create(content)

    dispatch({
      type: 'NEW_MAINTENANCE',
      data: newMaintenance
    })
  }
}

export const removeMaintenance = id => {
    console.log(id)
  return async dispatch => {
    console.log(id)
    const maintenance = await maintenanceService.deleteMaintenance(id)
    console.log(id)
    dispatch({
      type: 'DELETE_MAINTENANCE',
      data: id
    })
  }
}

export default maintenanceReducer