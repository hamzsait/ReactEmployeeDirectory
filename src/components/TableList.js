import React from "react";
import { Component } from "react";
import API from "../utils/API";
import ResultFrame from "./ResultFrame";

class TableList extends Component {

  state = {
      results: {},
      alphaNameTrue: true,
      alphaEmailTrue: true
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
  }

  
  sortByName = () => {
    if (this.state.alphaNameTrue){
      this.setState({results : this.state.results.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)})
      this.state.alphaNameTrue = !this.state.alphaNameTrue
    }
    else{
      this.setState({results : this.state.results.sort((a, b) => (a.name.first < b.name.first) ? 1 : -1)})
      this.state.alphaNameTrue = !this.state.alphaNameTrue
    }
  }

  sortByEmail = () => {
    if (this.state.alphaEmailTrue){
      this.setState({results : this.state.results.sort((a, b) => (a.email> b.email) ? 1 : -1)})
      this.state.alphaEmailTrue = !this.state.alphaEmailTrue
    }
    else{
      this.setState({results : this.state.results.sort((a, b) => (a.email < b.email) ? 1 : -1)})
      this.state.alphaEmailTrue = !this.state.alphaEmailTrue
    }
  }

  render(){
    if (this.state.results.length > 0){
        console.log(this.state.results)
        return (
            <ResultFrame sortByEmail = {this.sortByEmail} sortByName = {this.sortByName} value = {this.state.results}/>
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