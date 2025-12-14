// import { useState, useRef } from 'react';
// import EditorCanvas from '../../../components/editorCanvas/EditorCanvas';
// import Modal from '../../../components/modal/Modal';
// import { useAppEvent } from '../../../contextApi/AppEventContext';
// import './Resize.css';

// const Resize = () => {
//     const { handleModelClose, openModal, selectedFiles, canvasTexts, setCanvasTexts, canvasBgColor, canvasImageBackground } = useAppEvent();

//     const canvasRef = useRef(null);

//     const [pos, setPos] = useState({ x: 50, y: 50 });
//     const [size, setSize] = useState({ width: 200, height: 200 });
//     const [dragging, setDragging] = useState(false);
//     const [resizing, setResizing] = useState(false);
//     const [currentHandle, setCurrentHandle] = useState(null);

//     const [editingTextId, setEditingTextId] = useState(null);
//     const [editingValue, setEditingValue] = useState("");

//     const startDrag = (e) => {};
//     const onDrag = (e) => {};
//     const startResize = (e, handle) => {};
//     const onResize = (e) => {};
//     const stopActions = () => { setDragging(false); setResizing(false); setCurrentHandle(null); };
//     const handleTextClick = (txt) => { setEditingTextId(txt.id); setEditingValue(txt.label); };
//     const handleTextSave = () => { 
//         setCanvasTexts(prev => prev.map(t => t.id === editingTextId ? { ...t, label: editingValue } : t)); 
//         setEditingTextId(null); 
//     };

//     if (!selectedFiles || selectedFiles.length === 0) return <p>No image selected</p>;

//     return (
//         <Modal open={openModal} onClose={handleModelClose} title="Resize Image" >
//             <div className="resize-page">

//                 <div className="resize-left">
//                     <EditorCanvas
//                         canvasRef={canvasRef}
//                         selectedFile={selectedFiles[0]}
//                         canvasTexts={canvasTexts}
//                         editingTextId={editingTextId}
//                         editingValue={editingValue}
//                         pos={pos}
//                         size={size}
//                         dragging={dragging}
//                         canvasBgColor={canvasBgColor}
//                         canvasImageBackground={canvasImageBackground}

//                         startDrag={startDrag}
//                         onDrag={onDrag}
//                         onResize={onResize}
//                         stopActions={stopActions}
//                         startResize={startResize}
//                         handleTextClick={handleTextClick}
//                         handleTextSave={handleTextSave}
//                         setEditingValue={setEditingValue}
//                     />
//                 </div>

//                 <div className="resize-right-panel">

//                     <div className="resize-search">
//                         <input type="text" placeholder="Search size presets" />
//                     </div>

//                     <div className="resize-section">
//                         <h4>Recent</h4>
//                         <div className="resize-item">
//                             <span>📸 Instagram Story</span>
//                             <p>1080 × 1920, 9:16</p>
//                         </div>
//                     </div>

//                     <div className="resize-section">
//                         <h4>Standard</h4>

//                         <div className="resize-item">
//                             <span>📐 Custom size</span>
//                         </div>

//                         <div className="resize-item">
//                             <span>🖼 Landscape</span>
//                             <p>2016 × 1512, 4:3</p>
//                         </div>

//                         <div className="resize-item">
//                             <span>📏 Portrait</span>
//                             <p>1512 × 2016, 3:4</p>
//                         </div>

//                         <div className="resize-item">
//                             <span>⬜ Square</span>
//                             <p>1512 × 1512, 1:1</p>
//                         </div>
//                     </div>

//                     <div className="resize-section">
//                         <h4>Social Media sizes</h4>

//                         <div className="resize-item">
//                             <span>📸 Instagram Story</span>
//                             <p>1080 × 1920, 9:16</p>
//                         </div>
//                     </div>

//                     <button className="resize-btn">Resize</button>
//                     <button className="cancel-btn" onClick={handleModelClose}>Cancel</button>

