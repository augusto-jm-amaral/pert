import React from 'react'

import './Pert.css'

import ProjectList from './../ProjectList/ProjectList'

const Pert = ({projects}) => {
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
			  </div>
			</div>
	)
}

export default Pert