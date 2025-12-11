import Modal from '../../../components/modal/Modal';
import { useAppEvent } from '../../../contextApi/AppEventContext';
import './Resize.css';


const Resize = () => {
    const { handleModelClose, openModal } = useAppEvent();

    return (
        <Modal open={openModal} onClose={handleModelClose} title="Resize Image">
            <div className="resize-page">
                
            </div>
        </Modal>
    )
}

export default Resize;