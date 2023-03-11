import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import { addBranch } from "../../JS/Actions/branch";


const BranchModal = ({ show, handleClose }) => {
  const branchBusiness = useSelector((state) => state.persistedReducer?.currentUser?._id) 
  const Loading = useSelector((state) => state.branchReducer.loading) 

  const dispatch = useDispatch();
  const [newBranch, setnewBranch] = useState({});

  const handelChange = (e) => {
    setnewBranch({ ...newBranch, [e.target.name]: e.target.value , branchBusiness : branchBusiness  });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBranch(newBranch , handleClose , branchBusiness));
    
  };
  return (
    <div>
      {" "}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add nwe Branch {Loading ? <Spinner animation="border" variant="success" /> : null}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                name="branchName"
                onChange={handelChange}
                type="text"
                placeholder="Branch Name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                name="branchAddress"
                onChange={handelChange}
                type="text"
                placeholder="Branch Address"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                name="branchPhoneNumber"
                onChange={handelChange}
                type="number"
                placeholder="Branch Phone Number"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                name="branchEmail"
                onChange={handelChange}
                type="email"
                placeholder=" Branch Email"
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <div className="Sbtns d-flex justify-content-center">
              <Button onClick={handleSubmit} className="Sendbtn" type="submit" disabled={Loading}>
              {Loading ? <> "Submiting " <Spinner animation="border" variant="success" /> </> : "Submit"}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BranchModal;
