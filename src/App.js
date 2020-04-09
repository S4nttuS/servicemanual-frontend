import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllFactoryDevices } from './reducers/factoryDeviceReducer'
import { getAllMaintenances } from './reducers/maintenanceReducer'
import MaintenanceTable from './components/MaintenanceTable'
import MaintenanceForm from './components/MaintenanceForm'
import FactoryDeviceTable from './components/FactoryDeviceTable'
import FactoryDeviceForm from './components/FactoryDeviceForm'
import { Container, Header, Divider } from 'semantic-ui-react'


const App = (props) => {
  useEffect(() => {
    props.getAllFactoryDevices()
    props.getAllMaintenances()
  }, [] )

  console.log(props.factoryDevices)

  return (
    <Container>
      <Header as="h1">Servicemanual</Header>

      <Header as="h2">Factory devices</Header>
      <FactoryDeviceTable factoryDevices={props.factoryDevices} />
      <FactoryDeviceForm />

      <Divider horizontal>&</Divider>

      <Header as="h2">Maintenance jobs</Header>
      <MaintenanceTable maintenances={props.maintenances} />
      <MaintenanceForm />
    </Container>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    factoryDevices: state.factoryDevices,
    maintenances: state.maintenances,
    toggle: state.toggle
  }
}

export default connect(
  mapStateToProps,
  {
    getAllFactoryDevices,
    getAllMaintenances
  }
)(App)
