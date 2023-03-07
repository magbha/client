import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { signTeam } from "../../JS/Actions/sign";
import { toast } from "react-toastify";

const AddTeam = ({ showT, handleCloseT }) => {
  const boss = useSelector((state) => state.persistedReducer.currentUser);
  const fail = useSelector((state) => state.persistedReducer.fail);
  const branchList = useSelector((state) => state?.branchReducer.branchList);
  const Loading = useSelector((state) => state.persistedReducer.loading);

  
  
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();
  const [newUser, setnewUser] = useState({});
  
  const handelChange = (e) => {
    setnewUser({...newUser , [e.target.name]: e.target.value , workAt: boss._id , business: boss.business , isAdmin : false });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    
    setValidated(true)
    dispatch(signTeam(newUser, handleCloseT ));

  };
  return (
    <div>
      <Modal show={showT} onHide={handleCloseT}>
        <Modal.Header closeButton>
          <Modal.Title>
            Add new Team
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
            name="firstName"
            onChange={handelChange}
            type="text"
            placeholder="First Name"
          />
          <Form.Control.Feedback type="invalid">
          Please provide a first name.
        </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            required
            name="lastName"
            onChange={handelChange}
            type="text"
            placeholder="Last Name"
          />
          <Form.Control.Feedback type="invalid">
        Please provide a last name.
      </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            required
            name="email"
            onChange={handelChange}
            type="email"
            placeholder="Email"
          />
          <Form.Control.Feedback type="invalid">
          Please provide a email.
        </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            required
            name="password"
            onChange={handelChange}
            type="password"
            placeholder="enter a password! "
          />
          <Form.Control.Feedback type="invalid">
          Please provide a password.
        </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            required
            name="phone"
            onChange={handelChange}
            type="number"
            placeholder="Phone Number"
          />
          <Form.Control.Feedback type="invalid">
          Please provide a phone number.
        </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control required name="workBranch" as="select" type="select" onChange={handelChange} aria-label="Select Branch">
          <option value="">Select Branch</option>
            {branchList.map((branch , index) =>  <option  key={index} name="workBranch" value={branch._id}>{branch.branchName}</option> )}
          </Form.Control>
          <Form.Control.Feedback type="invalid">
          Please provide a branch or create one.
        </Form.Control.Feedback>
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
};

export default AddTeam;
