import React, {ReactNode} from 'react'

export type Person = {
    name: string
}

export const PersonContext = React.createContext({name: ''})

export function PersonContextProvider(properties: { initialPerson: Person, children?: ReactNode }) {
    return <PersonContext.Provider value={properties.initialPerson}>{properties.children}</PersonContext.Provider>
}

PersonContextProvider.defaultProps = {
    initialPerson: {name: ''}
}
