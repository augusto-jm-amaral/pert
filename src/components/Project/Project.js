import React from 'react'

import './Project.css'
import logo from './../../assets/home.jpg'

const Project = ({name, description}) => {
	return (
    <div className="card horizontal">
      <div className="card-image">
        <img src={logo} alt="P.E.R.T."/>
      </div>
      <div className="card-stacked">
        <div className="card-content">
        	<h4>{name}</h4>
          <p>{description}</p>
        </div>
        <div className="card-action project-actions">
		    	<a className="btn-floating btn-large waves-effect waves-light red right">
		    		<i className="material-icons">delete</i>
		    	</a>
		    	<a className="btn-floating btn-large waves-effect waves-light blue right">
		    		<i className="material-icons">edit</i>
		    	</a>
		    	<a className="btn-floating btn-large waves-effect waves-light green right">
		    		<i className="material-icons">remove_red_eye</i>
		    	</a>
        </div>
      </div>
    </div>
	)
}

export default Project