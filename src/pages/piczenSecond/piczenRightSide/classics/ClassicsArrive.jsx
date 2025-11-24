import { useAppEvent } from '../../../../contextApi/AppEventContext';
import './ClassicsArrive.css';

const ClassicsArrive = () => {
    const { classicArrive } = useAppEvent();

    return (
        <div className="classics-container">
            <h2 className="classics-title">Classics</h2>

            <div className="classics-grid">
                {classicArrive.map((item, index) => (
                    <div key={index} className="classics-card">

                        <div
                            className={`classic-bg ${item.pattern ? "checker" : ""}`}
                            style={{
                                backgroundColor: item.bg,
                                backgroundImage: item.bgImage ? `url(${item.bgImage})` : undefined,
                            }}
                        >
                            <img src={item.image} alt={item.title} className="classic-img" />
                        </div>

                        <p className="classic-label">{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ClassicsArrive;

