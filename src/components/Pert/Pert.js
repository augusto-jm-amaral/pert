import React, { Component } from 'react'

import './Pert.css'

import ProjectList from './../ProjectList/ProjectList'
import ProjectForm from './../ProjectForm/ProjectForm'

class Pert extends Component {
	constructor(props) {
		super(props)
		const { projects } = props
		this.state = { 
			projects,
			adding: false
		}
	}

	render() {
		const { projects } = this.state

		return (
			<div className="row">
				<div className="col s1 m2" />
			  <div className="col s11 m8">
			    <h2 className="header">
			    	Projetos
			    	<a className="btn-floating btn-large waves-effect waves-light indigo right">
			    		<i className="material-icons">add</i>
			    	</a>
			    </h2>
					<blockquote className="">
			      Abaixo a lista de projetos.<br/>
			      <b>Atenção</b>, esta lista sera salva em seu navegador.
			    </blockquote>
			    <ProjectList projects={projects}/>
			    <ProjectForm />
			  </div>
			</div>
		)
	}
}

export default Pert