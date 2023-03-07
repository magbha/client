import React, { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import BranchDelete from "./BranchDelete";
import pic from "./people.png";
//import "./style.css";

const BranchRow = ({ branch, id }) => {
  const isAdmin = useSelector((state) => state.persistedReducer?.currentUser?.isAdmin) 


  const [showD, setShowD] = useState(false);

  const handleCloseD = () => setShowD(false);
  const handleShowD = () => setShowD(true);
  const handelDelete = () => {
    setShowD(true)
    setSelectedBranch(branch)
  }
  const [selectedBranch , setSelectedBranch ] = useState("")

  return (
    <tr>
    <BranchDelete showD={showD} handleCloseD={handleCloseD} selectedBranch={selectedBranch} />
      <td className="d-flex justify-content-around">
        <p style={{backgroundColor : "#116149" , width: "24px" , height: "24px" ,  borderRadius : "50%" , color : "white"}}>{id+1}</p> <p>{branch.branchName}</p>
      </td>
      <td>{branch.branchAddress}</td>
      <td>{branch.branchPhoneNumber}</td>
      <td>{branch.branchEmail}</td>
      <td> <button disabled={!isAdmin} onClick={handelDelete}><BsFillTrashFill/></button>  </td>
    </tr>
  );
};

export default BranchRow