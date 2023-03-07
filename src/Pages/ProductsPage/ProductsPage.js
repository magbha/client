import React, { useEffect, useState } from "react";
import Dsidebar from "../../Components/Dashboard/Dsidebar/Dsidebar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import { BsFillEjectFill } from "react-icons/bs";
import ProductTable from "../../Components/Product/ProductTable";
import AddModal from "../../Components/Product/AddModal";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../JS/Actions/item";
import Form from "react-bootstrap/Form";
import { getBranch } from "../../JS/Actions/branch";

const ProductsPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const branch = useSelector((state) => state?.branchReducer?.selectedBranch);
  const Default = useSelector(
    (state) => state?.persistedReducer?.currentUser?.workBranch
  );
  const branchList = useSelector((state) => state?.branchReducer?.branchList);

  const dispatch = useDispatch();

  useEffect(() => {
  
      dispatch(getItems(branch._id || Default ));
  }, [branch]);

  return (
    <div>
      <Dsidebar>
        <AddModal show={show} handleClose={handleClose} />
        <section className="dashboardSection">
          <Container className="">
            <div className="dbhead">
              <h1 xs="auto" className="dbtitle">
                Products : {branch.branchName}
              </h1>
              <div className="d-flex flex-column">
                <Button className="dbheadbtn" onClick={handleShow} active>
                  <BsFillEjectFill /> Add New Item
                </Button>
                <Form.Select
                  className="mt-2"
                  as="select"
                  type="select"
                  onChange={(e) => dispatch(getBranch(e.target.value))}
                  aria-label="Branch Select"
                >
                  <option>select branch</option>
                  {branchList.map((branch, index) => (
                    <option key={index} value={branch._id}>
                      {branch.branchName}
                    </option>
                  ))}
                </Form.Select>
              </div>
            </div>
          </Container>
          <ProductTable />
        </section>
      </Dsidebar>
    </div>
  );
};

export default ProductsPage;
