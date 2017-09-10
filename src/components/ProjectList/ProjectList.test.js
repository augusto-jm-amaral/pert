import React from 'react';
import { shallow } from 'enzyme'
import ProjectList from './ProjectList';

it('renders without crashing', () => {
	const projects = []
  shallow(<ProjectList projects={projects} />)
})

it('render 1 project project', () => {
  const projects = [{
  	name: 'Project 1'
  }]
  shallow(<ProjectList projects={projects} />)
})

it('render 3 project project', () => {
  const projects = [
	  { name: 'Project 1' },
	  { name: 'Project 2' },
	  { name: 'Project 3' },
  ]
  shallow(<ProjectList projects={projects} />)
})
