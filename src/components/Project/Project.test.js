import React from 'react'
import { shallow } from 'enzyme'
import Project from './Project'

const project = {
	name: 'Projeto 1',
	description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna. Fusce nibh. Duis risus. Curabitur sagittis hendrerit',
	itens: [],
}

it('renders without crashing', () => {
	const { name, description, itens } = project

  shallow(<Project 
  					name={name} 
  					description={description} 
  					itens={itens}
  				/>)
})

it('renders title', () => {
	const { name, description, itens } = project
	const title = <h4>{name}</h4>

  const wrapper = shallow(<Project 
  					name={name} 
  					description={description} 
  					itens={itens}
  				/>)

  expect(wrapper).toContainReact(title)
})

it('renders title', () => {
	const { name, description, itens } = project
	const descriptionTest = <p>{description}</p>

  const wrapper = shallow(<Project 
  					name={name} 
  					description={description} 
  					itens={itens}
  				/>)

  expect(wrapper).toContainReact(descriptionTest)
})
