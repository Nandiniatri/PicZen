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















// import React from "react";

// const EditorCanvas = ({
//     canvasRef,
//     selectedFile,
//     canvasTexts = [],
//     editingTextId,
//     editingValue,
//     pos = { x: 0, y: 0 },
//     size = { width: 200, height: 200 },
//     dragging,
//     canvasBgColor = "#fff",
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
//                 onDrag && onDrag(e);
//                 onResize && onResize(e);
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
//             {selectedFile && (
//                 <img
//                     src={URL.createObjectURL(selectedFile)}
//                     alt="preview"
//                     width={size.width}
//                     height={size.height}
//                     onMouseDown={startDrag}
//                     style={{
//                         position: "absolute",
//                         top: pos.y,
//                         left: pos.x,
//                         cursor: dragging ? "grabbing" : "grab",
//                         userSelect: "none",
//                         zIndex: 10
//                     }}
//                 />
//             )}

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
//             {["tl", "tr", "bl", "br"].map((handle) => {
//                 let top = pos.y - 10;
//                 let left = pos.x - 10;
//                 let cursor = "nwse-resize";

//                 if (handle === "tr") {
//                     left = pos.x + size.width - 10;
//                     cursor = "nesw-resize";
//                 } else if (handle === "bl") {
//                     top = pos.y + size.height - 10;
//                     cursor = "nesw-resize";
//                 } else if (handle === "br") {
//                     top = pos.y + size.height - 10;
//                     left = pos.x + size.width - 10;
//                 }

//                 return (
//                     <div
//                         key={handle}
//                         onMouseDown={(e) => startResize(e, handle)}
//                         className="resize-handle"
//                         style={{ top, left, cursor }}
//                     />
//                 );
//             })}
//         </div>
//     );
// };

// export default EditorCanvas;



















//ye sahi hai jo mai niche kar rahi hu wo practics kare rahi hu......................

// import React, { useState } from "react";
// import { removeBackground } from "@imgly/background-removal";

// const EditorCanvas = ({
//     canvasRef,
//     selectedFile,
//     canvasTexts = [],
//     editingTextId,
//     editingValue,
//     pos,
//     size,
//     dragging,
//     canvasSize = { width: 600, height: 500 },
//     canvasBgColor = "#fff",
//     canvasImageBackground,

//     startDrag,
//     onDrag,
//     onResize,
//     stopActions,
//     startResize,
//     handleTextClick,
//     handleTextSave,
//     setEditingValue
// }) => {

//     const [processedImg, setProcessedImg] = useState(null);
//     const [loading, setLoading] = useState(false);

//     React.useEffect(() => {
//         if (!selectedFile) return;

//         const processBgRemove = async () => {
//             setLoading(true);
//             try {
//                 const blob = await removeBackground(selectedFile);
//                 const url = URL.createObjectURL(blob);
//                 setProcessedImg(url);
//             } catch (error) {
//                 console.error("BG remove failed:", error);
//             }
//             setLoading(false);
//         };

//         processBgRemove();
//     }, [selectedFile]);

//     // 🔥 Canvas Size
//     // const CANVAS_W = 600;
//     // const CANVAS_H = 500;

//     return (
//         <div
//             className="file-preview"
//             ref={canvasRef}
//             // onMouseMove={(e) => {
//             //     onDrag && onDrag(e);
//             //     onResize && onResize(e);
//             // }}
//             onMouseMove={onDrag}
//             onMouseLeave={stopActions}
//             onMouseUp={stopActions}
//             style={{
//                 position: "relative",
//                 width: canvasSize.width,
//                 height: canvasSize.height,
//                 border: "1px solid #ccc",
//                 overflow: "hidden",
//                 position: "relative",
//                 backgroundColor: canvasBgColor,
//                 backgroundImage: canvasImageBackground
//                     ? `url(${canvasImageBackground})`
//                     : "none",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//             }}
//         >

