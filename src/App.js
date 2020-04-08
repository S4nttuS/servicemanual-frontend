import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getAllFactoryDevices } from './reducers/factoryDeviceReducer'
import { getAllMaintenances } from './reducers/maintenanceReducer'
import MaintenanceForm from './components/MaintenanceForm'
import Maintenance from './components/Maintenance'
import { deleteFactoryDevice } from './reducers/factoryDeviceReducer'

const App = (props) => {

  useEffect(() => {
    props.getAllFactoryDevices()
    props.getAllMaintenances()
  }, [] )

  console.log(props.factoryDevices)

  return (
    <div>
      <h1>Servicemanual</h1>
      <FactoryDeviceTable factoryDevices={props.factoryDevices} />
      <MaintenanceTable maintenances={props.maintenances} />
      <MaintenanceForm createMaintenance={props.createMaintenance}/>
    </div>
  )
}

const FactoryDevice = ({factoryDevice}) => {
  const handleDelete = () => {
    if (window.confirm(`Delete factory device ${factoryDevice.id}?`) === true) {
      console.log(`Deleting a factory device ${factoryDevice.id}`)
      deleteFactoryDevice(factoryDevice.id)
    }
  }

  return (
    <div>
      <div>
        {factoryDevice.id} {factoryDevice.name} {factoryDevice.year} {factoryDevice.type}
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

const FactoryDeviceTable = ({factoryDevices}) => {
  return (
    <div>
      {factoryDevices.map(f => 
        <div key={f.id}> 
          <FactoryDevice factoryDevice={f}/>
        </div>
      )}
    </div>
  )
}

const MaintenanceTable = ({maintenances}) => {
  return (
    <div>
      {maintenances.map(m =>
        <div key={m.id}>  
          <Maintenance maintenance={m}/>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    factoryDevices: state.factoryDevices,
    maintenances: state.maintenances
  }
}

export default connect(
  mapStateToProps,
  {
    getAllFactoryDevices,
    getAllMaintenances
  }
)(App)
