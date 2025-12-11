import { useRef } from "react";
import { useAppEvent } from "../../contextApi/AppEventContext";

const EditorCanvas = () => {
    const {
        selectedFiles,
        canvasTexts,
        setCanvasTexts,
        pos,
        setPos,
        size,
        setSize,
        canvasBgColor,
        canvasImageBackground
    } = useAppEvent();

    const canvasRef = useRef(null);

    // STATES
    let dragging = false;
    let resizing = false;
    let currentHandle = null;
    let offset = { x: 0, y: 0 };

    if (!selectedFiles || selectedFiles.length === 0) {
        return <p>No files selected.</p>;
    }

    const startDrag = (e) => {
        if (resizing) return;

        dragging = true;
        const rect = canvasRef.current.getBoundingClientRect();

        offset = {
            x: e.clientX - rect.left - pos.x,
            y: e.clientY - rect.top - pos.y,
        };
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

    const startResize = (e, handle) => {
        e.stopPropagation();
        resizing = true;
        currentHandle = handle;
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
        dragging = false;
        resizing = false;
        currentHandle = null;
    };

    return (
        <div
            ref={canvasRef}
            onMouseMove={(e) => {
                onDrag(e);
                onResize(e);
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
            {/* MAIN IMAGE */}
            <img
                src={URL.createObjectURL(selectedFiles[0])}
                alt="preview"
                width={size.width}
                height={size.height}
                onMouseDown={startDrag}
                style={{
                    position: "absolute",
                    top: pos.y,
                    left: pos.x,
                    cursor: "grab",
                    userSelect: "none",
                    zIndex: 10,
                }}
            />

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
                >
                    <div className={txt.class}>{txt.label}</div>
                </div>
            ))}

            {/* RESIZE HANDLES */}
            <div
                onMouseDown={(e) => startResize(e, "tl")}
                className="resize-handle"
                style={{
                    top: pos.y - 10,
                    left: pos.x - 10,
                    cursor: "nwse-resize",
                }}
            />

            <div
                onMouseDown={(e) => startResize(e, "tr")}
                className="resize-handle"
                style={{
                    top: pos.y - 10,
                    left: pos.x + size.width - 10,
                    cursor: "nesw-resize",
                }}
            />

            <div
                onMouseDown={(e) => startResize(e, "bl")}
                className="resize-handle"
                style={{
                    top: pos.y + size.height - 10,
                    left: pos.x - 10,
                    cursor: "nesw-resize",
                }}
            />

            <div
                onMouseDown={(e) => startResize(e, "br")}
                className="resize-handle"
                style={{
                    top: pos.y + size.height - 10,
                    left: pos.x + size.width - 10,
                    cursor: "nwse-resize",
                }}
            />
        </div>
    );
};

export default EditorCanvas;