//             {/* 🔥 SHOW LOADING */}
//             {loading && (
//                 <div
//                     style={{
//                         position: "absolute",
//                         top: "50%",
//                         left: "50%",
//                         transform: "translate(-50%, -50%)",
//                         padding: "10px 20px",
//                         color: "black",
//                         borderRadius: "6px",
//                         zIndex: 200
//                     }}
//                 >
//                     Processing… Please wait.
//                 </div>
//             )}

//             {/* 🔥 PROCESSED IMAGE (Background Removed) */}
//             {processedImg && (
//                 <img
//                     src={processedImg}
//                     alt="processed"
//                     onMouseDown={startDrag}
//                     // onLoad={(e) => {
//                     //     const w = e.target.naturalWidth;
//                     //     const h = e.target.naturalHeight;

//                     //     // 🔥 scale width = 300
//                     //     const maxWidth = 300;
//                     //     const ratio = maxWidth / w;

//                     //     const newW = w * ratio;
//                     //     const newH = h * ratio;

//                     //     size.width = newW;
//                     //     size.height = newH;

//                     //     // 🔥 CENTER IMAGE INSIDE CANVAS
//                     //     pos.x = (CANVAS_W - newW) / 2;
//                     //     pos.y = (CANVAS_H - newH) / 2;
//                     // }}
//                     style={{
//                         position: "absolute",
//                         top: pos.y,
//                         left: pos.x,
//                         width: size.width,
//                         height: size.height,
//                         cursor: dragging ? "grabbing" : "grab",
//                         userSelect: "none",
//                         zIndex: 10
//                     }}
//                 />
//             )}

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
//             {processedImg &&
//                 ["tl", "tr", "bl", "br"].map((handle) => {
//                     const HANDLE_SIZE = 12;

//                     let top = pos.y - HANDLE_SIZE / 2;
//                     let left = pos.x - HANDLE_SIZE / 2;

//                     if (handle === "tr") left = pos.x + size.width - HANDLE_SIZE / 2;
//                     if (handle === "bl") top = pos.y + size.height - HANDLE_SIZE / 2;
//                     if (handle === "br") {
//                         top = pos.y + size.height - HANDLE_SIZE / 2;
//                         left = pos.x + size.width - HANDLE_SIZE / 2;
//                     }

//                     return (
//                         <div
//                             key={handle}
//                             onMouseDown={(e) => startResize(e, handle)}
//                             className="resize-handle"
//                             style={{
//                                 position: "absolute",
//                                 width: HANDLE_SIZE,
//                                 height: HANDLE_SIZE,
//                                 background: "white",
//                                 border: "2px solid #222",
//                                 borderRadius: "50%",
//                                 cursor: "nwse-resize",
//                                 top,
//                                 left,
//                                 zIndex: 200,
//                             }}
//                         />
//                     );
//                 })}
//         </div>
//     );
// };

// export default EditorCanvas;

//End of code..........................................................................






























// import { useState, useEffect } from "react";
// import { removeBackground } from "@imgly/background-removal";

// const EditorCanvas = ({
//     canvasRef,
//     selectedFile,
//     canvasTexts = [],
//     editingTextId,
//     editingValue,

//     // ✅ defaults to avoid crash
//     pos = { x: 0, y: 0 },
//     size = { width: 400, height: 400 },

//     dragging,
//     canvasSize = { width: 900, height: 700 },
//     canvasBgColor = "#fff",
//     canvasImageBackground,

//     startDrag,
//     onDrag,
//     onResize,
//     stopActions,
//     startResize,
//     handleTextClick,
//     handleTextSave,
//     setEditingValue,
//     hideSubject,

//     lightOn,
//     shadowOn , 
//     outlineOn
// }) => {
//     const [processedImg, setProcessedImg] = useState(null);
//     const [loading, setLoading] = useState(false);

//     /*BACKGROUND REMOVE */
//     useEffect(() => {
//         if (!selectedFile || processedImg) return; // ⭐ IMPORTANT

