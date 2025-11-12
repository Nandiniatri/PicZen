import { useContext } from "react";
import { useAppEvent } from "../../../contextApi/AppEventContext";

const PiczenSidebar = () => {
    const { menus } = useAppEvent();
    console.log(menus);
    

    return (
        <>
            <h2>Menus</h2>
            <ul>
                {menus.map(item => (
                    <li key={item.id}>{item.name} ({item.icon})</li>
                ))}
            </ul>
        </>
    )
}

export default PiczenSidebar;