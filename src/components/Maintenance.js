import React from 'react'
import { connect } from 'react-redux'
import { deleteMaintenance } from '../reducers/maintenanceReducer'

const Maintenance = ({maintenance, deleteMaintenance}) => {
  const handleDelete = () => {
    if (window.confirm(`Delete maintenance job ${maintenance.id}?`) === true) {
      console.log(`Deleting a maintenance job ${maintenance.id}`)
      deleteMaintenance(maintenance.id)
    }
  }

  return (
    <div>
      <div id={maintenance.id}>
        {maintenance.id} {maintenance.deviceId} {maintenance.entryDate} {maintenance.description}{maintenance.criticality}{maintenance.status}
      
        <button onClick={handleDelete}>Delete</button>
      
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  deleteMaintenance
}

export default connect(
  null,
  mapDispatchToProps
)(Maintenance)