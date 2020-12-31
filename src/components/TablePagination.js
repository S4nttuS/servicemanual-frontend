import React from 'react'
import { Dropdown, Pagination, Grid  } from 'semantic-ui-react'

const TablePagination = ({ 
  page,
  setPage,
  pageDropdown,
  setPageDropdown,
  totalPages, 
  getAllPageable, 
  id 
}) => {
  const handlePageChange = (data) => {
    setPage(data)
    if (id === -1) {
      getAllPageable(data, pageDropdown)
    }
    else {
      getAllPageable(data, pageDropdown, id)
    }
  };
  
  const handlePageDropdownChange = (e, {value}) => {
    setPageDropdown(value)
    if (id === -1) {
      getAllPageable(page, value)
    }
    else {
      getAllPageable(page, value, id)
    }
  }

  const PaginationNav = () => {
    return (
      <Pagination 
        defaultActivePage={page} 
        totalPages={totalPages} 
        onPageChange={(e, data) => handlePageChange(data.activePage)}
      />
    )
  }

  return (
    <Grid columns={2} style={{ marginLeft: "0.1%", borderRadius:"0.285714rem", justifyContent: "space-between", width: "100%", backgroundColor: "#f9fafb", border: "1px solid rgba(34,36,38,.1)" }}>
      <Dropdown style={{width: 30}}
        onChange={handlePageDropdownChange}
        value={pageDropdown}
        search
        selection
        options={[5, 10, 20, 50].map(p => p = { text: p, key: p, value: p })}
      />
      <PaginationNav />
    </Grid>
  )
}

export default TablePagination
