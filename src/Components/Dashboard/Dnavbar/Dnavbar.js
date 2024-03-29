import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import {
  BsFillArrowDownSquareFill,
  BsFillBellFill,
  BsPersonCircle,
} from "react-icons/bs";
import { Button } from "react-bootstrap";
import { logOut } from "../../../JS/Actions/sign";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dnavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
        <Container fluid>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            {" "}
            <BsFillArrowDownSquareFill style={{ color: "black" }} />{" "}
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <NavDropdown
                align="end"
                title={
                  <BsPersonCircle
                    style={{ color: "black", height: "36px", width: "36px" }}
                  />
                }
                id="nav-dropdown "
              >
                <NavDropdown.Divider />
                <div className="d-flex justify-content-center">
                  {" "}
                  <Button
                    onClick={() => dispatch(logOut(navigate))}
                    className="logoutbtn"
                    type="submit"
                  >
                    Log out
                  </Button>{" "}
                </div>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Dnavbar;

// <Nav.Link className="dbellparent" href="#deets">
// <BsFillBellFill style={{color : "black" , height : "25px" , width : "25px"}}/>
// <span className="num">8</span>
// </Nav.Link>

// <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
// <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
// <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
