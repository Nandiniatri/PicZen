import Modal from '../../../components/modal/Modal';
import { useAppEvent } from '../../../contextApi/AppEventContext';
import './Resize.css';
import { useState } from 'react';


const Resize = () => {
    const { handleModelClose, openModal } = useAppEvent();

    return (
        <Modal open={openModal} onClose={handleModelClose} title="Resize Image">
            <div className="resize-page">
                <h2>Resize Page</h2>
                <p>This is the Resize page content.</p>
            </div>
        </Modal>
    )
}

export default Resize;