// import { useState, useRef } from "react";
// import { useAppEvent } from "../../contextApi/AppEventContext";
// import Button from "../Button";
// import {
//     House,
//     CornerUpLeft,
//     CornerUpRight,
//     Plus,
//     AlignEndHorizontal,
//     CaseSensitive,
//     BookText,
//     Images,
//     SquareDashedTopSolid,
//     ImageUpscale,
//     Share,
//     Download
// } from "lucide-react";
// import "./ImageDrop.css";
// import AddText from "../../pages/edits/AddText";
// import AddBackgrounds from "../../pages/edits/addBackground/AddBackground";
// import BackgroundMenu from "../../pages/edits/addBackground/BackgroundModal";
// import SolidColor from "../../pages/edits/addBackground/solidColor/SolidColor";
// import ImageBackground from "../../pages/edits/addBackground/imageBackground/ImageBackground";
// import Insert from "../../pages/edits/addBackground/insert/Insert";
// import Template from "../../pages/edits/addBackground/template/Template";
// import Resize from "../../pages/edits/resize/Resize";

// const iconMap = {
//     plus: <Plus />,
//     briefcase: <AlignEndHorizontal />,
//     type: <CaseSensitive />,
//     template: <BookText />,
//     image: <Images />,
//     wand: <SquareDashedTopSolid />,
//     resize: <ImageUpscale />
// };

// const ImageDropFile = () => {
//     const { selectedFiles, editHeaderData, handleEditPageHome, handleTextInEdit, activeRightPanel, canvasTexts, setCanvasTexts, canvasBgColor, canvasImageBackground } = useAppEvent();
//     const canvasRef = useRef(null);

//     // Move State
//     const [pos, setPos] = useState({ x: 50, y: 50 });
//     const [dragging, setDragging] = useState(false);
//     const [offset, setOffset] = useState({ x: 0, y: 0 });

//     // Resize State
//     const [size, setSize] = useState({ width: 200, height: 200 });
//     const [resizing, setResizing] = useState(false);
//     const [currentHandle, setCurrentHandle] = useState(null);

//     const [editingTextId, setEditingTextId] = useState(null);
//     const [editingValue, setEditingValue] = useState("");

//     const handleTextClick = (txt) => {
//         setEditingTextId(txt.id);
//         setEditingValue(txt.label);
//     };

//     const handleTextSave = () => {
//         setCanvasTexts((prev) =>
//             prev.map((t) =>
//                 t.id === editingTextId ? { ...t, label: editingValue } : t
//             )
//         );
//         setEditingTextId(null);
//     };


//     if (!selectedFiles || selectedFiles.length === 0) {
//         return <p>No files selected.</p>;
//     }

//     const startDrag = (e) => {
//         if (resizing) return;

//         setDragging(true);
//         const rect = canvasRef.current.getBoundingClientRect();

//         setOffset({
//             x: e.clientX - rect.left - pos.x,
//             y: e.clientY - rect.top - pos.y
//         });
//     };

//     const onDrag = (e) => {
//         if (!dragging || resizing) return;

//         const rect = canvasRef.current.getBoundingClientRect();

//         let newX = e.clientX - rect.left - offset.x;
//         let newY = e.clientY - rect.top - offset.y;

//         newX = Math.max(0, Math.min(newX, rect.width - size.width));
//         newY = Math.max(0, Math.min(newY, rect.height - size.height));

//         setPos({ x: newX, y: newY });
//     };


//     const startResize = (e, handle) => {
//         e.stopPropagation();
//         setResizing(true);
//         setCurrentHandle(handle);
//     };

//     const onResize = (e) => {
//         if (!resizing) return;

//         const rect = canvasRef.current.getBoundingClientRect();
//         let newWidth = size.width;
//         let newHeight = size.height;
//         let newX = pos.x;
//         let newY = pos.y;

//         const mouseX = e.clientX - rect.left;
//         const mouseY = e.clientY - rect.top;

//         if (currentHandle === "br") {
//             newWidth = mouseX - pos.x;
//             newHeight = mouseY - pos.y;
//         }
//         if (currentHandle === "tr") {
//             newWidth = mouseX - pos.x;
//             newHeight = size.height + (pos.y - mouseY);
//             newY = mouseY;
//         }
//         if (currentHandle === "bl") {
//             newWidth = size.width + (pos.x - mouseX);
//             newX = mouseX;
//             newHeight = mouseY - pos.y;
//         }
//         if (currentHandle === "tl") {
//             newWidth = size.width + (pos.x - mouseX);
//             newHeight = size.height + (pos.y - mouseY);
//             newX = mouseX;
//             newY = mouseY;
//         }


