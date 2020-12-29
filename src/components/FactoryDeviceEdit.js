import React from 'react'
import { updateFactoryDevice } from '../reducers/factoryDeviceReducer'
import { Form, Header, Button } from 'semantic-ui-react'
import { useField } from '../hooks'
import { connect } from 'react-redux'

const FactoryDeviceEdit = ({ factoryDevice, updateFactoryDevice }) => {
  const name = useField('text', factoryDevice.name)
  const type = useField('text', factoryDevice.type)
  const year = useField('number', factoryDevice.year)

  const handleUpdate = async (event) => {
    console.log(`Updating a factory device.`)
    
    const factoryDeviceObject = {
      id: factoryDevice.id,
      name: name.value,
      type: type.value,
      year: year.value,
    }

    await updateFactoryDevice(factoryDeviceObject)
    name.reset()
    type.reset()
    year.reset()
    window.location.reload();
  }

  return(
    <Form onSubmit={handleUpdate}>
      <Header as="h3"> Update a factory device</Header>
      <Form.Field>
        <label>Name</label>
        <input id="name"  {...name.bind} />      
      </Form.Field>
      <Form.Field>
        <label>Type</label>
        <input id="type" {...type.bind} />      
      </Form.Field>
      <Form.Field>
        <label>Year</label>
        <input id="year" {...year.bind} />      
      </Form.Field>
      <Button type = "submit">Update</Button>
    </Form>
  )
}

const mapDispatchToProps = {
    updateFactoryDevice
}

export default connect(
  null,
  mapDispatchToProps
)(FactoryDeviceEdit)