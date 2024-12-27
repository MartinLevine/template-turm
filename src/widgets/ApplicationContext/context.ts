import React from 'react'

import globalStore from '@/store'

type GlobalStoreType = typeof globalStore

type ApplicationContextType = {
    store: GlobalStoreType
}

const ApplicationContext = React.createContext<ApplicationContextType>(
    null as any
)

const useApplicationContext = () => React.useContext(ApplicationContext)
const useStore = () => {
    const ctx = useApplicationContext()
    return ctx.store as GlobalStoreType
}

export {
    ApplicationContextType,
    ApplicationContext,
    useApplicationContext,
    useStore
}
