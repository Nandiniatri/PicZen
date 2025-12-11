import './Modal.css';

const Modal = ({ open, onClose, children }) => {
    if (!open) return null;


    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
     
                <div className="modal-body">{children}</div>

                {/* <div className="modal-footer">
                    <button className="btn" onClick={onClose}>Close</button>
                </div> */}
            </div>
        </div>
    );
};

export default Modal;