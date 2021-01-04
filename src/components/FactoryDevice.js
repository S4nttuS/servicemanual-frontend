import React from 'react'
import { connect } from 'react-redux'
import { deleteFactoryDevice, getAllFactoryDevicesPageable } from '../reducers/factoryDeviceReducer'
import { Table, Button, Modal } from 'semantic-ui-react'
import FactoryDeviceEdit from '../components/FactoryDeviceEdit'

const FactoryDevice = ({ 
  factoryDevice, 
  page,
  pageDropdown,
  deleteFactoryDevice, 
  getAllFactoryDevicesPageable 
}) => {
  const handleDelete = async () => {
    if (window.confirm(`Delete a factory device ${factoryDevice.id}?`) === true) {
      console.log(`Deleting a factory device ${factoryDevice.id}`)
      await deleteFactoryDevice(factoryDevice.id)
      getAllFactoryDevicesPageable(page, pageDropdown)
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
          {factoryDevice.type}
      </Table.Cell>
      <Table.Cell>
          {factoryDevice.year}
      </Table.Cell>
      <Table.Cell>
        <Modal trigger={<Button>Update</Button>}>
          <Modal.Content>
            <FactoryDeviceEdit factoryDevice={factoryDevice} />
          </Modal.Content>
        </Modal>
        <Button secondary onClick={handleDelete}>Delete</Button>
      </Table.Cell>
    </Table.Row>
  )
}

const mapDispatchToProps = {
  deleteFactoryDevice,
  getAllFactoryDevicesPageable
}

export default connect(
  null,
  mapDispatchToProps
)(FactoryDevice)