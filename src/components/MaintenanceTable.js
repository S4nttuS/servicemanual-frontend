import React, { useState } from 'react'
import Maintenance from '../components/Maintenance'
import { Table, Container, Header, Dropdown  } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getAllMaintenancesPageable } from '../reducers/maintenanceReducer'
import TablePagination from './TablePagination'

const MaintenanceTable = ({
  ids, 
  maintenances, 
  totalPages,
  getAllMaintenancesPageable
}) => {
  const [dropdown, setDropdown] = useState(0)
  const [page, setPage] = useState(1)
  const [pageDropdown, setPageDropdown] = useState(5)

  const handleChange = (e, { value }) => {
    setDropdown(value)
    getAllMaintenancesPageable(page, pageDropdown, value)
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
          ids.map(id =>
            id = { text: id, key: id, value: id })
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
      <TablePagination
        page={page}
        setPage={setPage}
        pageDropdown={pageDropdown}
        setPageDropdown={setPageDropdown}
        totalPages={totalPages}
        getAllPageable={getAllMaintenancesPageable}
        id={dropdown}
      />
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    ids: state.factoryDevices.ids,
    maintenances: state.maintenances.maintenances,
    totalPages: state.maintenances.totalPages
  }
}

const mapDispatchToProps = {
  getAllMaintenancesPageable
}

export default connect(mapStateToProps, mapDispatchToProps)(MaintenanceTable)