//         let isMounted = true;
//         setLoading(true);

//         const processBgRemove = async () => {
//             try {
//                 const blob = await removeBackground(selectedFile);
//                 if (!isMounted) return;

//                 const url = URL.createObjectURL(blob);
//                 setProcessedImg(url);
//             } catch (err) {
//                 console.error("BG remove failed:", err);
//             } finally {
//                 if (isMounted) setLoading(false);
//             }
//         };

//         processBgRemove();

//         return () => {
//             isMounted = false;
//         };
//     }, [selectedFile]); // ✅ ONLY selectedFile


//     return (
//         <div
//             ref={canvasRef}
//             className="file-preview"
//             onMouseMove={(e) => {
//                 // ✅ drag & resize conflict FIX
//                 if (dragging) onDrag(e);
//                 else onResize(e);
//             }}
//             onMouseUp={stopActions}
//             onMouseLeave={stopActions}
//             style={{
//                 width: canvasSize.width,
//                 height: canvasSize.height,
//                 border: "1px solid black",
//                 position: "relative",
//                 overflow: "hidden",
//                 backgroundColor: canvasBgColor,
//                 backgroundImage: canvasImageBackground
//                     ? `url(${canvasImageBackground})`
//                     : "none",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//             }}
//         >
//             {/* 🔄 LOADING */}
//             {loading && (
//                 <div
//                     style={{
//                         position: "absolute",
//                         top: "50%",
//                         left: "50%",
//                         transform: "translate(-50%, -50%)",
//                         zIndex: 300,
//                         background: "#fff",
//                         padding: "8px 14px",
//                         borderRadius: 6,
//                     }}
//                 >
//                     Processing… Please wait
//                 </div>
//             )}

//             {/* 🖼 IMAGE */}
//             {processedImg && (
//                 <img
//                     src={processedImg}
//                     alt="processed"
//                     draggable={false}
//                     onMouseDown={startDrag}
//                     style={{
//                         position: "absolute",
//                         top: pos.y,
//                         left: pos.x,
//                         width: size.width,
//                         height: size.height,
//                         cursor: dragging ? "grabbing" : "grab",
//                         objectFit: "contain",
//                         userSelect: "none",
//                         border: "2px solid #e5e7eb",
//                         filter: `
//                             ${lightOn ? "brightness(1.15) contrast(1.1) saturate(1.1)" : ""}
//                             ${shadowOn ? " drop-shadow(0 18px 35px rgba(4, 2, 2, 0.74))" : ""}
//                             ${outlineOn &&
//                                 `drop-shadow(2px 0 0 red)
//                                  drop-shadow(-2px 0 0 red)
//                                  drop-shadow(0 2px 0 red)
//                                  drop-shadow(0 -2px 0 red)`
//                             }
//                             `,
//                         transition: "filter 0.25s ease"
//                     }}
//                 />
//             )}

//             {/* ✏ TEXTS */}
//             {canvasTexts.map((txt) => (
//                 <div
//                     key={txt.id}
//                     onClick={() => handleTextClick(txt)}
//                     style={{
//                         position: "absolute",
//                         top: txt.y,
//                         left: txt.x,
//                         zIndex: 50,
//                         userSelect: "none",
//                     }}
//                 >
//                     {editingTextId === txt.id ? (
//                         <input
//                             autoFocus
//                             value={editingValue}
//                             onChange={(e) => setEditingValue(e.target.value)}
//                             onBlur={handleTextSave}
//                             onKeyDown={(e) => e.key === "Enter" && handleTextSave()}
//                             style={{
//                                 padding: "2px 4px",
//                                 fontSize: 18,
//                                 border: "1px solid #ccc",
//                                 outline: "none",
//                             }}
//                         />
//                     ) : (
//                         <div className={txt.class}>{txt.label}</div>
//                     )}
//                 </div>
//             ))}

