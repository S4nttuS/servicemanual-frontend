import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllFactoryDevices } from './reducers/factoryDeviceReducer'
import { getAllMaintenances } from './reducers/maintenanceReducer'
import FactoryDeviceForm from './components/FactoryDeviceForm'
import MaintenanceForm from './components/MaintenanceForm'
import MaintenanceTable from './components/MaintenanceTable'
import FactoryDeviceTable from './components/FactoryDeviceTable'
import { Container, Divider, Header } from 'semantic-ui-react'


const App = (props) => {
  useEffect(() => {
    props.getAllFactoryDevices()
    props.getAllMaintenances()
  }, [] )

  console.log(props.factoryDevices)

  return (
    <Container textAlign='justified'>
      <Header as="h1">Servicemanual</Header>
      <FactoryDeviceTable factoryDevices={props.factoryDevices} />
      <FactoryDeviceForm />
      <MaintenanceTable maintenances={props.maintenances} />
      <MaintenanceForm />
    </Container>
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
