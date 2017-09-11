import React from 'react'
import { shallow } from 'enzyme'
import ProjectForm from './ProjectForm'

const project = {
	name: 'Projeto 1',
	description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna. Fusce nibh. Duis risus. Curabitur sagittis hendrerit',
	itens: [],
}

it('renders without crashing', () => {
	const { name, description, itens } = project

  shallow(<ProjectForm 
  					name={name} 
  					description={description} 
  					itens={itens}
  				/>)
})