//         if (newWidth > 50 && newHeight > 50) {
//             setSize({ width: newWidth, height: newHeight });
//             setPos({ x: newX, y: newY });
//         }
//     };

//     const stopActions = () => {
//         setDragging(false);
//         setResizing(false);
//         setCurrentHandle(null);
//     };

//     return (
//         <div className="image-drop-container">

//             <header className="header-container">
//                 <div className="header-left">
//                     <House size={22} color="#9b4bff" onClick={handleEditPageHome} />
//                 </div>

//                 <div className="header-undo-redo">
//                     <CornerUpLeft className="header-icon" />
//                     <CornerUpRight className="header-icon" />
//                 </div>


//                 <div className="header-center">
//                     {editHeaderData &&
//                         editHeaderData.map((item) => (
//                             <div className="header-item" key={item.id} onClick={() => handleTextInEdit(item)}>
//                                 <span className="header-item-icon">{iconMap[item.icon]}</span>
//                                 <p className="header-item-text">{item.name}</p>
//                             </div>
//                         ))}
//                 </div>


//                 <div className="header-right">
//                     <Button className="header-btn">
//                         <Download size={18} /> Download
//                     </Button>
//                     <Button className="header-btn share-btn">
//                         <Share size={18} /> Share
//                     </Button>
//                 </div>
//             </header>

//             {/* CANVAS + IMAGE */}
//             <div className="ImageDrop-Selected-div">
//                 <div className="imageDrop-selected-files">

//                     <div
//                         className="file-preview"
//                         ref={canvasRef}
//                         onMouseMove={(e) => {
//                             onDrag(e);
//                             onResize(e);
//                         }}
//                         onMouseUp={stopActions}
//                         onMouseLeave={stopActions}
//                         style={{
//                             position: "relative",
//                             width: "400px",
//                             height: "500px",
//                             border: "1px solid #ccc",
//                             overflow: "hidden",

//                             backgroundColor: canvasBgColor,   
//                             backgroundImage: canvasImageBackground
//                                 ? `url(${canvasImageBackground})`
//                                 : "none",
//                             backgroundSize: "cover",
//                             backgroundPosition: "center",
//                         }}

//                     >
//                         {/* IMAGE */}
//                         <img
//                             src={URL.createObjectURL(selectedFiles[0])}
//                             alt="preview"
//                             width={size.width}
//                             height={size.height}
//                             onMouseDown={startDrag}
//                             style={{
//                                 position: "absolute",
//                                 top: pos.y,
//                                 left: pos.x,
//                                 cursor: dragging ? "grabbing" : "grab",
//                                 userSelect: "none",
//                                 zIndex: 10,
//                             }}
//                         />

//                         {canvasTexts.map((txt) => (
//                             <div
//                                 key={txt.id}
//                                 style={{
//                                     position: "absolute",
//                                     top: txt.y,
//                                     left: txt.x,
//                                     zIndex: 50,
//                                     userSelect: "none",
//                                 }}
//                                 onClick={() => handleTextClick(txt)}
//                             >
//                                 {editingTextId === txt.id ? (
//                                     <input
//                                         autoFocus
//                                         value={editingValue}
//                                         onChange={(e) => setEditingValue(e.target.value)}
//                                         onBlur={handleTextSave}
//                                         onKeyDown={(e) => {
//                                             if (e.key === "Enter") handleTextSave();
//                                         }}
//                                         style={{
//                                             padding: "2px 4px",
//                                             fontSize: "18px",
//                                             border: "1px solid #ccc",
//                                             outline: "none",
//                                         }}
//                                     />
//                                 ) : (
//                                     <div className={txt.class}>{txt.label}</div>
//                                 )}
//                             </div>
//                         ))}



//                         {/* 🔵 RESIZE HANDLES (4 CORNERS) */}

//                         {/* Top-Left */}
//                         <div
//                             onMouseDown={(e) => startResize(e, "tl")}
//                             className="resize-handle"
//                             style={{
//                                 top: pos.y - 10,
//                                 left: pos.x - 10,
//                                 cursor: "nwse-resize"
//                             }}
//                         />

