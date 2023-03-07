import React from "react";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import HistoryRow from "./HistoryRow";
import "./style.css";
import { BsSearch, BsBorderWidth, BsFillTrash3Fill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { removeAlerts } from "../../../JS/Actions/sign";
//

const HistoryTable = () => {

  const Alerts = useSelector((state) => state.persistedReducer?.currentUser?.alerts)
  const dispatch = useDispatch();


  const handleRemove = () => {
    dispatch(removeAlerts())
  }

  return (
    <Container style={{ minHeight: "500px" }} fluid className="contt">
      <div className="TableHeading">
        <h3>History</h3>
        <div className="tButtons">
          <button>
            <BsSearch />
          </button>
          <button onClick={handleRemove}>
            <BsFillTrash3Fill />
          </button>
        </div>
      </div>
      <Table responsive hover className="Htable">
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>

          </tr>
        </thead>
        <tbody>
          {Alerts?.map((alert, index) => (
            <HistoryRow id={index} alert={alert} key={index} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default HistoryTable;
