import React, {useContext} from 'react'
import {mount} from 'enzyme'
import {Person, PersonContext, PersonContextProvider} from './PersonContext'

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

    it('provides the person', () => {
        const person: Person = {name: 'name'}

        const provider = mount(<PersonContextProvider initialPerson={person}><TestPersonConsumingComponent/></PersonContextProvider>)

        expect(provider.find('p').text()).toEqual('name')
    })

    function TestPersonConsumingComponent() {
        const person: Person = useContext(PersonContext)

        return <p>{person.name}</p>
    }
})
