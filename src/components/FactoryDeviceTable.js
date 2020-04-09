import React from 'react'
import FactoryDevice from '../components/FactoryDevice'
import { Table } from 'semantic-ui-react'
import { connect } from 'react-redux'

const FactoryDeviceTable = ({ factoryDevices }) => {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Id</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Type</Table.HeaderCell>
          <Table.HeaderCell>Year</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {factoryDevices.map(m =>
          <FactoryDevice key={m.id} factoryDevice={m} />
        )}
      </Table.Body>
    </Table>
  )
}

const mapStateToProps = (state) => {
  return {
    factoryDevices: state.factoryDevices
  }
}

export default connect(
  mapStateToProps
)(FactoryDeviceTable)
