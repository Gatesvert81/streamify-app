import React, { createContext, useState } from 'react'

export const DisplayContentContext = createContext('HomeExploreTab')

function DisplayContext({children}) {
    const [display, setDisplay] = useState('HomeExploreTab')


    return (
        <DisplayContentContext.Provider value={[display, setDisplay]}>
            {children}
        </DisplayContentContext.Provider >
    )
}

export default DisplayContext
