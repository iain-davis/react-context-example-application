import React from 'react'

import {mount} from 'enzyme'

import {Person, PersonContextProvider} from './PersonContext/PersonContext'
import {Profile} from './Profile'

describe('profile', () => {
    it('displays person name', () => {
        const initialPerson: Person = {name: 'George'}

        const loginItem = mount(
            <PersonContextProvider initialPerson={initialPerson}>
                <Profile/>
            </PersonContextProvider>
        )

        expect(loginItem.text()).toEqual('Name: George')
    })
})
