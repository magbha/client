import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
//import "./style.css";
import { BsSearch, BsBorderWidth } from "react-icons/bs";
//
import pic from "./people.png";
import BranchRow from "./BranchRow";
import {useSelector } from "react-redux";
import BranchDelete from "./BranchDelete";


const BranchTable = () => {
  const branchList = useSelector((state) => state.branchReducer.branchList)

  return (
      <Container className="p-1 mt-5 " fluid >
        <Table responsive hover style={{borderRadius : "20px"}} className="bg-light">
          <thead>
            <tr>
              <th>Branch Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Total Employes</th>
              <th>Total Items</th>
            </tr>
          </thead>
          <tbody>
            {branchList.map((branch, index) => (
              <BranchRow id={index} branch={branch} key={index}  />
            ))}
          </tbody>
        </Table>
      </Container>
  );
};

export default BranchTable;

// Add Padding to the Table