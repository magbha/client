import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBranch } from '../../JS/Actions/branch';


const BranchDelete = ({showD , handleCloseD , selectedBranch}) => {
    const dispatch = useDispatch();
    const playerId = useSelector((state) => state.persistedReducer.currentUser._id) 
    const handleDeleteBranch = () => {
        
        dispatch(deleteBranch(selectedBranch._id , playerId , handleCloseD))
    }

  return (
    <Modal show={showD} onHide={handleCloseD}>
    <Modal.Header closeButton>
      <Modal.Title>Delete Branch</Modal.Title>
    </Modal.Header>
    <Modal.Body>Are you Sure You Want To Delete ! {selectedBranch.branchName}</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseD}>
        Close
      </Button>
      <Button variant="danger" onClick={handleDeleteBranch}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default BranchDelete