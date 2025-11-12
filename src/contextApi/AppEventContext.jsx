import { createContext, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const AppEventContext = createContext();

const AppEventProvider = ({ children }) => {
    const navigate = useNavigate();

    const handleTryItFree = () => {
        navigate('/second');
    }

    return (
        <AppEventContext.Provider value={{
            handleTryItFree,
        }}>
            {children}
        </AppEventContext.Provider>
    )
}

export const useAppEvent = () => useContext(AppEventContext);

export default AppEventProvider;