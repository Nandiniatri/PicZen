import { useEffect, useState } from "react";
import "./SolidColor.css";
import { useAppEvent } from "../../../../contextApi/AppEventContext";

const SolidColor = () => {
    const { solidColor, setCanvasBgColor, handlePalette } = useAppEvent();


    if (!solidColor) return <p>Loading...</p>;

    return (
        <div className="solidColor-container">

            <h2 className="solidColor-title">{solidColor.title}</h2>

            <div className="solidColor-actions">
                {solidColor.actions.map((btn) => (
                    <button key={btn.id} className="solidColor-btn">
                        {btn.label}
                    </button>
                ))}
            </div>

            <h4 className="solidColor-subtitle">Custom color</h4>

            <input
                type="color"
                defaultValue={solidColor.customColor.default}
                className="colorPicker"
                onChange={(e) => setCanvasBgColor(e.target.value)}
            />

            <h4 className="solidColor-subtitle">Palette</h4>

            <div className="palette-wrapper">
                {solidColor.palette.map((color, index) => (
                    <div
                        key={index}
                        className="palette-color"
                        style={{ backgroundColor: color }}
                        onClick={() => handlePalette(color)}
                    ></div>
                ))}
            </div>

        </div>
    );
};

export default SolidColor;
