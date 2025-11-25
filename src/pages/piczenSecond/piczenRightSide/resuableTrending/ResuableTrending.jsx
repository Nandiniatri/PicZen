import { useEffect, useState } from "react";
import "./ResuableTrending.css";

const ResuableTrending = ({ apiUrl, title }) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const res = await fetch(`http://localhost:4000/api/${apiUrl}`);
                const data = await res.json();
                setImages(data);
            } catch (err) {
                setError("Failed to load images");
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, [apiUrl]);

    return (
        <div className="trending-main-div">
            <h2 className="trending-h2">{title}</h2>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            <div className="scroll-container">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src.image}
                        className="scroll-image"
                    />
                ))}
            </div>
        </div>
    );
};

export default ResuableTrending;
