import React from 'react';
import ReactDOM from 'react-dom';

const Modal = () => {
return( ReactDOM.createPortal(
    <div className="modal noDisplay">
        <div className="content-modal">
            <h2>Changer de nom</h2>

        </div>
    </div>, document.getElementById("modal")
)
)
}
export default Modal;