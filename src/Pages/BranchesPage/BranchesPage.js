import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { BsFillEjectFill } from "react-icons/bs";
import Dsidebar from "../../Components/Dashboard/Dsidebar/Dsidebar";
import Button from "react-bootstrap/esm/Button";
import BranchTable from "../../Components/Branch/BranchTable";
import BranchModal from "../../Components/Branch/BranchModal";
import { useDispatch, useSelector } from "react-redux";
import { getBranches } from "../../JS/Actions/branch";

const BranchesPage = () => {
  const id = useSelector(
    (state) => state.persistedReducer?.currentUser?.workAt
  );
  const isAdmin = useSelector(
    (state) => state.persistedReducer?.currentUser?.isAdmin
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBranches(id));
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Dsidebar>
        <BranchModal show={show} handleClose={handleClose} />
        <section  className="dashboardSection ">

          <Container className="  p-6" fluid>
            <div className="dbhead">
              <h1 xs="auto" className="dbtitle">
                Branches :
              </h1>

              <Button
                xs="auto"
                className="dbheadbtn"
                onClick={handleShow}
                disabled={!isAdmin}
              >
                <BsFillEjectFill /> Add New Branch
              </Button>
            </div>
          </Container>

          
            <BranchTable />
          

        </section>
      </Dsidebar>
    </div>
  );
};

export default BranchesPage;
