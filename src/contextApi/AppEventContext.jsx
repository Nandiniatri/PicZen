import { createContext, useContext } from "react"


const AppEventContext = createContext();

const AppEventProvider = ({ children }) => {
    return (
        <AppEventContext.Provider value={{}}>
            {children}
        </AppEventContext.Provider>
    )
}

export const useAppEvent = () => useContext(AppEventContext);

export default AppEventProvider;