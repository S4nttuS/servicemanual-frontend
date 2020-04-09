import React from 'react'
import { connect } from 'react-redux'
import { deleteFactoryDevice } from '../reducers/factoryDeviceReducer'

const FactoryDevice = ({factoryDevice, deleteFactoryDevice}) => {
  const handleDelete = () => {
    if (window.confirm(`Delete a factory device ${factoryDevice.id}?`) === true) {
      console.log(`Deleting a factory device ${factoryDevice.id}`)
      deleteFactoryDevice(factoryDevice.id)
    }
  }

  return (
    <div>
      <div>
        {factoryDevice.id} {factoryDevice.name} {factoryDevice.year} {factoryDevice.type}
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  deleteFactoryDevice
}

export default connect(
  null,
  mapDispatchToProps
)(FactoryDevice)