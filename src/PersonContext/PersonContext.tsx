import React, {ReactNode} from 'react'

export type Person = {
    name: string
}

const defaultPerson = {name: ''}
export const PersonContext = React.createContext(defaultPerson)

export function PersonContextProvider(properties: { initialPerson: Person, children?: ReactNode }) {
    return <PersonContext.Provider value={properties.initialPerson}>{properties.children}</PersonContext.Provider>
}

PersonContextProvider.defaultProps = {
    initialPerson: {name: ''}
}
