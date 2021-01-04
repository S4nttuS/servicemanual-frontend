import React from 'react'
import { createFactoryDevice, getAllFactoryDevicesPageable } from '../reducers/factoryDeviceReducer'
import { Form, Container, Header, Button } from 'semantic-ui-react'
import { useField } from '../hooks'
import { connect } from 'react-redux'

const FactoryDeviceForm = ({ createFactoryDevice, getAllFactoryDevicesPageable }) => {
  const name = useField('text')
  const type = useField('text')
  const year = useField('number')

  const handleCreate = async (event) => {
    event.preventDefault()
    console.log('Adding a new factory device.')

    const factoryDeviceObject = {
      name: name.value,
      type: type.value,
      year: year.value
    }

    await createFactoryDevice(factoryDeviceObject)
    getAllFactoryDevicesPageable(1, 5)
    name.reset()
    type.reset()
    year.reset()
  }

  return(
    <Container>
      <Header as="h2">Factory devices</Header>
      <Form onSubmit = {handleCreate}>
        <Header as="h3"> Add a new factory device</Header>
        <Form.Field>
          <label>Name</label>
          <input id="name" {...name.bind}/>      
        </Form.Field>
        <Form.Field>
          <label>Type</label>
          <input id="type" {...type.bind}/>      
        </Form.Field>
        <Form.Field>
          <label>Year</label>
          <input id="year" {...year.bind}/>      
        </Form.Field>
        <Button type = "submit">Add</Button>
      </Form>
    </Container>
  )
}

const mapDispatchToProps = {
  createFactoryDevice,
  getAllFactoryDevicesPageable
}

export default connect(
  null,
  mapDispatchToProps
)(FactoryDeviceForm)