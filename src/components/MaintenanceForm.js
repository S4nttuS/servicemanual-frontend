import React from 'react'
import { createMaintenance } from '../reducers/maintenanceReducer'
import { Form, Header, Button } from 'semantic-ui-react'
import { useField } from '../hooks'
import { connect } from 'react-redux'

const MaintenanceForm = ({createMaintenance}) => {
  const deviceId = useField('number')
  const entryDate = useField('date')
  const description = useField('text')
  const criticality = useField('number')
  const status = useField('number')

  const handleCreate = async (event) => {
    event.preventDefault()
    console.log('Adding a new maintenance job.')

    const maintenanceObject = {
      deviceId: deviceId.value,
      entryDate: entryDate.value,
      description: description.value,
      criticality: criticality.value,
      status: status.value
    }

    await createMaintenance(maintenanceObject)
    deviceId.reset()
    entryDate.reset()
    description.reset()
    criticality.reset()
    status.reset()
  }

  return(
    <Form onSubmit = {handleCreate}>
      <Header as="h3"> Add a new maintenance job</Header>
      <Form.Field>
        <label>Device id</label>
        <input id="deviceId" {...deviceId.bind}/>      
      </Form.Field>
      <Form.Field>
        <label>Entry date</label>
        <input id="entryDate" {...entryDate.bind}/>      
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <input id="description" {...description.bind}/>      
      </Form.Field>
      <Form.Field>
        <label>Criticality</label>
        <input id="criticality" {...criticality.bind}/>      
      </Form.Field>
      <Form.Field>
        <label>Status</label>
        <input id="status" {...status.bind}/>      
      </Form.Field>
      <Button type = "submit">Add</Button>
    </Form>
  )
}

const mapDispatchToProps = {
  createMaintenance
}

export default connect(
  null,
  mapDispatchToProps
)(MaintenanceForm)