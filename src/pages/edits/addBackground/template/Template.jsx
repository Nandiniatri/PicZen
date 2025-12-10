import "./Template.css";

const Template = () => {
    const classics = [
        { title: "White", img: "/images/classic-white.png" },
        { title: "Black", img: "/images/classic-black.png" },
    ];

    const studio = [
        { title: "Studio 1", img: "/images/studio-1.png" },
        { title: "Studio 2", img: "/images/studio-2.png" },
        { title: "Studio 3", img: "/images/studio-3.png" },
    ];

    return (
        <>
            <h2>Template</h2>
            <div className="template-wrapper">
                {/* Search Bar */}
                <input
                    type="text"
                    placeholder="Search templates"
                    className="template-search"
                />

                {/* Classics Section */}
                <div className="template-section">
                    <h3>Classics</h3>
                    <div className="template-grid">
                        {classics.map((item, index) => (
                            <div className="template-card" key={index}>
                                <img src={item.img} alt="" />
                                <p>{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Studio Section */}
                <div className="template-section">
                    <h3>Studio</h3>
                    <div className="template-grid">
                        {studio.map((item, index) => (
                            <div className="template-card" key={index}>
                                <img src={item.img} alt="" />
                                <p>{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Template;
