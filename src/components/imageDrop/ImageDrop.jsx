import { useAppEvent } from "../../contextApi/AppEventContext";

const ImageDropFile = () => {
    const { selectedFiles } = useAppEvent();

    if(!selectedFiles){
        return <p>No files selected.</p>
    }

    return (
        <>
            <h2>Selected Files:</h2>
            {[...selectedFiles].map((file, index) => (
                <div key={index}>
                    <img src={URL.createObjectURL(file)} alt={file.name} width="200" /> 
                </div>
            ))}
        </>
    )
}

export default ImageDropFile;