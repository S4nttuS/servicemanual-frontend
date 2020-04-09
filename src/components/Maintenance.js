import React from 'react'
import { connect } from 'react-redux'
import { deleteMaintenance } from '../reducers/maintenanceReducer'
import { Table, Button } from 'semantic-ui-react'

const Maintenance = ({maintenance, deleteMaintenance}) => {
  const handleDelete = () => {
    if (window.confirm(`Delete maintenance job ${maintenance.id}?`) === true) {
      console.log(`Deleting a maintenance job ${maintenance.id}`)
      deleteMaintenance(maintenance.id)
    }
  }

  return (
    <Table.Row>
      <Table.Cell>
          {maintenance.id}
      </Table.Cell>
      <Table.Cell>
          {maintenance.deviceId}
      </Table.Cell>
      <Table.Cell>
          {maintenance.entryDate}
      </Table.Cell>
      <Table.Cell>
          {maintenance.description}
      </Table.Cell>
      <Table.Cell>
          {maintenance.criticality}
      </Table.Cell>
      <Table.Cell>
          {maintenance.status}
      </Table.Cell>
      <Button onClick={handleDelete}>Delete</Button>
    </Table.Row>
  )
}

const mapDispatchToProps = {
  deleteMaintenance
}

export default connect(
  null,
  mapDispatchToProps
)(Maintenance)