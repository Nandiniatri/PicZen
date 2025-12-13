import { useState, useRef } from 'react';
import EditorCanvas from '../../../components/editorCanvas/EditorCanvas';
import Modal from '../../../components/modal/Modal';
import { useAppEvent } from '../../../contextApi/AppEventContext';
import './Resize.css';

const Resize = () => {
    const { handleModelClose, openModal, selectedFiles, canvasTexts, setCanvasTexts, canvasBgColor, canvasImageBackground } = useAppEvent();

    const canvasRef = useRef(null);

    const [pos, setPos] = useState({ x: 50, y: 50 });
    const [size, setSize] = useState({ width: 200, height: 200 });
    const [dragging, setDragging] = useState(false);
    const [resizing, setResizing] = useState(false);
    const [currentHandle, setCurrentHandle] = useState(null);

    const [editingTextId, setEditingTextId] = useState(null);
    const [editingValue, setEditingValue] = useState("");

    const startDrag = (e) => {};
    const onDrag = (e) => {};
    const startResize = (e, handle) => {};
    const onResize = (e) => {};
    const stopActions = () => { setDragging(false); setResizing(false); setCurrentHandle(null); };
    const handleTextClick = (txt) => { setEditingTextId(txt.id); setEditingValue(txt.label); };
    const handleTextSave = () => { 
        setCanvasTexts(prev => prev.map(t => t.id === editingTextId ? { ...t, label: editingValue } : t)); 
        setEditingTextId(null); 
    };

    if (!selectedFiles || selectedFiles.length === 0) return <p>No image selected</p>;

    return (
        <Modal open={openModal} onClose={handleModelClose} title="Resize Image" >
            <div className="resize-page">

                <div className="resize-left">
                    <EditorCanvas
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

                <div className="resize-right-panel">

                    <div className="resize-search">
                        <input type="text" placeholder="Search size presets" />
                    </div>

                    <div className="resize-section">
                        <h4>Recent</h4>
                        <div className="resize-item">
                            <span>📸 Instagram Story</span>
                            <p>1080 × 1920, 9:16</p>
                        </div>
                    </div>

                    <div className="resize-section">
                        <h4>Standard</h4>

                        <div className="resize-item">
                            <span>📐 Custom size</span>
                        </div>

                        <div className="resize-item">
                            <span>🖼 Landscape</span>
                            <p>2016 × 1512, 4:3</p>
                        </div>

                        <div className="resize-item">
                            <span>📏 Portrait</span>
                            <p>1512 × 2016, 3:4</p>
                        </div>

                        <div className="resize-item">
                            <span>⬜ Square</span>
                            <p>1512 × 1512, 1:1</p>
                        </div>
                    </div>

                    <div className="resize-section">
                        <h4>Social Media sizes</h4>

                        <div className="resize-item">
                            <span>📸 Instagram Story</span>
                            <p>1080 × 1920, 9:16</p>
                        </div>
                    </div>

                    <button className="resize-btn">Resize</button>
                    <button className="cancel-btn" onClick={handleModelClose}>Cancel</button>

                </div>
            </div>
        </Modal>
    );
}

export default Resize;





// import React, { useRef, useState } from "react";
// import "./Resize.css";
// import EditorCanvas from "../../../components/editorCanvas/EditorCanvas";

// const SIZE_PRESETS = {
//     story: { w: 1080, h: 1920 },
//     landscape: { w: 2016, h: 1512 },
//     portrait: { w: 1512, h: 2016 },
//     square: { w: 1512, h: 1512 }
// };

// const Resize = ({ selectedFile }) => {
//     const canvasRef = useRef(null);

//     const [canvasSize, setCanvasSize] = useState({
//         width: 600,
//         height: 500
//     });

//     const [pos, setPos] = useState({ x: 0, y: 0 });
//     const [size, setSize] = useState({ width: 0, height: 0 });
//     const [dragging, setDragging] = useState(false);
//     const [resizing, setResizing] = useState(null);

//     /* ---------------- DRAG ---------------- */
//     const startDrag = (e) => {
//         e.preventDefault();
//         setDragging({
//             offsetX: e.clientX - pos.x,
//             offsetY: e.clientY - pos.y
//         });
//     };

//     const onDrag = (e) => {
//         if (!dragging) return;
//         setPos({
//             x: e.clientX - dragging.offsetX,
//             y: e.clientY - dragging.offsetY
//         });
//     };

//     /* ---------------- RESIZE ---------------- */
//     const startResize = (e, handle) => {
//         e.preventDefault();
//         setResizing({
//             handle,
//             startX: e.clientX,
//             startY: e.clientY,
//             startW: size.width,
//             startH: size.height
//         });
//     };

//     const onResize = (e) => {
//         if (!resizing) return;

//         const dx = e.clientX - resizing.startX;
//         const dy = e.clientY - resizing.startY;

//         let newW = resizing.startW;
//         let newH = resizing.startH;

//         if (resizing.handle.includes("r")) newW += dx;
//         if (resizing.handle.includes("b")) newH += dy;

//         if (newW > 30 && newH > 30) {
//             setSize({ width: newW, height: newH });
//         }
//     };

//     const stopActions = () => {
//         setDragging(false);
//         setResizing(null);
//     };

//     /* ---------------- APPLY CANVAS SIZE ---------------- */
//     const applyPreset = (preset) => {
//         const { w, h } = SIZE_PRESETS[preset];

//         // scale canvas to fit screen
//         const maxW = 700;
//         const scale = Math.min(maxW / w, 1);

//         setCanvasSize({
//             width: w * scale,
//             height: h * scale
//         });
//     };

//     return (
//         <div className="resize-page">
//             {/* LEFT */}
//             <div className="resize-left">
//                 <div
//                     className="canvas-wrapper"
//                     style={{
//                         width: canvasSize.width,
//                         height: canvasSize.height
//                     }}
//                 >
//                     <EditorCanvas
//                         canvasRef={canvasRef}
//                         selectedFile={selectedFile}
//                         pos={pos}
//                         setPos={setPos}
//                         size={size}
//                         setSize={setSize}
//                         dragging={dragging}
//                         startDrag={startDrag}
//                         onDrag={onDrag}
//                         startResize={startResize}
//                         onResize={onResize}
//                         stopActions={stopActions}
//                     />
//                 </div>
//             </div>

//             {/* RIGHT */}
//             <div className="resize-right-panel">
//                 <h4>Recent</h4>
//                 <div className="resize-item" onClick={() => applyPreset("story")}>
//                     <span>Instagram Story</span>
//                     <p>1080 × 1920 (9:16)</p>
//                 </div>

//                 <h4>Standard</h4>
//                 <div className="resize-item" onClick={() => applyPreset("landscape")}>
//                     <span>Landscape</span>
//                     <p>2016 × 1512 (4:3)</p>
//                 </div>

//                 <div className="resize-item" onClick={() => applyPreset("portrait")}>
//                     <span>Portrait</span>
//                     <p>1512 × 2016 (3:4)</p>
//                 </div>

//                 <div className="resize-item" onClick={() => applyPreset("square")}>
//                     <span>Square</span>
//                     <p>1512 × 1512 (1:1)</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Resize;
