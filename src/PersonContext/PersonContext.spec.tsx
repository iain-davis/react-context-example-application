import React from 'react'
import {mount} from 'enzyme'
import {PersonContextProvider} from './PersonContext'

describe('PersonContextProvider', () => {
    it('does not add to the rendering', () => {
        let provider = mount(<PersonContextProvider/>)

        expect(provider).toBeEmptyRender()
    })

    it('renders child components', () => {
        const provider = mount(<PersonContextProvider>
            <p>Exciting Content</p>
        </PersonContextProvider>)

        expect(provider.find('p').text()).toEqual('Exciting Content')
    })
})
