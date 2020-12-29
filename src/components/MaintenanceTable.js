import React, {useState } from 'react'
import Maintenance from '../components/Maintenance'
import { Table, Container, Header, Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getAllMaintenances, getMaintenancesByDeviceId } from '../reducers/maintenanceReducer'

const MaintenanceTable = ({
  factoryDevices, 
  maintenances, 
  getAllMaintenances, 
  getMaintenancesByDeviceId
}) => {
  const [dropdown, setDropdown] = useState('')

  const handleChange = (event, { value }) => {
    setDropdown(value)
    if (!factoryDevices.find(f => f.id === value))
      getAllMaintenances()
    else
      getMaintenancesByDeviceId(value)
  }

  return (
    <Container>
      <Header as="h2">Maintenance jobs</Header>
      Find maintenance jobs for a device: 
      <Dropdown placeholder="id"
        onChange={handleChange}
        value={dropdown}
        search 
        selection
        options={[{ text: "all", key: 0, value: 0 }].concat(
          factoryDevices.map(f =>
            f = { text: f.id, key: f.id, value: f.id })
          )
        }
      />
      
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Id</Table.HeaderCell>
          <Table.HeaderCell>Device id</Table.HeaderCell>
          <Table.HeaderCell>Entry date</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Criticality</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body >
        {maintenances.map(m =>
          <Maintenance key={m.id} maintenance={m} />
        )}
      </Table.Body>
    </Table>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    factoryDevices: state.factoryDevices,
    maintenances: state.maintenances
  }
}

const mapDispatchToProps = {
  getAllMaintenances,
  getMaintenancesByDeviceId
}

export default connect(mapStateToProps, mapDispatchToProps)(MaintenanceTable)
