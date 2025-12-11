import EditorCanvas from '../../../components/editorCanvas/EditorCanvas';
import Modal from '../../../components/modal/Modal';
import { useAppEvent } from '../../../contextApi/AppEventContext';
import './Resize.css';

const Resize = () => {
    const { handleModelClose, openModal } = useAppEvent();

    return (
        <Modal open={openModal} onClose={handleModelClose} title="Resize Image">
            <div className="resize-page">
                <EditorCanvas />
            </div>
        </Modal>
    )
}

export default Resize;
