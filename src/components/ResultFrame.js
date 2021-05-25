import React from "react";
import {Table, Button} from "react-bootstrap";
import ResultList from "./ResultList";
import { MDBCol, MDBIcon } from "mdbreact";
import '../index.css'

function ResultFrame(props) {
  return (
    <div>
      <div id = "header">
        <h1 id = "titleText"> Employee Directory </h1>
          <MDBCol id = 'search' md="6">
            <form onSubmit = {props.blocker} className="form-inline mt-4 mb-4">
              <MDBIcon icon="search" />
              <input onKeyPress = {(key) => props.checkEnter(key.key, document.getElementById('searchText'))} id = 'searchText' className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search By Name" aria-label="Search" />
            </form>
          </MDBCol>
          <Button type = 'button' onClick = {() => props.getSearchResults(document.getElementById('searchText'))} id = "searchButton">Search</Button>
      </div>
      
      <Table striped bordered hover>
      <thead>
        <tr>
            <th onClick = {() => props.sortByName()}> Name <img width='30' height='30' src = "UpDownArrows.png"></img> </th>
            <th onClick = {() => props.sortByEmail()}> Email <img width='30' height='30' src = "UpDownArrows.png"></img> </th>
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
