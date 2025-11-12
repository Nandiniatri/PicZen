import { useContext } from "react";
import { useAppEvent } from "../../../contextApi/AppEventContext";

const PiczenSidebar = () => {
    const { menus } = useAppEvent();
    console.log(menus);


    return (
        <div>
            <ul>
                {menus.map(item => (
                    <li key={item.id}>{item.name} ({item.icon})</li>
                ))}
            </ul>

            <ul>
                {contents.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>

        </div>
    )
}

export default PiczenSidebar;