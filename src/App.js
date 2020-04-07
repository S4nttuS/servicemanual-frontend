import React, {Component, useEffect} from 'react';
import { connect } from 'react-redux'
import {initializefactoryDevices} from './reducers/factoryDeviceReducer'


const App = (props) => {
  useEffect(() => {
    props.initializefactoryDevices()
  }, [] )
  console.log(props.factoryDevices)
  return (
    <div>
      {props.factoryDevices == null ?
        <p>moi</p> : <p>hei</p>
      }
    </div>
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
    initializefactoryDevices
  }
)(App)
