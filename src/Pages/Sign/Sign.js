import React, { useState } from "react";
import { Container, Image, Navbar } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import useWindowSize from "../../Components/ScreenSize";
import { signUp } from "../../JS/Actions/sign";
import "./style.css";
import Spinner from "react-bootstrap/Spinner";
import SignIMG from "./SignIMG.svg";

const Sign = () => {
  const sSize = useWindowSize();
  const loading = useSelector((state) => state?.persistedReducer?.loading)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({});

  const handelChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value  , isAdmin : true});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(newUser, navigate));
  };
  return (
    <div className="SINDIV" >
      <Navbar className="SNAV" expand="lg">
        <Container className="d-flex justify-content-center">
          <Navbar.Brand className="nLOGO" href="/">
            Soteroo
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container fluid className="SUPContainer d-flex">
        {sSize.width > 983 ? (
          <Container fluid className="IMGC">
            <div className="SUPIMG">
              <Image height="100%" width="100%" src={SignIMG} />
            </div>
          </Container>
        ) : null}

        <Container fluid className="SUPRight">
          <Container fluid className="SUPFormParent">
            <Form className="SUPForm">
              <h4>Sign up</h4>
              <span>Enter Your Information With Your Business name</span>
              <Form.Group className="mb-3">
                <Form.Control
                  name="firstName"
                  onChange={handelChange}
                  type="text"
                  placeholder="First Name"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  name="lastName"
                  onChange={handelChange}
                  type="text"
                  placeholder="Last Name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  name="email"
                  onChange={handelChange}
                  type="email"
                  placeholder="Email"
                />
              </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    name="password"
                    onChange={handelChange}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  name="phone"
                  onChange={handelChange}
                  type="number"
                  placeholder="Phone Number"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  name="business"
                  onChange={handelChange}
                  type="text"
                  placeholder="Business Name"
                />
              </Form.Group>
              <div className="Sbtns d-flex justify-content-center">
              <Button onClick={handleSubmit} className="Sendbtn" type="submit" disabled={loading}>
            {loading ? <> Submiting  <Spinner animation="border" variant="success" /> </> : "Submit"}
              </Button>
              <span className='signspan'>   Have an account? <NavLink  className='Signbtn'  to="/sign-in">Log In now  </NavLink> </span>

              </div>
            </Form>
          </Container>
        </Container>
      </Container>
    </div>
  );
};

export default Sign;
