import React, {ReactNode, useState} from 'react'

export type Person = {
    name: string
}

const defaultPerson: Person = {name: ''}
export const PersonContext = React.createContext(defaultPerson)

const defaultPersonStateChange: React.Dispatch<React.SetStateAction<Person>> = (personStateChange: ((prevState: Person) => Person) | Person) => {}
export const PersonStateChangeContext = React.createContext(defaultPersonStateChange)

export function PersonContextProvider(properties: { initialPerson: Person, children?: ReactNode }) {
    const [person, setPerson]: [Person, React.Dispatch<React.SetStateAction<Person>>] = useState(properties.initialPerson)

    return <PersonContext.Provider value={person}>
        <PersonStateChangeContext.Provider value={setPerson}>
            {properties.children}
        </PersonStateChangeContext.Provider>
    </PersonContext.Provider>
}

PersonContextProvider.defaultProps = {
    initialPerson: {name: ''}
}
