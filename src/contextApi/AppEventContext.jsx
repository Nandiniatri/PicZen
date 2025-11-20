import { createContext, use, useContext, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AppEventContext = createContext();

const AppEventProvider = ({ children }) => {
    const navigate = useNavigate();
    const [menus, setMenus] = useState([]);
    const [contents, setContents] = useState([]);
    const fileInputRef = useRef(null);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [editHeaderData, setEditHeaderData] = useState([]);
    const [activeRightPanel, setActiveRightPanel] = useState(null);

    const handleTextInEdit = (item) => {
        console.log(item.name);
        setActiveRightPanel(item.name);
    }

    const handlePageSecondRoute = () => {
        navigate("/");
    }

    const handleEditPageHome = () => {
        navigate("/second");
    }

    const fetchEditHeaderData = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/editHeader');
            const result = await response.json();
            console.log('Edit Header Data', result);
            setEditHeaderData(result);
        } catch (error) {
            console.error('Error fetching Edit Header Data:', error);
        }
    }

    useEffect(() => {
        fetchEditHeaderData();
    }, [])



    //input Value
    const handleImageDropBtn = () => {
        fileInputRef.current.click();
    }

    const handleImageSelect = (event) => {
        const files = event.target.files;
        console.log("Selected Files:", files);
        setSelectedFiles(files);
        navigate("/imageDrop")
    };



    //sidebar data fetch functions
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
            contents,
            handleImageDropBtn,
            selectedFiles,
            editHeaderData,
            handleEditPageHome,
            handlePageSecondRoute,
            handleTextInEdit,
            activeRightPanel
        }}>
            {children}

            <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                multiple
                accept="image/*"
                onChange={handleImageSelect}
            />
        </AppEventContext.Provider>
    )
}

export const useAppEvent = () => useContext(AppEventContext);

export default AppEventProvider; 