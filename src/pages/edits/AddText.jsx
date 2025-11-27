import { useAppEvent } from "../../contextApi/AppEventContext";
import "./AddText.css";
import Button from "../../components/Button";


const AddText = () => {
    const { textStyle } = useAppEvent();

    return (
        <div className="addText-container"> 
            <Button className="addText-btn">+ Add text</Button>
            <input
                type="text"
                className="addText-search"
                placeholder="Search text styles"
            />

            <div className="addText-categories">
                <Button className="active">All</Button>
                <Button>Celebration</Button>
                <Button>Labels</Button>
                <Button>Sale</Button>
            </div>

            <div className="textStyle-grid">
                {textStyle.map((item, index) => (
                    <div key={index} className={item.class}>
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddText;