//             {/* 🔲 RESIZE HANDLES */}
//             {processedImg &&
//                 ["tl", "tr", "bl", "br"].map((handle) => {
//                     const HANDLE_SIZE = 12;

//                     let top = pos.y - HANDLE_SIZE / 2;
//                     let left = pos.x - HANDLE_SIZE / 2;

//                     if (handle === "tr")
//                         left = pos.x + size.width - HANDLE_SIZE / 2;
//                     if (handle === "bl")
//                         top = pos.y + size.height - HANDLE_SIZE / 2;
//                     if (handle === "br") {
//                         top = pos.y + size.height - HANDLE_SIZE / 2;
//                         left = pos.x + size.width - HANDLE_SIZE / 2;
//                     }

//                     return (
//                         <div
//                             key={handle}
//                             onMouseDown={(e) => startResize(e, handle)}
//                             style={{
//                                 position: "absolute",
//                                 width: HANDLE_SIZE,
//                                 height: HANDLE_SIZE,
//                                 background: "#fff",
//                                 border: "2px solid #222",
//                                 borderRadius: "50%",
//                                 cursor: "nwse-resize",
//                                 top,
//                                 left,
//                                 zIndex: 200,
//                             }}
//                         />
//                     );
//                 })}
//         </div>
//     );
// };

// export default EditorCanvas;








import { useState, useEffect, useRef } from "react";
import { removeBackground } from "@imgly/background-removal";

