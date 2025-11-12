import { createContext, useContext } from "react"


const AppEventContext = createContext();

const AppEventProvider = ({ children }) => {
    
    const handleTryItFree = () => {
        alert("Try it Free button clicked");
    }

    return (
        <AppEventContext.Provider value={{
            handleTryItFree
        }}>
            {children}
        </AppEventContext.Provider>
    )
}

export const useAppEvent = () => useContext(AppEventContext);

export default AppEventProvider;