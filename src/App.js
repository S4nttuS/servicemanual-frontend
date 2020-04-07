import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getAllFactoryDevices } from './reducers/factoryDeviceReducer'
import { getAllMaintenances, createMaintenance, removeMaintenance } from './reducers/maintenanceReducer'
import { Form, Button } from 'semantic-ui-react'
import { useField } from './hooks'

const App = (props) => {

  useEffect(() => {
    props.getAllFactoryDevices()
    props.getAllMaintenances()
  }, [] )

  console.log(props.factoryDevices)

  return (
    <div>
      <h1>Servicemanual</h1>
      <FactoryDeviceTable factoryDevices={props.factoryDevices} />
      <MaintenanceTable maintenances={props.maintenances} />
      <MaintenanceForm createMaintenance={props.createMaintenance}/>
    </div>
  )
}

const FactoryDevice = ({factoryDevice}) => {
  return (
    <div>
      <div>
        {factoryDevice.id} {factoryDevice.name} {factoryDevice.year} {factoryDevice.type}
      </div>
    </div>
  )

}
const FactoryDeviceTable = ({factoryDevices}) => {
  return (
    <div>
      {factoryDevices.map(f => 
        <div key={f.id}> 
          <FactoryDevice factoryDevice={f}/>
        </div>
      )}
    </div>
  )
}

const MaintenanceTable = ({maintenances}) => {
  return (
    <div>
      {maintenances.map(m =>
        <div key={m.id}>  
          <Maintenance maintenance={m}/>
        </div>
      )}
    </div>
  )
}

const Maintenance = ({maintenance}) => {
  const handleDelete = () => {
    if (window.confirm(`Remove maintenance job ${maintenance.id}?`) === true) {
      console.log(`Deleting a maintenance job ${maintenance.id}`)
      removeMaintenance(maintenance.id)
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

const MaintenanceForm = ({createMaintenance}) => {
  // TODO!!!! + miten edit 
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
      <h3> Add a new maintenance job</h3>
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

const mapStateToProps = state => {
  return {
    factoryDevices: state.factoryDevices,
    maintenances: state.maintenances
  }
}

export default connect(
  mapStateToProps,
  {
    getAllFactoryDevices,
    getAllMaintenances,
    removeMaintenance,
    createMaintenance
  }
)(App)
