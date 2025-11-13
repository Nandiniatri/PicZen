import { useAppEvent } from "../../../contextApi/AppEventContext";
import { Home, Cpu, Layers, BookText, AlignEndHorizontal, GalleryVerticalEnd } from "lucide-react";
import './PiczenSidebar.css';

const iconMap = {
    home: <Home size={18} />,
    cpu: <Cpu size={18} />,
    layers: <Layers size={18} />,
    design: <GalleryVerticalEnd size={18} />,
    brandKit: <AlignEndHorizontal size={18} />,
    template: <BookText size={18} />
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


            <nav className="content-section">
                <span className="content-span">Your Content</span>
                <ul>
                    {contents.map((item) => (
                        <li key={item.id} className="menu-item">
                            <span className="menu-icon">{iconMap[item.icon]}</span>
                            <span className="menu-text">{item.title}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default PiczenSidebar;
