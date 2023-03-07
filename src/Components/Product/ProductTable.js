import React, { useMemo, useState } from 'react'
import DataTable  from 'react-data-table-component';
import FilterComponent from './FilterComponent';
import "./style.css"
import { Button, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BsPencilFill, BsPentagonHalf } from 'react-icons/bs';









const ProductTable = () => {
  const itemList = useSelector((state) => state?.itemReducer?.itemList);
  const branch = useSelector((state) => state?.branchReducer?.selectedBranch);
  

 
    const columns = [
        {
            name: 'Item',
            maxWidth: '40px',
            selector: row =>  <BsPentagonHalf/>
        },
        {
            name: 'Item Name',
            selector: row => <p className='itemPill'>{row.itemName}</p>,
            sortable: true,
        },
        {
            name: 'manufacture',
            selector: row => <p className='qtyPill'>{row.manufacture}</p>,
        },
        {
            name: 'Created By',
            selector: row => <p className='datePill'>{row.createdBy.firstName}</p>,
        },
        {
            name: 'Add date',
            selector: row => row.addDate,
            sortable: true,
        },
        {
            name: 'About Item',
            selector: row => <p className='datePill'>{row.aboutItem}</p>,
        },
        {
            name: 'Quantity',
            selector: row => row.qty ,
            sortable: true,
        },
        {
            name: 'type',
            selector: row => row.itemType,
            
        },
        {
            name: 'Branch',
            selector: row => <p className='branchPill'>{branch.branchName}</p>,
        },
        {
            selector: row => <NavLink to={`/product/${row._id}`} ><BsPencilFill/></NavLink>
        },
    ];
    

    const [filterText, setFilterText] = useState('');
    const [selectedRows, setSelectedRows] = useState(false);
    const [toggledClearRows, setToggleClearRows] = useState(false);
    const [buttonState , setButtonState] = useState(true)

    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const filteredItems = itemList?.filter(
        item => item.itemName && item.itemName.toLowerCase().includes(filterText.toLowerCase()),
    );

    
    const handleChange = ({ selectedRows }) => {
        setSelectedRows(selectedRows);
        if (selectedRows.length == 0) {
           return setButtonState(true)
            
        } else {
          return  setButtonState(false)
           
        }
    };
    
    const handleClearRows = () => {
        setToggleClearRows(!toggledClearRows);
        
      }

    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <FilterComponent  onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText}  />
        );
    }, [filterText, resetPaginationToggle]);
        
        return (
            <div  className='p-2'>
            <Container className='p-3'>
            <Button variant="warning" size="md" disabled={buttonState}>Make Invoice</Button>{' '}
            
            </Container>
            
            
      
            <DataTable
                title={ <h1></h1> }
                columns={columns}
                data={filteredItems}
                pagination
                paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
                selectableRows
                onSelectedRowsChange={handleChange}
                clearSelectedRows={toggledClearRows}
                persistTableHead
                fixedHeader
                fixedHeaderScrollHeight="300px"
                
            /> 

         
          
    </div>
  )
}

export default ProductTable