//                         {/* Top-Right */}
//                         <div
//                             onMouseDown={(e) => startResize(e, "tr")}
//                             className="resize-handle"
//                             style={{
//                                 top: pos.y - 10,
//                                 left: pos.x + size.width - 10,
//                                 cursor: "nesw-resize"
//                             }}
//                         />

//                         {/* Bottom-Left */}
//                         <div
//                             onMouseDown={(e) => startResize(e, "bl")}
//                             className="resize-handle"
//                             style={{
//                                 top: pos.y + size.height - 10,
//                                 left: pos.x - 10,
//                                 cursor: "nesw-resize"
//                             }}
//                         />

//                         {/* Bottom-Right */}
//                         <div
//                             onMouseDown={(e) => startResize(e, "br")}
//                             className="resize-handle"
//                             style={{
//                                 top: pos.y + size.height - 10,
//                                 left: pos.x + size.width - 10,
//                                 cursor: "nwse-resize"
//                             }}
//                         />
//                     </div>
//                 </div>

//                 <div>
//                     {activeRightPanel === "Add text" && <AddText />}
//                     {activeRightPanel === "Backgrounds" && <BackgroundMenu />}
//                     {activeRightPanel === "Solid color" && <SolidColor />}
//                     {activeRightPanel === "Background Image" && <ImageBackground />}
//                     {activeRightPanel === "Insert" && <Insert />}
//                     {activeRightPanel === "Templates" && <Template />}
//                     {activeRightPanel === "Resize" && <Resize />}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ImageDropFile;
























import { useState, useRef } from "react";
import { useAppEvent } from "../../contextApi/AppEventContext";
import Button from "../Button";
import {
    House,
    CornerUpLeft,
    CornerUpRight,
    Plus,
    AlignEndHorizontal,
    CaseSensitive,
    BookText,
    Images,
    SquareDashedTopSolid,
    ImageUpscale,
    Share,
    Download
} from "lucide-react";

import "./ImageDrop.css";

import AddText from "../../pages/edits/AddText";
import BackgroundMenu from "../../pages/edits/addBackground/BackgroundModal";
import SolidColor from "../../pages/edits/addBackground/solidColor/SolidColor";
import ImageBackground from "../../pages/edits/addBackground/imageBackground/ImageBackground";
import Insert from "../../pages/edits/addBackground/insert/Insert";
import Template from "../../pages/edits/addBackground/template/Template";
import Resize from "../../pages/edits/resize/Resize";

import EditorCanvas from "../editorCanvas/EditorCanvas";
import Person from "../../pages/edits/person/Person";

const iconMap = {
    plus: <Plus />,
    briefcase: <AlignEndHorizontal />,
    type: <CaseSensitive />,
    template: <BookText />,
    image: <Images />,
    wand: <SquareDashedTopSolid />,
    resize: <ImageUpscale />
};

