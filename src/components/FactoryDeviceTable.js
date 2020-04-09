import React from 'react';
import FactoryDevice from '../components/FactoryDevice'

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

export default FactoryDeviceTable