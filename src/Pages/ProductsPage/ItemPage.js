import React, { useEffect, useState } from 'react'
import Dsidebar from '../../Components/Dashboard/Dsidebar/Dsidebar'
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/esm/Button';
import { BsFillEjectFill, BsFillExclamationTriangleFill, BsFillTrash3Fill } from 'react-icons/bs';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, editItem, getItem } from '../../JS/Actions/item';
import { useNavigate, useParams } from 'react-router-dom';

const ItemPage = () => {
  const user = useSelector((state) => state.persistedReducer.currentUser);
  const item = useSelector((state) => state.itemReducer.selectedItem);

  const [newItem, setnewItem] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {_id} = useParams();

  useEffect(() => {
    dispatch(getItem(_id))
  }, [dispatch])
  
  

    const handelChange = (e) => {
        setnewItem({...newItem , [e.target.name]: e.target.value});
      };
      const handleSubmit = (e) => {
        e.preventDefault()    
        dispatch(editItem( _id ,newItem , user.workBranch , navigate));
      };

  return (
     <div>
    <Dsidebar>
        <section className="dashboardSection">
          <Container className="dbmain" fluid>
          <div className="dbhead">
          <div className="dbhleft">
            <h1 xs="auto" className="dbtitle">
              Edit {item.itemName} :
            </h1>
          </div>
          <div className="dbhright">
            <Button xs="auto" onClick={() => navigate(-1)} className="dbheadbtn" >
              <BsFillEjectFill /> Back
            </Button>
            <Button xs="auto" onClick={() => dispatch(deleteItem(_id , item.itemBranch , navigate))} variant="danger" className="m-2" >
              <BsFillTrash3Fill /> Delete Item !
            </Button>
          </div>
        </div>
          <Form   onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              name="itemName"
              onChange={handelChange}
              type="text"
              placeholder={item.itemName}
            />
            <Form.Control.Feedback type="invalid">
            Please provide a item name.
          </Form.Control.Feedback>
          </Form.Group>
      
          <Form.Group className="mb-3">
            <Form.Control
              name="manufacture"
              onChange={handelChange}
              type="text"
              placeholder={item.manufacture}
            />
            <Form.Control.Feedback type="invalid">
          Please provide a manufacture.
        </Form.Control.Feedback>
          </Form.Group>
      
          <Form.Group className="mb-3">
            <Form.Control
              name="aboutItem"
              onChange={handelChange}
              type="text"
              placeholder={item.aboutItem}
            />
            <Form.Control.Feedback type="invalid">
            Please provide some information about item.
          </Form.Control.Feedback>
          </Form.Group>
      <Form.Group className='d-flex flex-wrap justify-content-center'>
          <Form.Group className="mb-3 m-1">
            <Form.Control
              name="itemPrice"
              onChange={handelChange}
              type="number"
              placeholder={item.itemPrice}
            />
            <Form.Control.Feedback type="invalid">
            Please provide a price.
          </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3 m-1">
            <Form.Control
              name="qty"
              onChange={handelChange}
              type="number"
              placeholder={item.qty}
            />
            <Form.Control.Feedback type="invalid">
            Please provide a quantity.
          </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3 m-1">
          <Form.Control
            name="itemType"
            onChange={handelChange}
            type="text"
            placeholder={item.itemType}
          />
          <Form.Control.Feedback type="invalid">
          Please provide a item type.
        </Form.Control.Feedback>
        </Form.Group>
        </Form.Group>
          <div className="Sbtns d-flex justify-content-center">
            <Button className="Sendbtn" type="submit" >
              Submit
            </Button>
          </div>
        </Form>
          </Container>
        </section>
      </Dsidebar>
    </div>
  )
}

export default ItemPage