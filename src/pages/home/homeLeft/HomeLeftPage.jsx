import Button from '../../../components/Button';
import { useAppEvent } from '../../../contextApi/AppEventContext';
import './HomeLeftPage.css';

const HomeLeftPage = () => {
    const { handleTryItFree } = useAppEvent();

    return (
        <section className="hero">
            <div className="hero-content">
                <h1>
                    Edit Smarter, Not Harder – With <span>AI</span> Simplicity.
                </h1>

                <div className="watch">
                    <div className="play-icon">▶</div>
                    <p>Watch Videos</p>
                </div>

                <p className="sub-text">
                    From automatic enhancements and background to creative filters and
                    retouching, we help you achieve stunning results in seconds.
                </p>

                <Button className="try-btn" onClick={handleTryItFree}>Try it Free</Button>

                <div className="creator-section">
                    <p className="creator-title">OUR CREATOR</p>
                    <div className="creator-images">
                        <img src="https://cdn.pixabay.com/photo/2024/07/09/13/48/beautiful-girl-8883604_1280.jpg" alt="creator1" />
                        <img src="https://cdn.pixabay.com/photo/2024/06/25/13/12/woman-8852664_1280.jpg" alt="creator2" />
                        <img src="https://cdn.pixabay.com/photo/2024/06/25/13/12/beautiful-girl-8852671_640.jpg" alt="creator3" />
                        <img src="https://cdn.pixabay.com/photo/2024/06/25/13/12/woman-8852672_640.jpg" alt="creator4" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeLeftPage;

