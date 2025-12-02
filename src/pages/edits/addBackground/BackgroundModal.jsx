import React from "react";
import "./AddBackground.css";
import { Wand2, Square, Image, Trash2 } from "lucide-react";
import { useAppEvent } from "../../../contextApi/AppEventContext";

const BackgroundMenu = () => {
    const { handleSolidColor } = useAppEvent();

    return (
        <div className="bg-menu-container">
            <ul className="bg-menu-list">

                <li className="bg-menu-item">
                    <Wand2 size={18} />
                    <span>AI Backgrounds</span>
                </li>

                <li className="bg-menu-item" onClick={handleSolidColor}>
                    <Square size={18} />
                    <span>Solid color</span>
                </li>

                <li className="bg-menu-item">
                    <Image size={18} />
                    <span>Image</span>
                </li>

                <li className="bg-menu-item remove">
                    <Trash2 size={18} />
                    <span>Remove background</span>
                </li>

            </ul>
        </div>
    );
};

export default BackgroundMenu;
