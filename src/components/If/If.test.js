import React from 'react'
import { shallow } from 'enzyme'
import If from './If'

it('renders without crashing', () => {
	shallow(<If />)
})

it('should render element', () => {
	const test = true
	const element = <h1>Should render this element</h1>
	
	const wrapper = shallow(
		<If test={test}>
			{element}
		</If>
	)

	expect(wrapper).toContainReact(element)
})