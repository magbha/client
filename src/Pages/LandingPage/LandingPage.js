import React from "react";
import TopBar from "../../Components/TopBar/TopBar";
import Container from "react-bootstrap/Container";
import landingIMG from "./landingIMG.svg";
import Image from "react-bootstrap/Image";
import "./style.css";
import useWindowSize from "../../Components/ScreenSize";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  const sSize = useWindowSize();
  return (
    <div>
      <TopBar />
      <Container fluid className="lContainer d-flex">
        <Container fluid className="lHeaders">
            <Container fluid className="typographyParent">
                <h1>Manage Your <br /> Business Online</h1>          
                <p>Now You Can Manage Your Business Online And Keep Track Of your Inventory and Be in Touch with your business and your Team</p>  
               <div className="bDiv"> <NavLink className="trybtn" to={"/sign-up"}>Try Free</NavLink> </div> 
            </Container>
        </Container>
        {sSize.width > 983 ? (
          <Container className="lIMG">
            <Image src={landingIMG} />
          </Container>
        ) : null}
      </Container>
    </div>
  );
};

export default LandingPage;
