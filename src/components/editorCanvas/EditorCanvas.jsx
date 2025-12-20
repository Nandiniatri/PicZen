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
}) => {

    const [loading, setLoading] = useState(false);
    // console.log("processedImg", processedImg);
    const processedRef = useRef(false);

    const { processedImg, setProcessedImg, canvasShapes, setCanvasShapes } =
        useAppEvent();

    const [activeShapeId, setActiveShapeId] = useState(null);
    const [shapeOffset, setShapeOffset] = useState({ x: 0, y: 0 });

    const startShapeDrag = (e, shape) => {
        e.stopPropagation();
        setActiveShapeId(shape.id);

        const rect = canvasRef.current.getBoundingClientRect();
        setShapeOffset({
            x: e.clientX - rect.left - shape.x,
            y: e.clientY - rect.top - shape.y
        });
    };

    const onShapeDrag = (e) => {
        if (!activeShapeId) return;

        const rect = canvasRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - shapeOffset.x;
        const y = e.clientY - rect.top - shapeOffset.y;

        setCanvasShapes((prev) =>
            prev.map((s) =>
                s.id === activeShapeId ? { ...s, x, y } : s
            )
        );
    };

    const stopShapeDrag = () => {
        setActiveShapeId(null);
    };


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

    useEffect(() => {
        processedRef.current = false;
        setProcessedImg(null);
    }, [selectedFile]);


    return (
        <div
            ref={canvasRef}
            className="file-preview"
            // onMouseMove={(e) => (dragging ? onDrag(e) : onResize(e))}
            // onMouseUp={stopActions}
            // onMouseLeave={stopActions}
            onMouseMove={(e) => {
                if (activeShapeId) onShapeDrag(e);
                else if (dragging) onDrag(e);
                else onResize(e);
            }}
            onMouseUp={() => {
                stopActions();
                stopShapeDrag();
            }}
            onMouseLeave={() => {
                stopActions();
                stopShapeDrag();
            }}
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

            {canvasShapes.map((shape) => (
                <img
                    key={shape.id}
                    src={shape.src.img}
                    draggable={false}
                    onMouseDown={(e) => startShapeDrag(e, shape)}
                    style={{
                        position: "absolute",
                        top: shape.y,
                        left: shape.x,
                        width: shape.width,
                        height: shape.height,
                        objectFit: "contain",
                        // cursor: dragging ? "grabbing" : "grab",
                        userSelect: "none",
                        zIndex: 120,
                    }}
                />
            ))}

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





