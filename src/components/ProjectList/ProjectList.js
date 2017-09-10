import React from 'react'

import Project from './../Project/Project'

const ProjectList = ({projects}) => {

	const renderingProjects = projects.map( (project, index) => {

		const { name, description, itens } = project

		return <Project 
							key={index} 
							name={name} 
							description={description} 
							itens={itens} 
						/>
	})

	return (
		<div>
			{renderingProjects}
		</div>
	)
}

export default ProjectList