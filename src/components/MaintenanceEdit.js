import React from 'react'
import { updateMaintenance } from '../reducers/maintenanceReducer'
import { Form, Button } from 'semantic-ui-react'
import { useField } from '../hooks'
import { connect } from 'react-redux'


const MaintenanceEdit = ({ maintenance, updateMaintenance }) => {
  const deviceId = useField('number')
  const entryDate = useField('date')
  const description = useField('text')
  const criticality = useField('number')
  const status = useField('number')

  const handleUpdate = async (event) => {
    event.preventDefault()
    console.log(`Updating maintenance job with id ${maintenance.id}.`)
    
    const maintenanceObject = {
      deviceId: deviceId.value,
      entryDate: entryDate.value,
      description: description.value,
      criticality: criticality.value,
      status: status.value
    }

    await updateMaintenance(maintenanceObject)
    deviceId.reset()
    entryDate.reset()
    description.reset()
    criticality.reset()
    status.reset()
  }

  return(
    <Form onSubmit = {handleUpdate}>
      <h3> Update a maintenance job</h3>
      <Form.Field>
        <label>Device id</label>
        <input id="deviceId" defaultValue={maintenance.deviceId} {...deviceId.bind} />      
      </Form.Field>
      <Form.Field>
        <label>Entry date</label>
        <input id="entryDate" {...entryDate.bind} value={maintenance.entryDate} />      
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <input id="description" {...description.bind} value={maintenance.description} />      
      </Form.Field>
      <Form.Field>
        <label>Criticality</label>
        <input id="criticality" {...criticality.bind} value={maintenance.criticality} />      
      </Form.Field>
      <Form.Field>
        <label>Status</label>
        <input id="status" {...status.bind} value={maintenance.status} />      
      </Form.Field>
      <Button type = "submit">Add</Button>
    </Form>
  )
}

const mapDispatchToProps = {
  updateMaintenance
}

export default connect(
  null,
  mapDispatchToProps
)(MaintenanceEdit)