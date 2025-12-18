import { useState, useEffect, useRef } from "react";
import { removeBackground } from "@imgly/background-removal";
import { useAppEvent } from "../../contextApi/AppEventContext";

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
    imageFilter,

    lightOn,
    shadowOn,
    outlineOn,
    blurOn,
    textureOn,
    filterOn
}) => {
    // const [processedImg, setProcessedImg] = useState(null);
    const [loading, setLoading] = useState(false);

    // 🔒 prevents infinite loop
    const processedRef = useRef(false);
    
    const { processedImg, setProcessedImg } = useAppEvent();
    console.log("processedImg", processedImg);


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
    // const imageFilter = [
    //     lightOn && "brightness(1.15) contrast(1.1) saturate(1.1)",
    //     shadowOn && "drop-shadow(0 18px 35px rgba(0,0,0,0.35))",
    //     outlineOn &&
    //     `drop-shadow(2px 0 0 red)
    //      drop-shadow(-2px 0 0 red)
    //      drop-shadow(0 2px 0 red)
    //      drop-shadow(0 -2px 0 red)`,
    //     blurOn && "blur(2px)",
    //     filterOn && "grayscale(1) contrast(1.25) brightness(0.98)",
    //     textureOn && "brightness(0.80) contrast(0.90) saturate(0.86)"
    // ]
    //     .filter(Boolean)
    //     .join(" ");


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
