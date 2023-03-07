import React from "react";
import "./style.css";

const HistoryRow = ({ alert, id }) => {
  return (
    <tr >
    <td>
    <p >{id + 1}</p>
    
    </td>
      <td >
        <p style={{textAlign : "left"}}>{alert}</p>
      </td>
    </tr>
  );
};

export default HistoryRow;
