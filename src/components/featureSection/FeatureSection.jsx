import Button from '../Button';
import './FeatureSection.css';

const FeatureSection = ({
    hpTitle,
    hpYou,
    hpText3,
    hpImage1,
    hpImage2,
    hpHeading,
    hpDesc,
    hpButtonText,
    reverse   
}) => {
    return (
        <div className="hp2-wrapper">

            <div className={`hp2-content ${reverse ? 'reverse' : ''}`}>
                <div className="hp2-image-block">
                    <img
                        src={hpImage2}
                        className="hp2-main-img"
                    />
                </div>

                <div className="hp2-text-block">
                    <h2 className="hp2-heading">{hpHeading}</h2>

                    <p className="hp2-desc">{hpDesc}</p>

                    <Button className="hp2-btn">{hpButtonText}</Button>
                </div>
            </div>

        </div>
    );
}

export default FeatureSection;
