import { useAppEvent } from "../../contextApi/AppEventContext";
import Button from "../Button";
import {
    House,
    CornerUpLeft,
    CornerUpRight,
    Plus,
    AlignEndHorizontal,
    CaseSensitive,
    BookText,
    Images,
    SquareDashedTopSolid,
    ImageUpscale,
    Share,
    Download
} from "lucide-react";
import './ImageDrop.css';

const iconMap = {
    plus: <Plus />,
    briefcase: <AlignEndHorizontal />,
    type: <CaseSensitive />,
    template: <BookText />,
    image: <Images />,
    wand: <SquareDashedTopSolid />,
    resize: <ImageUpscale />,
};

const ImageDropFile = () => {
    const { selectedFiles, editHeaderData, handleEditPageHome } = useAppEvent();

    if (!selectedFiles) {
        return <p>No files selected.</p>;
    }

    return (
        <div className="image-drop-container">
            <header className="header-container">
                <div className="header-left">
                    <House size={22} color="#9b4bff" onClick={handleEditPageHome} />
                </div>

                <div className="header-undo-redo">
                    <CornerUpLeft className="header-icon" />
                    <CornerUpRight className="header-icon" />
                </div>

                <div className="header-center">
                    {editHeaderData &&
                        editHeaderData.map((item) => (
                            <div className="header-item" key={item.id}>
                                <span className="header-item-icon">{iconMap[item.icon]}</span>
                                <p className="header-item-text">{item.name}</p>
                            </div>
                        ))}
                </div>

                <div className="header-right">
                    <Button className="header-btn">
                        <Download size={18} /> Download
                    </Button>
                    <Button className="header-btn share-btn">
                        <Share size={18} /> Share
                    </Button>
                </div>
            </header>


            <div className="ImageDrop-Selected-div">
                <div className="imageDrop-selected-files">
                    <div className="file-preview">
                        <canvas className="myCanvas" />

                        {[...selectedFiles].map((file, index) => (
                            <div key={index} className="preview-item">
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt={file.name}
                                    width="200"
                                    className="preview-image"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    Edit sideBar
                </div>
            </div>

        </div>
    );
};

export default ImageDropFile;

