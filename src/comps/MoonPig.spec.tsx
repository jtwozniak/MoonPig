import * as React from 'react'
import { shallow } from 'enzyme'
import { MoonPig } from './MoonPig'

describe('MoonPig', () => {
  it('should render correctly', () => {
    const component = shallow(<MoonPig />)

    expect(component).toMatchSnapshot()
  })
})
