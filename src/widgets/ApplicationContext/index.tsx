import React, { PropsWithChildren } from 'react'

import {
    ApplicationContextType,
    ApplicationContext,
    useApplicationContext,
    useStore
} from './context'

const Application: React.FC<PropsWithChildren<ApplicationContextType>> = ({
    store,
    children
}) => {
    return (
        <ApplicationContext.Provider value={{ store }}>
            {children}
        </ApplicationContext.Provider>
    )
}

export { Application, useApplicationContext, useStore }
