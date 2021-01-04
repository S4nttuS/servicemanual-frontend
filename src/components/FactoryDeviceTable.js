import React, { useState } from 'react'
import FactoryDevice from '../components/FactoryDevice'
import { Table, Container, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getAllFactoryDevicesPageable } from '../reducers/factoryDeviceReducer'
import TablePagination from './TablePagination'

const FactoryDeviceTable = ({ 
  factoryDevices,
  totalPages,
  getAllFactoryDevicesPageable
}) => {
  const [page, setPage] = useState(1)
  const [pageDropdown, setPageDropdown] = useState(5)

  return (
    <Container>
      <Header as="h2">Factory Devices</Header>

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
          {factoryDevices.map(f =>
            <FactoryDevice 
              key={f.id} 
              factoryDevice={f}
              page={page}
              pageDropdown={pageDropdown} 
            />
          )}
        </Table.Body>
      </Table>

      <TablePagination
        page={page}
        setPage={setPage}
        pageDropdown={pageDropdown}
        setPageDropdown={setPageDropdown}
        totalPages={totalPages} 
        getAllPageable={getAllFactoryDevicesPageable}
        id={-1}
      />
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    factoryDevices: state.factoryDevices.factoryDevices,
    totalPages: state.factoryDevices.totalPages
  }
}

const mapDispatchToProps = {
  getAllFactoryDevicesPageable
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(FactoryDeviceTable)
