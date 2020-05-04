import React from 'react'
import {shallow} from 'enzyme'

import App from './App'
import {PersonContextProvider} from './PersonContext/PersonContext'

describe('App', () => {
    it('renders', () => {
        const app = shallow(<App/>)

        expect(app).not.toBeEmptyRender()
    })

    it('has the PersonContextProvider', () => {
        const app = shallow(<App/>)

        expect(app.find(PersonContextProvider)).toHaveLength(1)
    })
})
