import React from 'react'

const ProjectForm = () => {
	return (
		<div className="row">
	    <form className="col s12">
	      <div className="row">
	        <div className="input-field col s12">
	          <input placeholder="ex: Projeto Foo Bar" id="name" type="text" className="validate" />
	          <label for="name" >Name</label>
	        </div>
	        <div className="input-field col s12">
	          <textarea id="description" className="materialize-textarea"></textarea>
	          <label for="description">Descrição</label>
	        </div>
	      </div>
	    </form>
  	</div>
	)
}

export default ProjectForm