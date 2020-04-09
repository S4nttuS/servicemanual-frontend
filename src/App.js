import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getAllFactoryDevices } from './reducers/factoryDeviceReducer'
import { getAllMaintenances } from './reducers/maintenanceReducer'
import FactoryDeviceForm from './components/FactoryDeviceForm'
import MaintenanceForm from './components/MaintenanceForm'
import MaintenanceTable from './components/MaintenanceTable'
import FactoryDeviceTable from './components/FactoryDeviceTable'

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
      <FactoryDeviceForm />
      <MaintenanceTable maintenances={props.maintenances} />
      <MaintenanceForm />
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
