// import React from "react";

// const EditorCanvas = ({
//     canvasRef,
//     selectedFile,
//     canvasTexts,
//     editingTextId,
//     editingValue,
//     pos,
//     size,
//     dragging,
//     canvasBgColor,
//     canvasImageBackground,

//     // handlers
//     startDrag,
//     onDrag,
//     onResize,
//     stopActions,
//     startResize,
//     handleTextClick,
//     handleTextSave,
//     setEditingValue
// }) => {
//     return (
//         <div
//             className="file-preview"
//             ref={canvasRef}
//             onMouseMove={(e) => {
//                 onDrag(e);
//                 onResize(e);
//             }}
//             onMouseUp={stopActions}
//             onMouseLeave={stopActions}
//             style={{
//                 position: "relative",
//                 width: "400px",
//                 height: "500px",
//                 border: "1px solid #ccc",
//                 overflow: "hidden",

//                 backgroundColor: canvasBgColor,
//                 backgroundImage: canvasImageBackground
//                     ? `url(${canvasImageBackground})`
//                     : "none",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//             }}
//         >
//             {/* IMAGE */}
//             <img
//                 src={URL.createObjectURL(selectedFile)}
//                 alt="preview"
//                 width={size.width}
//                 height={size.height}
//                 onMouseDown={startDrag}
//                 style={{
//                     position: "absolute",
//                     top: pos.y,
//                     left: pos.x,
//                     cursor: dragging ? "grabbing" : "grab",
//                     userSelect: "none",
//                     zIndex: 10
//                 }}
//             />

//             {/* TEXTS */}
//             {canvasTexts.map((txt) => (
//                 <div
//                     key={txt.id}
//                     style={{
//                         position: "absolute",
//                         top: txt.y,
//                         left: txt.x,
//                         zIndex: 50,
//                         userSelect: "none",
//                     }}
//                     onClick={() => handleTextClick(txt)}
//                 >
//                     {editingTextId === txt.id ? (
//                         <input
//                             autoFocus
//                             value={editingValue}
//                             onChange={(e) => setEditingValue(e.target.value)}
//                             onBlur={handleTextSave}
//                             onKeyDown={(e) => {
//                                 if (e.key === "Enter") handleTextSave();
//                             }}
//                             style={{
//                                 padding: "2px 4px",
//                                 fontSize: "18px",
//                                 border: "1px solid #ccc",
//                                 outline: "none",
//                             }}
//                         />
//                     ) : (
//                         <div className={txt.class}>{txt.label}</div>
//                     )}
//                 </div>
//             ))}

//             {/* RESIZE HANDLES */}

//             {/* TL */}
//             <div
//                 onMouseDown={(e) => startResize(e, "tl")}
//                 className="resize-handle"
//                 style={{
//                     top: pos.y - 10,
//                     left: pos.x - 10,
//                     cursor: "nwse-resize"
//                 }}
//             />

//             {/* TR */}
//             <div
//                 onMouseDown={(e) => startResize(e, "tr")}
//                 className="resize-handle"
//                 style={{
//                     top: pos.y - 10,
//                     left: pos.x + size.width - 10,
//                     cursor: "nesw-resize"
//                 }}
//             />

//             {/* BL */}
//             <div
//                 onMouseDown={(e) => startResize(e, "bl")}
//                 className="resize-handle"
//                 style={{
//                     top: pos.y + size.height - 10,
//                     left: pos.x - 10,
//                     cursor: "nesw-resize"
//                 }}
//             />

//             {/* BR */}
//             <div
//                 onMouseDown={(e) => startResize(e, "br")}
//                 className="resize-handle"
//                 style={{
//                     top: pos.y + size.height - 10,
//                     left: pos.x + size.width - 10,
//                     cursor: "nwse-resize"
//                 }}
//             />
//         </div>
//     );
// };

// export default EditorCanvas;















import React from "react";

const EditorCanvas = ({
    canvasRef,
    selectedFile,
    canvasTexts = [],
    editingTextId,
    editingValue,
    pos = { x: 0, y: 0 },
    size = { width: 200, height: 200 },
    dragging,
    canvasBgColor = "#fff",
    canvasImageBackground,

    // handlers
    startDrag,
    onDrag,
    onResize,
    stopActions,
    startResize,
    handleTextClick,
    handleTextSave,
    setEditingValue
}) => {
    return (
        <div
            className="file-preview"
            ref={canvasRef}
            onMouseMove={(e) => {
                onDrag && onDrag(e);
                onResize && onResize(e);
            }}
            onMouseUp={stopActions}
            onMouseLeave={stopActions}
            style={{
                position: "relative",
                width: "400px",
                height: "500px",
                border: "1px solid #ccc",
                overflow: "hidden",
                backgroundColor: canvasBgColor,
                backgroundImage: canvasImageBackground
                    ? `url(${canvasImageBackground})`
                    : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* IMAGE */}
            {selectedFile && (
                <img
                    src={URL.createObjectURL(selectedFile)}
                    alt="preview"
                    width={size.width}
                    height={size.height}
                    onMouseDown={startDrag}
                    style={{
                        position: "absolute",
                        top: pos.y,
                        left: pos.x,
                        cursor: dragging ? "grabbing" : "grab",
                        userSelect: "none",
                        zIndex: 10
                    }}
                />
            )}

            {/* TEXTS */}
            {canvasTexts.map((txt) => (
                <div
                    key={txt.id}
                    style={{
                        position: "absolute",
                        top: txt.y,
                        left: txt.x,
                        zIndex: 50,
                        userSelect: "none",
                    }}
                    onClick={() => handleTextClick(txt)}
                >
                    {editingTextId === txt.id ? (
                        <input
                            autoFocus
                            value={editingValue}
                            onChange={(e) => setEditingValue(e.target.value)}
                            onBlur={handleTextSave}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") handleTextSave();
                            }}
                            style={{
                                padding: "2px 4px",
                                fontSize: "18px",
                                border: "1px solid #ccc",
                                outline: "none",
                            }}
                        />
                    ) : (
                        <div className={txt.class}>{txt.label}</div>
                    )}
                </div>
            ))}

            {/* RESIZE HANDLES */}
            {["tl", "tr", "bl", "br"].map((handle) => {
                let top = pos.y - 10;
                let left = pos.x - 10;
                let cursor = "nwse-resize";

                if (handle === "tr") {
                    left = pos.x + size.width - 10;
                    cursor = "nesw-resize";
                } else if (handle === "bl") {
                    top = pos.y + size.height - 10;
                    cursor = "nesw-resize";
                } else if (handle === "br") {
                    top = pos.y + size.height - 10;
                    left = pos.x + size.width - 10;
                }

                return (
                    <div
                        key={handle}
                        onMouseDown={(e) => startResize(e, handle)}
                        className="resize-handle"
                        style={{ top, left, cursor }}
                    />
                );
            })}
        </div>
    );
};

export default EditorCanvas;
