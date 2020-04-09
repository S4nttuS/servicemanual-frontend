import React from 'react'
import Maintenance from '../components/Maintenance'
import { Table } from 'semantic-ui-react'
import { connect } from 'react-redux'

const MaintenanceTable = ({ maintenances }) => {
  return (
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
      <Table.Body>
        {maintenances.map(m =>
          <Maintenance key={m.id} maintenance={m} />
        )}
      </Table.Body>
    </Table>
  )
}

const mapStateToProps = (state) => {
  return {
    maintenances: state.maintenances
  }
}

export default connect(
  mapStateToProps
)(MaintenanceTable)
