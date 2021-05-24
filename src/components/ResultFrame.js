import React from "react";
import {Table} from "react-bootstrap";
import ResultList from "./ResultList";

function ResultFrame(props) {
  return (
    <div>
      <h1> Hello </h1>
      <Table striped bordered hover>
      <thead>
        <tr>
            <th onClick = {() => props.sortByName()}> Name </th>
            <th onClick = {() => props.sortByEmail()}> Email </th>
            <th>Photo</th>
        </tr>
      </thead>
      <tbody>
        <ResultList value = {props}/>
      </tbody>
      </Table>
    </div>
  );
}

export default ResultFrame
