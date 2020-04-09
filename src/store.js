import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import maintenanceReducer from './reducers/maintenanceReducer'
import factoryDeviceReducer from './reducers/factoryDeviceReducer'

const reducer = combineReducers({
    factoryDevices: factoryDeviceReducer,
    maintenances: maintenanceReducer,
})

const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
)

export default store