//                 </div>
//             </div>
//         </Modal>
//     );
// }

// export default Resize;





















// import { useState, useRef } from "react";
// import EditorCanvas from "../../../components/editorCanvas/EditorCanvas";
// import Modal from "../../../components/modal/Modal";
// import { useAppEvent } from "../../../contextApi/AppEventContext";
// import "./Resize.css";

// const PRESETS = {
//     instagram: { width: 1080, height: 1920 },
//     landscape: { width: 2016, height: 1512 },
//     portrait: { width: 1512, height: 2016 },
//     square: { width: 1512, height: 1512 },
// };

// const Resize = () => {
//     const {
//         openModal,
//         handleModelClose,
//         selectedFiles,
//         canvasTexts,
//         canvasBgColor,
//         canvasImageBackground,
//     } = useAppEvent();

//     const canvasRef = useRef(null);

//     const [canvasSize, setCanvasSize] = useState({ width: 800, height: 600 });
//     const [pos, setPos] = useState({ x: 150, y: 150 });
//     const [size, setSize] = useState({ width: 300, height: 300 });
//     const [dragging, setDragging] = useState(false);

//     if (!selectedFiles || selectedFiles.length === 0) {
//         return <p>No image selected</p>;
//     }

//     // 🔹 image natural size
//     const getImageSize = (file) =>
//         new Promise((resolve) => {
//             const img = new Image();
//             img.src = URL.createObjectURL(file);
//             img.onload = () =>
//                 resolve({ width: img.width, height: img.height });
//         });

//     // 🔹 preset apply
//     const applyPreset = async (preset) => {
//         const img = await getImageSize(selectedFiles[0]);

//         const scale = Math.min(
//             preset.width / img.width,
//             preset.height / img.height
//         );

//         const w = img.width * scale;
//         const h = img.height * scale;

//         setCanvasSize(preset);
//         setSize({ width: w, height: h });
//         setPos({
//             x: (preset.width - w) / 2,
//             y: (preset.height - h) / 2,
//         });
//     };

//     return (
//         <Modal open={openModal} onClose={handleModelClose} title="Resize Image">
//             <div className="resize-page">

//                 {/* LEFT SIDE */}
//                 <EditorCanvas
//                     canvasRef={canvasRef}
//                     selectedFile={selectedFiles[0]}
//                     canvasTexts={canvasTexts}

//                     pos={pos}
//                     size={size}
//                     dragging={dragging}

//                     canvasSize={canvasSize}
//                     canvasBgColor={canvasBgColor}
//                     canvasImageBackground={canvasImageBackground}

//                     startDrag={() => setDragging(true)}
//                     onDrag={(e) => {
//                         if (!dragging) return;
//                         setPos((p) => ({
//                             x: p.x + e.movementX,
//                             y: p.y + e.movementY,
//                         }));
//                     }}
//                     stopActions={() => setDragging(false)}
//                 />

//                 {/* RIGHT SIDE */}
//                 <div className="resize-right-panel">
//                     <h4>Resize Presets</h4>

//                     <div className="resize-item" onClick={() => applyPreset(PRESETS.instagram)}>
//                         📸 Instagram Story
//                         <p>1080 × 1920</p>
//                     </div>

//                     <div className="resize-item" onClick={() => applyPreset(PRESETS.landscape)}>
//                         🖼 Landscape
//                         <p>2016 × 1512</p>
//                     </div>

//                     <div className="resize-item" onClick={() => applyPreset(PRESETS.portrait)}>
//                         📏 Portrait
//                         <p>1512 × 2016</p>
//                     </div>

//                     <div className="resize-item" onClick={() => applyPreset(PRESETS.square)}>
//                         ⬜ Square
//                         <p>1512 × 1512</p>
//                     </div>

