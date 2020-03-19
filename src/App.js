import React, { Component } from 'react'
import Search from './Components/Search';
import Display from './Components/Display';
import './App.css';



export default class App extends Component {

  state = {

    result: []

  }



  getDataFunc = name => {
    fetch(`https://swapi.co/api/people/?search=${name}`)
      .then(result => result.json())
      .then(resultData => this.setState({
        result: resultData.results
      }))
  }



  render() {
    return (
      <div>
        <Search submit={this.getDataFunc} />
        <Display showData={this.state.result} />

      </div>
    )
  }
}
