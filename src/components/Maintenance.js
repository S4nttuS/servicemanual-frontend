import React from 'react'
import { connect } from 'react-redux'
import { deleteMaintenance, getAllMaintenancesPageable } from '../reducers/maintenanceReducer'
import { Table, Button, Modal } from 'semantic-ui-react'
import Moment from 'react-moment';
import MaintenanceEdit from '../components/MaintenanceEdit'

const Maintenance = ({ 
  maintenance, 
  page,
  pageDropdown,
  id,
  deleteMaintenance, 
  getAllMaintenancesPageable
}) => {
  const handleDelete = async () => {
    if (window.confirm(`Delete maintenance job ${maintenance.id}?`) === true) {
      console.log(`Deleting a maintenance job ${maintenance.id}`)
      await deleteMaintenance(maintenance.id)
      getAllMaintenancesPageable(page, pageDropdown, id)
    }
  }

  return (
    <Table.Row>
      <Table.Cell onClick={() => window.location.href= `/maintenances/${maintenance.id}`} style={{ cursor: 'pointer' }}>
          {maintenance.id}
      </Table.Cell>
      <Table.Cell>
          {maintenance.deviceId}
      </Table.Cell>
      <Table.Cell>
        <Moment format="DD.MM.YYYY">{maintenance.entryDate}</Moment>
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
  deleteMaintenance,
  getAllMaintenancesPageable
}

export default connect(
  null,
  mapDispatchToProps
)(Maintenance)