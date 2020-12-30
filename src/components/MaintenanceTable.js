import React, {useState } from 'react'
import Maintenance from '../components/Maintenance'
import { Table, Container, Header, Dropdown, Input  } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getAllMaintenances, getMaintenancesByDeviceId, getAllMaintenancesPageable } from '../reducers/maintenanceReducer'

const MaintenanceTable = ({
  factoryDevices, 
  maintenances, 
  getAllMaintenances, 
  getMaintenancesByDeviceId,
  getAllMaintenancesPageable
}) => {
  const [dropdown, setDropdown] = useState('')
  const [pageDropdown, setPageDropdown] = useState(5)
  const [input, setInput] = useState(0)

  const handleChange = (e, { value }) => {
    setDropdown(value)
    if (!factoryDevices.find(f => f.id === value))
      getAllMaintenances()
    else
      getMaintenancesByDeviceId(value)
  }

  const handlePageChange = (e, {value}) => {
    setPageDropdown(value)
    getAllMaintenancesPageable(input, value)
  }

  const handleInputChange = (e) => {
    setInput(e.target.value)
    getAllMaintenancesPageable(e.target.value, pageDropdown)
};

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

    <Container>
      <Dropdown
        onChange={handlePageChange}
        value={pageDropdown}
        search
        selection
        options={[5, 10, 20, 50].map(p => p = { text: p, key: p, value: p })}
      />
      <Input
        type="number"
        onChange={(e) =>
          handleInputChange(e)
        }
        value = {input}
      />
    </Container>
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
  getMaintenancesByDeviceId,
  getAllMaintenancesPageable
}

export default connect(mapStateToProps, mapDispatchToProps)(MaintenanceTable)
