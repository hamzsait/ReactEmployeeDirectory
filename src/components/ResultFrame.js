import React from "react";
import {Table} from "react-bootstrap";
import ResultList from "./ResultList";
import { MDBCol, MDBIcon } from "mdbreact";
import '../index.css'

function ResultFrame(props) {
  return (
    <div>
      <div id = "header">
      <h1> Employee Directory </h1>
      <MDBCol id = 'search' md="6">
        <form className="form-inline mt-4 mb-4">
          <MDBIcon icon="search" />
          <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
        </form>
      </MDBCol>
      </div>
      
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
