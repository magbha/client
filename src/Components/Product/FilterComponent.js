import React from 'react'
import { Button } from 'react-bootstrap';
import "./style.css"

const FilterComponent = ({filterText , onChange , onFilter , }) => {

  
  return (
    <div >
    
    <input
        id="search"
        type="text"
        placeholder="Filter By Name"
        aria-label="Search Input"
        value={filterText}
        onChange={onFilter}
    />
    </div>
    )
}

export default FilterComponent
// <ClearButton type="button" onClick={onClear}>
//     X
// </ClearButton>