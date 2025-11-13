import Button from '../Button';
import './ImageDrop.css';
import { CloudUpload } from 'lucide-react';

const ImageDrop = () => {
    return (
        <>
            <div className="imageDrop-icon">
                <CloudUpload size={45} color="#9b4bff" />
            </div>

            <div className='imageDrop-div2'>
                <p className="imageDrop-text">Drop one or more photos</p>

                <Button className="imageDrop-btn">Select photos</Button>
            </div>

        </>
    );
};

export default ImageDrop;
