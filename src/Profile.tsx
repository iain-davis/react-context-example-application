import React, {useContext} from 'react'
import {PersonContext} from './PersonContext/PersonContext'

export function Profile() {
    const person = useContext(PersonContext)

    return <div>
        <p>Name: {person.name}</p>
    </div>
}
