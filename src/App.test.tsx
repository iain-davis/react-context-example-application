import React from 'react'
import App from './App'
import {shallow} from 'enzyme'

describe('App', () => {
    it('renders', () => {
        const app = shallow(<App/>)

        expect(app).not.toBeEmptyRender()
    })
})
