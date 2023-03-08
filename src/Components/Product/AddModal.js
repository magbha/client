import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../JS/Actions/item';

function AddModal({show , handleClose}) {
  const user = useSelector((state) => state.persistedReducer?.currentUser);
  const Loading = useSelector((state) => state.itemReducer?.loading);
  const selectedBranch = useSelector((state) => state.branchReducer?.selectedBranch);

  
  
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();
  const [newItem, setnewItem] = useState({});
  const thisDate = new Date().toLocaleDateString('en-GB');
  const userBranch = user?.workBranch;

  
  const handelChange = (e) => {
    setnewItem({...newItem , [e.target.name]: e.target.value , createdBy: user._id , itemBusiness: user.workAt , itemBranch : selectedBranch._id , addDate : thisDate});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    
    setValidated(true)
    dispatch(addItem(newItem, handleClose , userBranch ));

  };


  return (
    <div>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>
        Add new Item
        {Loading == true ? (
          <Spinner animation="border" variant="success" />
        ) : null}
      </Modal.Title>
    </Modal.Header>
    
    <Modal.Body>
    <Form  noValidate validated={validated} onSubmit={handleSubmit}>
    <Form.Group className="mb-3">
      <Form.Control
        required
        name="itemName"
        onChange={handelChange}
        type="text"
        placeholder="Item Name"
      />
      <Form.Control.Feedback type="invalid">
      Please provide a item name.
    </Form.Control.Feedback>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Control
        required
        name="manufacture"
        onChange={handelChange}
        type="text"
        placeholder="Item Manufacture"
      />
      <Form.Control.Feedback type="invalid">
    Please provide a manufacture.
  </Form.Control.Feedback>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Control
        required
        name="aboutItem"
        onChange={handelChange}
        type="text"
        placeholder="About Item"
      />
      <Form.Control.Feedback type="invalid">
      Please provide some information about item.
    </Form.Control.Feedback>
    </Form.Group>
<Form.Group className='d-flex'>
    <Form.Group className="mb-3 m-1">
      <Form.Control
        required
        name="itemPrice"
        onChange={handelChange}
        type="number"
        placeholder="item price"
      />
      <Form.Control.Feedback type="invalid">
      Please provide a price.
    </Form.Control.Feedback>
    </Form.Group>
    <Form.Group className="mb-3 m-1">
      <Form.Control
        required
        name="qty"
        onChange={handelChange}
        type="number"
        placeholder="Quantity"
      />
      <Form.Control.Feedback type="invalid">
      Please provide a quantity.
    </Form.Control.Feedback>
    </Form.Group>
    <Form.Group className="mb-3 m-1">
    <Form.Control
      required
      name="itemType"
      onChange={handelChange}
      type="text"
      placeholder="Item Type"
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
    </Modal.Body>
  </Modal>
    </div>
  );
}

export default AddModal;