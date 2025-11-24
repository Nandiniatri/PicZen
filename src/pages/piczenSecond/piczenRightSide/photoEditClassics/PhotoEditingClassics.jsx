import { useAppEvent } from "../../../../contextApi/AppEventContext";
import "./photoEditingClassics.css";

const PhotoEditingClassics = () => {
    const { photoEditingClassics } = useAppEvent();

    return (
        <div className="photoEditing-main">
            <h2 className="classics-title">Photo Editing Classics</h2>

            <div className="photoEditing-scroll">
                {photoEditingClassics?.map((item, index) => {
                    return (
                        <div className="photoEditing-card" key={index}>
                            <div className="photoEditing-imgDiv">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="photoEditing-titleDiv">
                                {item.title}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PhotoEditingClassics;
