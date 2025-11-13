import { useAppEvent } from '../../contextApi/AppEventContext';
import Button from '../Button';
import './ImageSelect.css';
import { CloudUpload } from 'lucide-react';

const ImageSelect = () => {
    const { handleImageDropBtn } = useAppEvent();

    return (
        <>
            <div className="imageDrop-icon">
                <CloudUpload size={45} color="#9b4bff" />
            </div>

            <div className='imageDrop-div2'>
                <p className="imageDrop-text">Drop one or more photos</p>

                <Button className="imageDrop-btn" onClick={handleImageDropBtn}>Select photos</Button>
            </div>
        </>
    );
};

export default ImageSelect;  
