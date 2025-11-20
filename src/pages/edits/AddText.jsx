import "./AddText.css";

const textStyles = [
    { label: "NEW", class: "style-box bold" },
    { label: "Natural", class: "style-box cursive" },
    { label: "Like & Share", class: "style-box green" },
    { label: "Thank you", class: "style-box blue" },
    { label: "DM for Price", class: "style-box simple" },
    { label: "CONTACT US", class: "style-box bold-red" }
];

const AddText = () => {
    return (
        <div className="addText-container">
            
            {/* Top Add text button */}
            <button className="addText-btn">+ Add text</button>

            {/* Search bar */}
            <input
                type="text"
                className="addText-search"
                placeholder="Search text styles"
            />

            {/* Category Tabs */}
            <div className="addText-categories">
                <button className="active">All</button>
                <button>Celebration</button>
                <button>Labels</button>
                <button>Sale</button>
            </div>

            {/* Text styles grid */}
            <div className="textStyle-grid">
                {textStyles.map((item, index) => (
                    <div key={index} className={item.class}>
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddText;
