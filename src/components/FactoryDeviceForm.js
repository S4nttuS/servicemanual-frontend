import React from 'react'
import { createFactoryDevice } from '../reducers/factoryDeviceReducer'
import { Form, Button } from 'semantic-ui-react'
import { useField } from '../hooks'
import { connect } from 'react-redux'


const FactoryDeviceForm = ({createFactoryDevice}) => {
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
    name.reset()
    type.reset()
    year.reset()
  }

  return(
    <Form onSubmit = {handleCreate}>
      <h3> Add a new factory device</h3>
      <Form.Field>
        <label>name</label>
        <input id="name" {...name.bind}/>      
      </Form.Field>
      <Form.Field>
        <label>type</label>
        <input id="type" {...type.bind}/>      
      </Form.Field>
      <Form.Field>
        <label>year</label>
        <input id="year" {...year.bind}/>      
      </Form.Field>
      <Button type = "submit">Add</Button>
    </Form>
  )
}

const mapDispatchToProps = {
  createFactoryDevice
}

export default connect(
  null,
  mapDispatchToProps
)(FactoryDeviceForm)