const ImageDropFile = () => {
    const {
        selectedFiles,
        editHeaderData,
        handleEditPageHome,
        handleTextInEdit,
        activeRightPanel,
        canvasTexts,
        setCanvasTexts,
        canvasBgColor,
        canvasImageBackground,
        lightOn,
        shadowOn,
        outlineOn
    } = useAppEvent();


    const canvasRef = useRef(null);


    const [pos, setPos] = useState({ x: 50, y: 50 });
    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });


    const [size, setSize] = useState({ width: 200, height: 200 });
    const [resizing, setResizing] = useState(false);
    const [currentHandle, setCurrentHandle] = useState(null);

    const [editingTextId, setEditingTextId] = useState(null);
    const [editingValue, setEditingValue] = useState("");

    const handleTextClick = (txt) => {
        setEditingTextId(txt.id);
        setEditingValue(txt.label);
    };

    const handleTextSave = () => {
        setCanvasTexts((prev) =>
            prev.map((t) =>
                t.id === editingTextId ? { ...t, label: editingValue } : t
            )
        );
        setEditingTextId(null);
    };

    if (!selectedFiles || selectedFiles.length === 0) {
        return <p>No files selected.</p>;
    }

    const startDrag = (e) => {
        if (resizing) return;

        setDragging(true);
        const rect = canvasRef.current.getBoundingClientRect();

        setOffset({
            x: e.clientX - rect.left - pos.x,
            y: e.clientY - rect.top - pos.y
        });
    };

    const onDrag = (e) => {
        if (!dragging || resizing) return;

        const rect = canvasRef.current.getBoundingClientRect();

        let newX = e.clientX - rect.left - offset.x;
        let newY = e.clientY - rect.top - offset.y;

        newX = Math.max(0, Math.min(newX, rect.width - size.width));
        newY = Math.max(0, Math.min(newY, rect.height - size.height));

        setPos({ x: newX, y: newY });
    };

    // -------- RESIZE LOGIC --------
    const startResize = (e, handle) => {
        e.stopPropagation();
        setResizing(true);
        setCurrentHandle(handle);
    };

    const onResize = (e) => {
        if (!resizing) return;

        const rect = canvasRef.current.getBoundingClientRect();
        let newWidth = size.width;
        let newHeight = size.height;
        let newX = pos.x;
        let newY = pos.y;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        if (currentHandle === "br") {
            newWidth = mouseX - pos.x;
            newHeight = mouseY - pos.y;
        }
        if (currentHandle === "tr") {
            newWidth = mouseX - pos.x;
            newHeight = size.height + (pos.y - mouseY);
            newY = mouseY;
        }
        if (currentHandle === "bl") {
            newWidth = size.width + (pos.x - mouseX);
            newX = mouseX;
            newHeight = mouseY - pos.y;
        }
        if (currentHandle === "tl") {
            newWidth = size.width + (pos.x - mouseX);
            newHeight = size.height + (pos.y - mouseY);
            newX = mouseX;
            newY = mouseY;
        }

        if (newWidth > 50 && newHeight > 50) {
            setSize({ width: newWidth, height: newHeight });
            setPos({ x: newX, y: newY });
        }
    };

    const stopActions = () => {
        setDragging(false);
        setResizing(false);
        setCurrentHandle(null);
    };

    return (
        <div className="image-drop-container">

            {/* -------- HEADER -------- */}
            <header className="header-container">
                <div className="header-left">
                    <House size={22} color="#9b4bff" onClick={handleEditPageHome} />
                </div>

                <div className="header-undo-redo">
                    <CornerUpLeft className="header-icon" />
                    <CornerUpRight className="header-icon" />
                </div>

                <div className="header-center">
                    {editHeaderData &&
                        editHeaderData.map((item) => (
                            <div className="header-item" key={item.id} onClick={() => handleTextInEdit(item)}>
                                <span className="header-item-icon">{iconMap[item.icon]}</span>
                                <p className="header-item-text">{item.name}</p>
                            </div>
                        ))}
                </div>

                <div className="header-right">
                    <Button className="header-btn"><Download size={18} /> Download</Button>
                    <Button className="header-btn share-btn"><Share size={18} /> Share</Button>
                </div>
            </header>


            <div className="ImageDrop-Selected-div">
                <div className="imageDrop-selected-files">

                    <EditorCanvas
                        outlineOn={outlineOn}
                        shadowOn={shadowOn}
                        lightOn={lightOn}
                        canvasRef={canvasRef}
                        selectedFile={selectedFiles[0]}
                        canvasTexts={canvasTexts}
                        editingTextId={editingTextId}
                        editingValue={editingValue}
                        pos={pos}
                        size={size}
                        dragging={dragging}
                        canvasBgColor={canvasBgColor}
                        canvasImageBackground={canvasImageBackground}

                        startDrag={startDrag}
                        onDrag={onDrag}
                        onResize={onResize}
                        stopActions={stopActions}
                        startResize={startResize}
                        handleTextClick={handleTextClick}
                        handleTextSave={handleTextSave}
                        setEditingValue={setEditingValue}
                    />
                </div>

                <div>
                    <Person />

                    {activeRightPanel === "Add text" && <AddText />}
                    {activeRightPanel === "Backgrounds" && <BackgroundMenu />}
                    {activeRightPanel === "Solid color" && <SolidColor />}
                    {activeRightPanel === "Background Image" && <ImageBackground />}
                    {activeRightPanel === "Insert" && <Insert />}
                    {activeRightPanel === "Templates" && <Template />}
                    {activeRightPanel === "Resize" && <Resize />}
                </div>
            </div>
        </div>
    );
};

export default ImageDropFile;
