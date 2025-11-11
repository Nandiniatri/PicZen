import "./BrandCard.css";

export default function BrandCard({
    tag,
    mainImage,
    avatar,
    text,
    authorName,
    authorRole,
    buttonText
}) {
    return (
        <div className="testimonial-container">
            <div className="tc-card">
               
                {tag && <div className="tc-tag">{tag}</div>}


                <div className="tc-img-wrapper">
                    <img src={mainImage} alt="main" className="tc-main-img" />
                </div>

                <div className="tc-content">
                    <div className="tc-avatar-row">
                        <img src={avatar} alt="avatar" className="tc-avatar" />
                    </div>

                    <p className="tc-text">“{text}”</p>

                    <div className="tc-author">
                        <h4>{authorName}</h4>
                        <p>{authorRole}</p>
                    </div>

                    <button className="tc-btn">{buttonText}</button>
                </div>
            </div>
        </div>
    );
}
