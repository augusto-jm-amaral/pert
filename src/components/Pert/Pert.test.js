import React from 'react';
import { shallow } from 'enzyme'
import Pert from './Pert';

it('renders without crashing', () => {
  const projects = []
  shallow(<Pert projects={projects} />)
})