import React from "react";
import { Component } from "react";
import API from "../utils/API";
import ResultFrame from "./ResultFrame";

class TableList extends Component {

  state = {
      results: {},
      originalResults: {},
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
          this.setState({originalResults : res.data.results})
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

  getSearchResults = searchTerm => {
      let output = []
      searchTerm = String(searchTerm.value).toUpperCase()
      this.state.originalResults.forEach( result => {
        if ((result.name.first.toUpperCase()).includes(searchTerm) || (result.name.first.toUpperCase()).includes(searchTerm)){
          output.push(result)
        }
      })

      this.setState({results: output})
  }

  blocker = item => {
    item.preventDefault()
  }

  render(){
    if (this.state.results.length > 0){
        return (
            <ResultFrame blocker = {this.blocker} getSearchResults = {this.getSearchResults} sortByEmail = {this.sortByEmail} sortByName = {this.sortByName} value = {this.state.results}/>
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