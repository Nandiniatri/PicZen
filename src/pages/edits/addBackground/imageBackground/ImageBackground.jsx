import { useAppEvent } from "../../../../contextApi/AppEventContext";
import './ImageBackground.css';

const ImageBackground = () => {
    const { imageBackground , handleImageBackground , canvasImageBackground} = useAppEvent();

    if (!imageBackground) return <p>Loading...</p>;

    return (
        <div className="texture-panel">
            <h2 className="texture-title">{imageBackground.title}</h2>

            {imageBackground.categories.map((cat) => (
                <div key={cat.id} className="texture-category">
                    <h3 className="category-title">{cat.label}</h3>

                    <div className="texture-grid">
                        {cat.items.map((item) => (
                            <div className="texture-box" key={item.id}>
                                <img
                                    src={item.thumb}
                                    alt={item.name}
                                    className="texture-thumb"
                                    onClick={() => handleImageBackground(item)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ImageBackground;
