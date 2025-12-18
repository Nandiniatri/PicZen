import { createContext, use, useContext, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AppEventContext = createContext();

const AppEventProvider = ({ children }) => {
    const [pos, setPos] = useState({ x: 50, y: 50 });
    const [size, setSize] = useState({ width: 200, height: 200 });
    const [canvasSize] = useState({ width: 900, height: 700 });
    const [processedImg, setProcessedImg] = useState(null);
    const navigate = useNavigate();
    const [menus, setMenus] = useState([]);
    const [contents, setContents] = useState([]);
    const fileInputRef = useRef(null);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [editHeaderData, setEditHeaderData] = useState([]);
    const [activeRightPanel, setActiveRightPanel] = useState(null);
    const [textStyle, setTextStyle] = useState([]);
    const [newInPiczen, setNewInPiczen] = useState([]);
    const [classicArrive, setClassicArrive] = useState([]);
    const [photoEditingClassics, setPhotoEditingClassics] = useState([]);
    const [canvasTexts, setCanvasTexts] = useState([]);
    const [solidColor, setSolidColor] = useState(null);
    const [imageBackground, setImageBackground] = useState(null);
    const [insertData, setInsertData] = useState(null);
    const [openModal, setOpenModal] = useState(true);
    const [templateData, setTemplateData] = useState([]);


    const [canvasImageBackground, setICanvasImageBackground] = useState(null);
    const [canvasBgColor, setCanvasBgColor] = useState('transparent');
    const [hideSubject, setHideSubject] = useState(false);

    const [lightOn, setLightOn] = useState(false);
    const [shadowOn, setShadowOn] = useState(false);
    const [outlineOn, setOutlineOn] = useState(false);

    // const [allEffects , setAllEffects] = useState({
    //     lightEffect : false,
    //     shadowEffect : false,
    //     outlineEffect : false,
    //     blurOn: false
    // });
    const [blurOn, setBlurOn] = useState(false);
    const [textureOn, setTextureOn] = useState(false);
    const [filterOn, setFilterOn] = useState(false);

    const imageFilter = [
        lightOn && "brightness(1.15) contrast(1.1) saturate(1.1)",
        filterOn && "grayscale(1) contrast(1.25) brightness(0.98)",
        textureOn && "brightness(0.80) contrast(0.90) saturate(0.86)",
        blurOn && "blur(2px)",
        shadowOn && "drop-shadow(0 18px 35px rgba(0,0,0,0.35))",
        outlineOn &&
        "drop-shadow(2px 0 0 red) drop-shadow(-2px 0 0 red) drop-shadow(0 2px 0 red) drop-shadow(0 -2px 0 red)"
    ]
    .filter(Boolean)
    .join(" ");

    const handleDownload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = canvasSize.width;
        canvas.height = canvasSize.height;

        const ctx = canvas.getContext("2d");

        /* 1️⃣ CANVAS BACKGROUND COLOR */
        if (canvasBgColor && canvasBgColor !== "transparent") {
            ctx.fillStyle = canvasBgColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        /* 2️⃣ CANVAS BACKGROUND IMAGE */
        if (canvasImageBackground) {
            const bgImg = new Image();
            bgImg.crossOrigin = "anonymous";
            bgImg.src = canvasImageBackground;

            bgImg.onload = () => {
                ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
                drawSubject(); // continue flow
            };
        } else {
            drawSubject();
        }

        /* 3️⃣ SUBJECT IMAGE (background removed) */
        function drawSubject() {
            if (!processedImg) {
                drawTexts();
                return;
            }

            const subjectImg = new Image();
            subjectImg.crossOrigin = "anonymous";
            subjectImg.src = processedImg;

            subjectImg.onload = () => {
                ctx.filter = imageFilter || "none"; // 🔥 APPLY FILTERS
                ctx.drawImage(
                    subjectImg,
                    pos.x,
                    pos.y,
                    size.width,
                    size.height
                );
                ctx.filter = "none";
                drawTexts();
            };
        }

        /* 4️⃣ TEXTS */
        function drawTexts() {
            canvasTexts.forEach((txt) => {
                ctx.font = "24px Arial";
                ctx.fillStyle = "#000";
                ctx.fillText(txt.label, txt.x, txt.y + 24);
            });

            downloadImage();
        }

        /* 5️⃣ DOWNLOAD */
        function downloadImage() {
            const link = document.createElement("a");
            link.download = "piczen-edit.png";
            link.href = canvas.toDataURL("image/png");
            link.click();
        }
    };


    // const handleDownload = () => {  
    //     const canvas = document.createElement('canvas');
    //     canvas.width = canvasSize.width;
    //     canvas.height = canvasSize.height;
    //     const ctx = canvas.getContext('2d');
    //     const img = new Image();
    //     img.src = URL.createObjectURL(selectedFiles[0]);
    //     img.onload = () => {
    //         ctx.drawImage(img, pos.x, pos.y, size.width, size.height);
    //         const link = document.createElement('a');
    //         link.download = 'canvas-image.png';
    //         link.href = canvas.toDataURL();
    //         link.click();
    //     };
    // };


    const handleMiddleOn = () => {
        setPos((prev) => ({
            ...prev,
            y: (canvasSize.height - size.height) / 2
        }));
    };


    const handleCenterOn = () => {
        setPos({
            x: (canvasSize.width - size.width) / 2,
            y: (canvasSize.height - size.height) / 2
        });
    }

    const handleFilterOn = () => {
        setFilterOn(prev => !prev);
    }

    const handleTexture = () => {
        setTextureOn(prev => !prev);
    }

    const handleBlur = () => {
        setBlurOn(prev => !prev);
    };

    const handleOutline = () => {
        setOutlineOn(prev => !prev);
    }

    const handleShadow = () => {
        setShadowOn(prev => !prev);
    }

    const handleLight = () => {
        setLightOn(prev => !prev);
    }



    const handleTemplate = (item) => {
        console.log("Template Item Selected:", item);
    };


    const handleModelClose = () => {
        setOpenModal(false);
    }

    const fetchTemplateData = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/template');
            const data = await response.json();
            setTemplateData(data);
        } catch (error) {
            console.error("Error fetching JSON:", error);
        }
    }

    const handleAIGenerate = () => {
        alert('hello')
        navigate('/aiModal');
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:4000/api/insertPanelData");
                const data = await response.json();
                setInsertData(data);
            } catch (error) {
                console.error("Error fetching JSON:", error);
            }
        };

        fetchData();
    }, []);


    const handleImageBackground = (item) => {
        setICanvasImageBackground(item.thumb);
    }

    const handleImageBackgroundAPI = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/imageBackground');
            const result = await response.json();
            setImageBackground(result);
        } catch (error) {
            console.log('Network Error in Image Background');
        }
    }

    const handleImage = () => {
        setActiveRightPanel("Background Image");
    }

    const handlePalette = (color) => {
        setCanvasBgColor(color);
    }

    const handleSolidColorAPI = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/solidColor');
            const result = await response.json();
            setSolidColor(result);
        } catch (error) {
            console.log("Network Error");
        }
    }

    const handleSolidColor = () => {
        setActiveRightPanel("Solid color");
    }

    const addTextToCanvas = (textItem) => {
        setCanvasTexts((prev) => [
            ...prev,
            {
                id: Date.now(),
                label: textItem.label,
                class: textItem.class,
                x: 50,
                y: 50,
            },
        ]);
    };

    const fetchPhotoEditingClassics = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/photoEditingClassicsData');
            const result = await response.json();
            // console.log('new In PhotoEditingClassics', result);
            setPhotoEditingClassics(result);
        } catch (error) {
            console.error('Error fetching:', error);
        }
    }


    const fetchClassicArrive = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/classicsArriveData');
            const result = await response.json();
            // console.log('new In classicsArriveData', result);
            setClassicArrive(result);
        } catch (error) {
            console.error('Error fetching:', error);
        }
    }


    const fetchNewInPiczen = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/newInPiczenData');
            const result = await response.json();
            // console.log('new In Piczen', result);
            setNewInPiczen(result);
        } catch (error) {
            console.error('Error fetching:', error);
        }
    }

    const fetchTextStyleData = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/textStyles');
            const result = await response.json();
            // console.log('add text Data', result);
            setTextStyle(result);
        } catch (error) {
            console.error('Error fetching Edit Header Data:', error);
        }
    }

    const handleTextInEdit = (item) => {
        console.log("Image Drop Header", item.name);
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
            // console.log('Edit Header Data', result);
            setEditHeaderData(result);
        } catch (error) {
            console.error('Error fetching Edit Header Data:', error);
        }
    }

    useEffect(() => {
        fetchEditHeaderData();
        fetchTextStyleData();
        fetchNewInPiczen();
        fetchClassicArrive();
        fetchPhotoEditingClassics();
        handleSolidColorAPI();
        handleImageBackgroundAPI();
        fetchTemplateData()
    }, [])



    //input Value
    const handleImageDropBtn = () => {
        fileInputRef.current.click();
    }

    const handleImageSelect = (event) => {
        const files = event.target.files;
        // console.log("Selected Files:", files);
        setSelectedFiles(files);
        navigate("/imageDrop")
    };



    //sidebar data fetch functions
    const fetchMenus = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/menus');
            const result = await response.json();
            // console.log('Menus data fetched successfully:', result);
            setMenus(result);
        } catch (error) {
            console.error('Error fetching menus data:', error);
        }
    }

    const fetchContent = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/contents');
            const result = await response.json();
            // console.log('Menus data fetched successfully:', result);
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
            pos, setPos, size, setSize, canvasSize,
            handleTryItFree,
            menus,
            contents,
            handleImageDropBtn,
            selectedFiles,
            editHeaderData,
            handleEditPageHome,
            handlePageSecondRoute,
            handleTextInEdit,
            activeRightPanel,
            newInPiczen,
            classicArrive,
            photoEditingClassics,
            setSelectedFiles,

            textStyle,
            setTextStyle,
            setActiveRightPanel,

            canvasTexts,
            addTextToCanvas,
            setCanvasTexts,
            handleSolidColor,
            solidColor, handlePalette,

            canvasBgColor, setCanvasBgColor,
            handleImage,
            imageBackground,
            handleImageBackground,
            canvasImageBackground,
            insertData,
            handleAIGenerate,
            templateData,
            handleTemplate,
            handleModelClose, openModal,
            hideSubject,
            lightOn, setLightOn, handleLight, handleShadow, shadowOn, outlineOn, handleOutline, blurOn, handleBlur, textureOn, handleTexture, filterOn, handleFilterOn, handleCenterOn, handleMiddleOn, handleDownload,
            processedImg, setProcessedImg, imageFilter
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