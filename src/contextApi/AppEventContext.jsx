import { createContext, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const AppEventContext = createContext();

const AppEventProvider = ({ children }) => {
    const navigate = useNavigate();
    const [menus, setMenus] = useState([]);
    const [contents, setContents] = useState([]);

    const fetchMenus = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/menus');
            const result = await response.json();
            console.log('Menus data fetched successfully:', result);
            setMenus(result);
        } catch (error) {
            console.error('Error fetching menus data:', error);
        }
    }

    const handleTryItFree = () => {
        fetchMenus();
        navigate('/second');
    }

    return (
        <AppEventContext.Provider value={{
            handleTryItFree,
            menus,
        }}>
            {children}
        </AppEventContext.Provider>
    )
}

export const useAppEvent = () => useContext(AppEventContext);

export default AppEventProvider;