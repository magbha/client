import React from "react";
import {  BsPersonCircle } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import "./team.css"
const MemberCard = ({team}) => {
  return (
    
     
          <Card className="tcard">
          <div className="tCardi">
          <BsPersonCircle className="dcardicon cardInvoice tCardicon" />

          </div>
          <Card.Body>
          <div>
          <h6>{team.firstName}</h6>
          <p>{team.workBranch?.branchName}</p>
          
        </div>
      </Card.Body>
    </Card>
   
  );
};

export default MemberCard;
