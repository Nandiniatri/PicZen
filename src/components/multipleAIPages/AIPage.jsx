import { useAppEvent } from "../../contextApi/AppEventContext";

const AIPage = () => {
    const { generateAIImageData } = useAppEvent();

    return (
        <div>
            <h1>Hello Guys</h1>
        </div>
    )
}

export default AIPage;