import React from 'react'
import {mount} from 'enzyme'
import {PersonContextProvider} from './PersonContext'

describe('PersonContextProvider', () => {
    it('does not add to the rendering', () => {
        let provider = mount(<PersonContextProvider/>)

        expect(provider).toBeEmptyRender()
    })
})
