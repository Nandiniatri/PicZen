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
        pos, setPos, size, setSize,
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
        outlineOn,
        blurOn,
        textureOn,
        filterOn
    } = useAppEvent();


    const canvasRef = useRef(null);


    // const [pos, setPos] = useState({ x: 50, y: 50 });
    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    // const [size, setSize] = useState({ width: 200, height: 200 });
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
                        filterOn={filterOn}
                        textureOn={textureOn}
                        blurOn={blurOn}
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

                <div className="imageDrop-right-panel">
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
