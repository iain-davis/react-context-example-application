import React, {ReactNode} from 'react'

export function PersonContextProvider(properties: { children?: ReactNode }) {
    return <React.Fragment>{properties.children}</React.Fragment>
}