const EditorCanvas = ({
    canvasRef,
    selectedFile,
    canvasTexts = [],
    editingTextId,
    editingValue,

    pos = { x: 0, y: 0 },
    size = { width: 400, height: 400 },

    dragging,
    canvasSize = { width: 900, height: 700 },
    canvasBgColor = "#fff",
    canvasImageBackground,

    startDrag,
    onDrag,
    onResize,
    stopActions,
    startResize,
    handleTextClick,
    handleTextSave,
    setEditingValue,

    lightOn,
    shadowOn,
    outlineOn
}) => {
    const [processedImg, setProcessedImg] = useState(null);
    const [loading, setLoading] = useState(false);

    // 🔒 prevents infinite loop
    const processedRef = useRef(false);

    /* 🔥 BACKGROUND REMOVE (SAFE) */
    useEffect(() => {
        if (!selectedFile || processedRef.current) return;

        processedRef.current = true;
        let isMounted = true;
        setLoading(true);

        const processBgRemove = async () => {
            try {
                const blob = await removeBackground(selectedFile);
                if (!isMounted) return;

                const url = URL.createObjectURL(blob);
                setProcessedImg(url);
            } catch (err) {
                console.error("BG remove failed:", err);
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        processBgRemove();

        return () => {
            isMounted = false;
        };
    }, [selectedFile]);

    /* 🔁 RESET when new image selected */
    useEffect(() => {
        processedRef.current = false;
        setProcessedImg(null);
    }, [selectedFile]);

    /* 🎨 IMAGE FILTERS */
    const imageFilter = [
        lightOn && "brightness(1.15) contrast(1.1) saturate(1.1)",
        shadowOn && "drop-shadow(0 18px 35px rgba(0,0,0,0.35))",
        outlineOn &&
        `drop-shadow(2px 0 0 red)
       drop-shadow(-2px 0 0 red)
       drop-shadow(0 2px 0 red)
       drop-shadow(0 -2px 0 red)`
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div
            ref={canvasRef}
            className="file-preview"
            onMouseMove={(e) => (dragging ? onDrag(e) : onResize(e))}
            onMouseUp={stopActions}
            onMouseLeave={stopActions}
            style={{
                width: canvasSize.width,
                height: canvasSize.height,
                position: "relative",
                overflow: "hidden",
                border: "1px solid #000",
                backgroundColor: canvasBgColor,
                backgroundImage: canvasImageBackground
                    ? `url(${canvasImageBackground})`
                    : "none",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            {/* ⏳ LOADING */}
            {loading && (
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        zIndex: 300,
                        background: "#fff",
                        padding: "8px 14px",
                        borderRadius: 6
                    }}
                >
                    Processing… Please wait
                </div>
            )}

            {/* 🖼 SUBJECT IMAGE */}
            {processedImg && (
                <img
                    src={processedImg}
                    alt="subject"
                    draggable={false}
                    onMouseDown={startDrag}
                    style={{
                        position: "absolute",
                        top: pos.y,
                        left: pos.x,
                        width: size.width,
                        height: size.height,
                        objectFit: "contain",
                        cursor: dragging ? "grabbing" : "grab",
                        userSelect: "none",
                        filter: imageFilter,
                        transition: "filter 0.25s ease"
                    }}
                />
            )}

            {/* ✏ TEXTS */}
            {canvasTexts.map((txt) => (
                <div
                    key={txt.id}
                    onClick={() => handleTextClick(txt)}
                    style={{
                        position: "absolute",
                        top: txt.y,
                        left: txt.x,
                        zIndex: 50
                    }}
                >
                    {editingTextId === txt.id ? (
                        <input
                            autoFocus
                            value={editingValue}
                            onChange={(e) => setEditingValue(e.target.value)}
                            onBlur={handleTextSave}
                            onKeyDown={(e) => e.key === "Enter" && handleTextSave()}
                        />
                    ) : (
                        <div className={txt.class}>{txt.label}</div>
                    )}
                </div>
            ))}

            {/* 🔲 RESIZE HANDLES */}
            {processedImg &&
                ["tl", "tr", "bl", "br"].map((handle) => {
                    const HANDLE_SIZE = 12;

                    let top = pos.y - HANDLE_SIZE / 2;
                    let left = pos.x - HANDLE_SIZE / 2;

                    if (handle === "tr") left = pos.x + size.width - HANDLE_SIZE / 2;
                    if (handle === "bl") top = pos.y + size.height - HANDLE_SIZE / 2;
                    if (handle === "br") {
                        top = pos.y + size.height - HANDLE_SIZE / 2;
                        left = pos.x + size.width - HANDLE_SIZE / 2;
                    }

                    return (
                        <div
                            key={handle}
                            onMouseDown={(e) => startResize(e, handle)}
                            style={{
                                position: "absolute",
                                width: HANDLE_SIZE,
                                height: HANDLE_SIZE,
                                background: "#fff",
                                border: "2px solid #222",
                                borderRadius: "50%",
                                cursor: "nwse-resize",
                                top,
                                left,
                                zIndex: 200
                            }}
                        />
                    );
                })}
        </div>
    );
};

export default EditorCanvas;































// import React, { useState, useEffect, useRef } from "react";
// import { removeBackground } from "@imgly/background-removal";

// const EditorCanvas = ({
//     canvasRef,
//     selectedFile,

//     imageFilter = "none",
//     backgroundFilter = "none",

//     canvasTexts = [],
//     editingTextId,
//     editingValue,

//     pos,
//     setPos,
//     size,
//     setSize,

//     dragging,
//     canvasBgColor = "#fff",
//     canvasImageBackground,

//     startDrag,
//     onDrag,
//     onResize,
//     stopActions,
//     startResize,
//     handleTextClick,
//     handleTextSave,
//     setEditingValue
// }) => {

//     const [processedImg, setProcessedImg] = useState(null);
//     const [loading, setLoading] = useState(false);

//     const initializedRef = useRef(false); // 🔥 IMPORTANT

//     /* ===============================
//        BACKGROUND REMOVAL
//     ================================ */
//     useEffect(() => {
//         if (!selectedFile) return;

//         let isMounted = true;

//         const processBgRemove = async () => {
//             setLoading(true);
//             try {
//                 const blob = await removeBackground(selectedFile);
//                 if (!isMounted) return;
//                 const url = URL.createObjectURL(blob);
//                 setProcessedImg(url);
//                 initializedRef.current = false; // reset on new image
//             } catch (err) {
//                 console.error(err);
//             }
//             setLoading(false);
//         };

//         processBgRemove();

//         return () => {
//             isMounted = false;
//         };
//     }, [selectedFile]);

//     const CANVAS_W = 600;
//     const CANVAS_H = 500;

//     return (
//         <div
//             ref={canvasRef}
//             className="file-preview"
//             onMouseMove={(e) => {
//                 onDrag?.(e);
//                 onResize?.(e);
//             }}
//             onMouseUp={stopActions}
//             onMouseLeave={stopActions}
//             style={{
//                 position: "relative",
//                 width: CANVAS_W,
//                 height: CANVAS_H,
//                 border: "1px solid #ccc",
//                 overflow: "hidden",
//                 backgroundColor: canvasBgColor,
//                 backgroundImage: canvasImageBackground
//                     ? `url(${canvasImageBackground})`
//                     : "none",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 filter: backgroundFilter
//             }}
//         >
//             {/* LOADING */}
//             {loading && (
//                 <div style={{
//                     position: "absolute",
//                     inset: 0,
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     zIndex: 100
//                 }}>
//                     Processing…
//                 </div>
//             )}

//             {/* IMAGE */}
//             {processedImg && (
//                 <img
//                     src={processedImg}
//                     alt=""
//                     draggable={false}
//                     onMouseDown={startDrag}
//                     onLoad={(e) => {
//                         if (initializedRef.current) return;
//                         initializedRef.current = true;

//                         const w = e.target.naturalWidth;
//                         const h = e.target.naturalHeight;

//                         const scale = Math.min(
//                             350 / w,
//                             350 / h,
//                             1
//                         );

//                         const newW = w * scale;
//                         const newH = h * scale;

//                         setSize({ width: newW, height: newH });
//                         setPos({
//                             x: (CANVAS_W - newW) / 2,
//                             y: (CANVAS_H - newH) / 2
//                         });
//                     }}
//                     style={{
//                         position: "absolute",
//                         top: pos.y,
//                         left: pos.x,
//                         width: size.width,
//                         height: size.height,
//                         cursor: dragging ? "grabbing" : "grab",
//                         userSelect: "none",
//                         zIndex: 10,
//                         filter: imageFilter
//                     }}
//                 />
//             )}

//             {/* TEXTS */}
//             {canvasTexts.map((txt) => (
//                 <div
//                     key={txt.id}
//                     style={{
//                         position: "absolute",
//                         top: txt.y,
//                         left: txt.x,
//                         zIndex: 50
//                     }}
//                     onClick={() => handleTextClick(txt)}
//                 >
//                     {editingTextId === txt.id ? (
//                         <input
//                             autoFocus
//                             value={editingValue}
//                             onChange={(e) => setEditingValue(e.target.value)}
//                             onBlur={handleTextSave}
//                         />
//                     ) : (
//                         <div className={txt.class}>{txt.label}</div>
//                     )}
//                 </div>
//             ))}

//             {/* RESIZE HANDLES */}
//             {processedImg &&
//                 ["tl", "tr", "bl", "br"].map((handle) => {
//                     const s = 12;
//                     const x = handle.includes("r")
//                         ? pos.x + size.width
//                         : pos.x;
//                     const y = handle.includes("b")
//                         ? pos.y + size.height
//                         : pos.y;

//                     return (
//                         <div
//                             key={handle}
//                             onMouseDown={(e) => startResize(e, handle)}
//                             className="resize-handle"
//                             style={{
//                                 position: "absolute",
//                                 width: s,
//                                 height: s,
//                                 borderRadius: "50%",
//                                 background: "#fff",
//                                 border: "2px solid #222",
//                                 left: x - s / 2,
//                                 top: y - s / 2,
//                                 cursor: "nwse-resize",
//                                 zIndex: 200
//                             }}
//                         />
//                     );
//                 })}
//         </div>
//     );
// };

// export default EditorCanvas;
