import React from "react";
import { Component } from "react";
import API from "../utils/API";
import ResultFrame from "./ResultFrame";

class TableList extends Component {

  state = {
      results: {}
  }

  componentDidMount() {
    this.returnData();
  }

  returnData = async () => {
    API.search()
      .then(res => {
          this.setState({results : res.data.results})
      })
      .catch(err => console.log(err));
  };

  render(){

    if (this.state.results.length > 0){
        return (
            <ResultFrame value = {this.state.results}/>
        )
    }
    else {
        return (
            <div>
                <h1> Loading... </h1>
            </div>
        )
    }
      
  }
}

export default TableList