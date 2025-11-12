// import { useAppEvent } from "../../../contextApi/AppEventContext";

// const PiczenSidebar = () => {
//     const { menus, contents } = useAppEvent();
//     console.log(menus);


//     return (
//         <div>
//             <div className="logo">
//                 <div className="logo-icon">◎</div>
//                 <h2>PICZEN</h2>
//             </div>

//             <ul>
//                 {menus.map(item => (
//                     <li key={item.id}>{item.name} ({item.icon})</li>
//                 ))}
//             </ul>

//             <ul>
//                 {contents.map(item => (
//                     <li key={item.id}>{item.title}</li>
//                 ))}
//             </ul>

//         </div>
//     )
// }

// export default PiczenSidebar;


import { useAppEvent } from "../../../contextApi/AppEventContext";
import { Home, Cpu, Layers, Clock } from "lucide-react"; // icons

const iconMap = {
    home: <Home size={18} />,
    cpu: <Cpu size={18} />,
    layers: <Layers size={18} />,
    clock: <Clock size={18} />,
};

const PiczenSidebar = () => {
    const { menus, contents } = useAppEvent();

    return (
        <aside className="sidebar">
            <div className="logo">
                <div className="logo-icon">◎</div>
                <h2>PICZEN</h2>
            </div>

            <nav className="menu-section">
                <ul>
                    {menus.map((item) => (
                        <li key={item.id} className="menu-item">
                            <span className="menu-icon">{iconMap[item.icon]}</span>
                            <span className="menu-text">{item.name}</span>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="divider"></div>

            <nav className="content-section">
                <ul>
                    {contents.map((item) => (
                        <li key={item.id} className="menu-item">
                            <span className="menu-text">{item.title}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default PiczenSidebar;
