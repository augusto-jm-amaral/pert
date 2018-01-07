import React, { Component } from 'react'

import Welcome from './components/Welcome/Welcome'
import Pert from './components/Pert/Pert'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			begin: false,
			projects: []
		}
		this.doBegin = this.doBegin.bind(this)
	}

	doBegin(e) {
		e.preventDefault()
		this.setState({ begin: true })
	}

  render() {

  	const { projects, begin } = this.state

  	const content = begin ?
  		<Pert projects={projects} /> :
  		<Welcome doBegin={this.doBegin} /> 

    return (
      <div className="App container">
        {content}
      </div>
    );
  }
}

export default App;
