import React from 'react';
import './modal.css';

export interface ModalProps {
    active: boolean,
    setActive: (active: boolean) => void,
}

const Modal: React.FC<ModalProps> = ({ active, setActive }) => {
    return (
        <div className={active ? 'modal_view active' : 'modal_view'} onClick={() => setActive(false)}>
            <div className={active ? 'modal_view_content active' : 'modal_view_content'} onClick={e => e.stopPropagation()}>
                
            </div>
        </div>
    );
};

export default Modal;