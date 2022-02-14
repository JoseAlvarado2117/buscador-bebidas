import React from 'react';

import '../styles/components/Modal.css'

const Modal = ({ children, isOpen, closeModal }) => {

    const handleModalClick = e => {
        e.stopPropagation();
    }

    return (
        <article className={`modal ${isOpen ? `is-open` : null}`} onClick={closeModal}>
            <div className="modal-container" onClick={handleModalClick}>
                <button onClick={closeModal} className="modal-close">X</button>
                { children }
            </div>
        </article>
    )
}

export default Modal