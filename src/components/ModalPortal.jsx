import ReactDOM from "react-dom";

const ModalPortal = ({ children }) => {
    return ReactDOM.createPortal(
        children,
        document.getElementById('model2')
    )
}  

export default ModalPortal; 