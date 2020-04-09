import React from 'react';
import Maintenance from '../components/Maintenance'


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

  export default MaintenanceTable