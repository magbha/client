import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "react-bootstrap";
import { logOut } from "../../../JS/Actions/sign";
import { NavLink, useNavigate } from "react-router-dom";

import "./style.css";
import { BsFillBuildingsFill, BsFillInboxesFill, BsFillPeopleFill, BsGrid1X2Fill, BsPersonCircle } from "react-icons/bs";

const Bnavbar = () => {
  const user = useSelector((state) => state.persistedReducer.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar
        fixed="bottom"
        className="p-2 bg-light"
        collapseOnSelect
        expand="lg"
        
        variant="dark"
        style={{ borderTop : "2px solid black"}}
      >
        <NavLink to="/dash" className="Bnavs">
          <BsGrid1X2Fill style={{ color: "black"  , width : "20px" , height: "20px"}}/>
        </NavLink>

        <NavLink to="/branches" className="Bnavs">
          <BsFillBuildingsFill style={{ color: "black"  , width : "20px" , height: "20px"}}/>
        </NavLink>

        <NavDropdown
          style={{border : "10px solid white" , borderRadius : "50%" }}
          drop="up-centered"
          title={
            <BsPersonCircle style={{color : "black" , height : "36px" , width : "36px"}}/>
          }
          id="nav-dropdown-drop-up-centered "
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

        <NavLink to="/team" className="Bnavs">
          <BsFillPeopleFill style={{ color: "black"  , width : "20px" , height: "20px"}}/>
        </NavLink>

        <NavLink to="/products" className="Bnavs">
          <BsFillInboxesFill  style={{ color: "black"  , width : "20px" , height: "20px"}}/>
        </NavLink>
      </Navbar>
    </div>
  );
};

export default Bnavbar;


// <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
// <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
// <NavDropdown.Item eventKey="4.3">
//   Something else here
// </NavDropdown.Item>