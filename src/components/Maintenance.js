import React from 'react'
import { connect } from 'react-redux'
import { deleteMaintenance } from '../reducers/maintenanceReducer'
import { Table, Button, Modal } from 'semantic-ui-react'
import MaintenanceEdit from '../components/MaintenanceEdit'

const Maintenance = ({ maintenance, deleteMaintenance }) => {
  const handleDelete = () => {
    if (window.confirm(`Delete maintenance job ${maintenance.id}?`) === true) {
      console.log(`Deleting a maintenance job ${maintenance.id}`)
      deleteMaintenance(maintenance.id)
    }
  }

  return (
    <Table.Row onClick={() => window.location.href= `/maintenances/${maintenance.id}` }>
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
      <Table.Cell>
        <Modal trigger={<Button>Update</Button>}>
          <Modal.Content>
            <MaintenanceEdit maintenance={maintenance} />
          </Modal.Content>
        </Modal>
        <Button secondary onClick={handleDelete}>Delete</Button>
      </Table.Cell>
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