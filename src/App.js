import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Container, Header, Divider, Grid } from 'semantic-ui-react'
import { getAllFactoryDevices } from './reducers/factoryDeviceReducer'
import { getAllMaintenancesPageable } from './reducers/maintenanceReducer'

import FactoryDeviceTable from './components/FactoryDeviceTable'
import FactoryDeviceForm from './components/FactoryDeviceForm'
import MaintenanceTable from './components/MaintenanceTable'
import MaintenanceForm from './components/MaintenanceForm'
import MaintenanceContainer from './components/MaintenanceContainer'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = ({ getAllFactoryDevices, getAllMaintenancesPageable }) => {

  const tabs = [{
    link: '/',
    title: 'Home',
  },{
    link: '/factorydevices',
    title: 'Factory Devices'
  },{
    link: '/factorydevices/add',
    title: 'Add a factory device'
  },{
    link: '/maintenances',
    title: 'Maintenances'
  },{
    link: '/maintenances/add',
    title: 'Add a maintenance'
  }]

  useEffect(() => {
    getAllFactoryDevices()
    getAllMaintenancesPageable(0, 5)
  }, [])

  return (
    <Container style = {{position: "relative", top: "10%"}}>
      
      <Header as="h1" style={{paddingLeft: "41.5%", paddingTop: "1%"}}>Servicemanual</Header>
      <Divider horizontal>-</Divider>
      <Router>
        <Grid container direction="row" style = {{ display: "flex", fontSize: 20, paddingBottom: "4%", paddingTop: '1%' }}>
          {tabs.map(t => 
            <Container key={t.link} style={{display: "flex", paddingTop: 3, width: "auto", height: 30, backgroundColor: "grey", borderRadius: 5 }}>
              <Link style={{ color: "white" }} to={t.link}>{t.title}</Link>
            </Container>
          )}
        </Grid>

        <Switch>
          <Route exact path="/">
          </Route>
          <Route exact path="/factorydevices">
            <FactoryDeviceTable />
          </Route>
          <Route exact path="/factorydevices/add">
            <FactoryDeviceForm />
          </Route>
          <Route exact path="/maintenances">
            <MaintenanceTable />
          </Route>
          <Route exact path="/maintenances/add">
            <MaintenanceForm />
          </Route>
          <Route exact path="/maintenances/:id">
            <MaintenanceContainer />
          </Route>
        </Switch>
      </Router>
      
      <Divider horizontal style = {{paddingTop: "4%"}}>-</Divider>
    </Container>
  )
}

const mapDispatchToProps = {
  getAllFactoryDevices,
  getAllMaintenancesPageable
}

export default connect(null, mapDispatchToProps)(App)
