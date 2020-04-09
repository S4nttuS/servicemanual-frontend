import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import factoryDeviceReducer from './reducers/factoryDeviceReducer'
import maintenanceReducer from './reducers/maintenanceReducer'

const reducer = combineReducers({
    factoryDevices: factoryDeviceReducer,
    maintenances: maintenanceReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
)

export default store