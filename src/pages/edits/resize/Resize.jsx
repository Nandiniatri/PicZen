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
