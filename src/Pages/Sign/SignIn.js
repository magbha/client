import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import useWindowSize from "../../Components/ScreenSize";
import { logIn } from "../../JS/Actions/sign";
import "./sin.css";
import Spinner from "react-bootstrap/Spinner";


import SignIMG from "./SignINIMG.svg";
const SignIn = () => {
  const loading = useSelector((state) => state?.persistedReducer?.loading)
  const sSize = useWindowSize();


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});

  const handelChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(userInfo, navigate));
  };

  return (
    <div className="SINContainer">
    <Container fluid className="SINRight">
    <Container fluid className="SINFormParent">
      <Form className="SINForm">
        <NavLink className="nLOGO" to="/">
          Soteroo
        </NavLink>
        <h4>Log in to your account</h4>
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
        <div className="sinSbtns d-flex justify-content-center">
          <Button onClick={handleSubmit} className="sinSendbtn" type="submit" disabled={loading}>
            {loading ? <> "Submiting " <Spinner animation="border" variant="success" /> </> : "Submit"}
          </Button>
          <div className="sinSignSpanDiv">
          <span className="sinSignspan ">   
            Don't have an account?
            </span>
            <NavLink className="sinSignbtn"  to="/sign-up">
              Sign up
            </NavLink>
          </div>
        </div>
      </Form>
    </Container>
  </Container>
      {sSize.width > 983 ? (
        <Container className="SINIMG">
          <Image height="100%" width="100%" src={SignIMG} />
        </Container>
      ) : null }
      </div>
  );
};

export default SignIn;
