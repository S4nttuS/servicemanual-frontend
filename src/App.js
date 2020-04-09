import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Container, Header, Divider, Dropdown } from 'semantic-ui-react'
import { getAllFactoryDevices } from './reducers/factoryDeviceReducer'
import { getAllMaintenances, getMaintenancesByDeviceId } from './reducers/maintenanceReducer'

import FactoryDeviceTable from './components/FactoryDeviceTable'
import FactoryDeviceForm from './components/FactoryDeviceForm'
import MaintenanceTable from './components/MaintenanceTable'
import MaintenanceForm from './components/MaintenanceForm'


const App = (props) => {
  const [dropdown, setDropdown] = useState('')

  useEffect(() => {
    props.getAllFactoryDevices()
    props.getAllMaintenances()
  }, [] )

  const handleChange = (event, { value }) => {
    setDropdown(value)
    if (!props.factoryDevices.find(f => f.id === value))
      props.getAllMaintenances()
    else
      props.getMaintenancesByDeviceId(value)
  }

  return (
    <Container>
      <Header as="h1">Servicemanual</Header>

      <Header as="h2">Factory devices</Header>
      <FactoryDeviceTable factoryDevices={props.factoryDevices} />
      <FactoryDeviceForm />

      <Divider horizontal>&</Divider>

      <Header as="h2">Maintenance jobs</Header>
      Find maintenance jobs for a device:
      <Dropdown placeholder="id"
        onChange={handleChange}
        value={dropdown}
        search 
        selection
        options={[{ text: "all", key: 0, value: 0 }].concat(
          props.factoryDevices.map(f =>
            f = { text: f.id, key: f.id, value: f.id })
          )
        }
      />
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
    getAllMaintenances,
    getMaintenancesByDeviceId
  }
)(App)