//                     <button className="cancel-btn" onClick={handleModelClose}>
//                         Cancel
//                     </button>
//                 </div>
//             </div>
//         </Modal>
//     );
// };

// export default Resize;











import { useState, useRef } from "react";
import EditorCanvas from "../../../components/editorCanvas/EditorCanvas";
import Modal from "../../../components/modal/Modal";
import { useAppEvent } from "../../../contextApi/AppEventContext";
import "./Resize.css";

const Resize = () => {
    const {
        handleModelClose,
        openModal,
        selectedFiles,
        canvasTexts,
        setCanvasTexts,
        canvasBgColor,
        canvasImageBackground,
    } = useAppEvent();

    const canvasRef = useRef(null);

    // 🔒 FIXED CANVAS (ye kabhi resize nahi hoga)
    const [canvasSize] = useState({ width: 900, height: 500 });

    // 🖼 Image position & size
    const [pos, setPos] = useState({ x: 300, y: 100 });
    const [size, setSize] = useState({ width: 300, height: 300 });

    // Drag / Resize states
    const [dragging, setDragging] = useState(false);
    const [resizing, setResizing] = useState(false);
    const [currentHandle, setCurrentHandle] = useState(null);

    // Text edit
    const [editingTextId, setEditingTextId] = useState(null);
    const [editingValue, setEditingValue] = useState("");

    /* ===================== DRAG ===================== */
    const startDrag = () => setDragging(true);

    const onDrag = (e) => {
        if (!dragging) return;

        setPos({
            x: e.nativeEvent.offsetX - size.width / 2,
            y: e.nativeEvent.offsetY - size.height / 2,
        });
    };

    /* ===================== RESIZE ===================== */
    const startResize = (e, handle) => {
        e.stopPropagation();
        setResizing(true);
        setCurrentHandle(handle);
    };

    const onResize = (e) => {
        if (!resizing) return;

        const dx = e.movementX;
        const dy = e.movementY;

        setSize((prev) => ({
            width: Math.max(50, prev.width + dx),
            height: Math.max(50, prev.height + dy),
        }));
    };

    const stopActions = () => {
        setDragging(false);
        setResizing(false);
        setCurrentHandle(null);
    };

    /* ===================== TEXT ===================== */
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

    /* ===================== PRESET APPLY (MAIN LOGIC) ===================== */
    const applyPreset = (preset) => {
        const ratio = preset.width / preset.height;

        let newW = canvasSize.width;
        let newH = newW / ratio;

        if (newH > canvasSize.height) {
            newH = canvasSize.height;
            newW = newH * ratio;
        }

        setSize({ width: newW, height: newH });
        setPos({
            x: (canvasSize.width - newW) / 2,
            y: (canvasSize.height - newH) / 2,
        });
    };

    if (!selectedFiles?.length) return null;

    return (
        <Modal open={openModal} onClose={handleModelClose} title="Resize Image">
            <div className="resize-page">
                {/* LEFT */}
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
                        canvasSize={canvasSize}
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

                {/* RIGHT PANEL */}
                <div className="resize-right-panel">
                    <h4>Resize Presets</h4>

                    <div className="resize-item" onClick={() => applyPreset({ width: 1080, height: 1920 })}>
                        📸 Instagram Story
                        <p>1080 × 1920</p>
                    </div>

                    <div className="resize-item" onClick={() => applyPreset({ width: 2016, height: 1512 })}>
                        🖼 Landscape
                        <p>2016 × 1512</p>
                    </div>

                    <div className="resize-item" onClick={() => applyPreset({ width: 1512, height: 2016 })}>
                        📏 Portrait
                        <p>1512 × 2016</p>
                    </div>

                    <div className="resize-item" onClick={() => applyPreset({ width: 1512, height: 1512 })}>
                        ⬜ Square
                        <p>1512 × 1512</p>
                    </div>

                    <button className="cancel-btn" onClick={handleModelClose}>
                        Cancel
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default Resize;
