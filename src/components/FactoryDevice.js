import React from 'react'
import { connect } from 'react-redux'
import { deleteFactoryDevice } from '../reducers/factoryDeviceReducer'
import { Table, Button } from 'semantic-ui-react'

const FactoryDevice = ({factoryDevice, deleteFactoryDevice}) => {
  const handleDelete = () => {
    if (window.confirm(`Delete a factory device ${factoryDevice.id}?`) === true) {
      console.log(`Deleting a factory device ${factoryDevice.id}`)
      deleteFactoryDevice(factoryDevice.id)
    }
  }

  return (
    <Table.Row>
      <Table.Cell>
          {factoryDevice.id}
      </Table.Cell>
      <Table.Cell>
          {factoryDevice.name}
      </Table.Cell>
      <Table.Cell>
          {factoryDevice.year}
      </Table.Cell>
      <Table.Cell>
          {factoryDevice.type}
      </Table.Cell>
      <Button onClick={handleDelete}>Delete</Button>
    </Table.Row>
  )
}

const mapDispatchToProps = {
  deleteFactoryDevice
}

export default connect(
  null,
  mapDispatchToProps
)(FactoryDevice)