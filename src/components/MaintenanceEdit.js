import React from 'react'
import { updateMaintenance } from '../reducers/maintenanceReducer'
import { Form, Header, Button } from 'semantic-ui-react'
import { useField } from '../hooks'
import { connect } from 'react-redux'

const MaintenanceEdit = ({ maintenance, updateMaintenance }) => {
  const deviceId = useField('number', maintenance.deviceId)
  const entryDate = useField('date', maintenance.entryDate)
  const description = useField('text', maintenance.description)
  const criticality = useField('number', maintenance.criticality)
  const status = useField('number', maintenance.status)

  const handleUpdate = async (event) => {
    console.log(`Updating a maintenance job.`)
    
    const maintenanceObject = {
      id: maintenance.id,
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
    window.location.reload();
  }

  return(
    <Form onSubmit = {handleUpdate}>
      <Header as="h3"> Update a maintenance job</Header>
      <Form.Field>
        <label>Device id</label>
        <input id="deviceId"  {...deviceId.bind} />      
      </Form.Field>
      <Form.Field>
        <label>Entry date</label>
        <input id="entryDate" {...entryDate.bind} />      
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <input id="description" {...description.bind} />      
      </Form.Field>
      <Form.Field>
        <label>Criticality</label>
        <input id="criticality" {...criticality.bind} />      
      </Form.Field>
      <Form.Field>
        <label>Status</label>
        <input id="status" {...status.bind} />      
      </Form.Field>
      <Button type = "submit">Update</Button>
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