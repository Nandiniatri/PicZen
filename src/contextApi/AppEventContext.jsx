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

    const fetchContent = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/contents');
            const result = await response.json();
            console.log('Menus data fetched successfully:', result);
            setContents(result);
        } catch (error) {
            console.error('Error fetching menus data:', error);
        }
    }

    const handleTryItFree = () => {
        fetchMenus();
        fetchContent();
        navigate('/second');
    }

    return (
        <AppEventContext.Provider value={{
            handleTryItFree,
            menus,
            contents
        }}>
            {children}
        </AppEventContext.Provider>
    )
}

export const useAppEvent = () => useContext(AppEventContext);

export default AppEventProvider;