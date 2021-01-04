import React, { useEffect } from 'react'
import Maintenance from '../components/Maintenance'
import { connect } from 'react-redux'
import { Table, } from 'semantic-ui-react'
import { useParams } from "react-router-dom";
import { getMaintenance } from '../reducers/maintenanceReducer'

const MaintenanceContainer = ({ maintenance, getMaintenance }) => {
  const { id } = useParams();

  useEffect(() => {
    getMaintenance(id)
  }, [])

  if (maintenance !== undefined) {
    return (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Device id</Table.HeaderCell>
            <Table.HeaderCell>Entry date</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Criticality</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Maintenance maintenance={maintenance} />
        </Table.Body>
      </Table>
    )
  }
  else {
    return (
      <p style={{ color: 'red', fontSize: 25}}>No maintenance with given ID</p>
    )
  }
}

const mapStateToProps = state => {
  return {
    maintenance: state.maintenances.maintenance
  }
}

const mapDispatchToProps = {
  getMaintenance
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MaintenanceContainer)