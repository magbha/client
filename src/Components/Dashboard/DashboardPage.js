import React, { useEffect } from "react";
import Dsidebar from "./Dsidebar/Dsidebar";
import "./style.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import {
  BsFillEjectFill,
  BsFillCalendarCheckFill,
  BsFillArchiveFill,
  BsCurrencyDollar,
} from "react-icons/bs";
import Card from "react-bootstrap/Card";
import HistoryTable from "./HistoryTable/HistoryTable";
import { currentUser } from "../../JS/Actions/sign";
import { useDispatch, useSelector } from "react-redux";

const DashboardPage = () => {
  const user = useSelector((state) => state.persistedReducer?.currentUser)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <div className="dbapp">
      <Dsidebar>
        <section className="dashboardSection">
          <Container  fluid>
            <div className="dbhead ">
              
                <h1 xs="3" className="dbtitle">
                  Dashboard :
                </h1>
           
          
                <Button xs="auto" className="dbheadbtn">
                  <BsFillEjectFill /> Check Something
                </Button>
            
            </div>

            <Container className="dcards d-flex flex-wrap">
              <Card className="tcard">
                <div className="dcardicondiv cdInvoice">
                  <BsFillCalendarCheckFill className="dcardicon cardInvoice" />
                </div>
                <Card.Body>
                  <div>
                    <h3>Name</h3>
                    <p>{user.firstName}</p>
                  </div>
                </Card.Body>
              </Card>
              <Card className="tcard">
                <div className="dcardicondiv cdProduct">
                  <BsFillArchiveFill className="dcardicon cardProduct" />
                </div>
                <Card.Body>
                  <div>
                    <h3>..</h3>
                    <p>..</p>
                  </div>
                </Card.Body>
              </Card>

              <Card className="tcard">
                <div className="dcardicondiv cdMoney">
                  <BsCurrencyDollar className="dcardicon cardMoney" />
                </div>
                <Card.Body>
                  <div>
                    <h3>..</h3>
                    <p>..</p>
                  </div>
                </Card.Body>
              </Card>
            </Container>
          </Container>
          <HistoryTable />
        </section>
      </Dsidebar>
    </div>
  );
};

export default DashboardPage;
