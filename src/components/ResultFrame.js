import React from "react";
import {Table} from "react"
import ResultList from "./ResultList";

function ResultsFrame(props) {
  return (
    <div>
      <h1> Hello </h1>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <ResultList/>
      </tbody>
      </Table>
    </div>
  );
}

export default ResultsFrame;
