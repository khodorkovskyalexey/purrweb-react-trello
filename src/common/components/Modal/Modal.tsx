import React from 'react';
import './modal.css';

export interface ModalProps {
    active: boolean,
    setActive: (active: boolean) => void,
}

export const Modal: React.FC<ModalProps> = ({ active, setActive, children }) => {
    return (
        <div className={active ? 'modal_view active' : 'modal_view'} onClick={() => setActive(false)}>
            <div className={active ? 'modal_view_content active' : 'modal_view_content'} onClick={e => e.stopPropagation()}>
                <input type="button" className='fl_r' value='x' onClick={() => setActive(false)} />
                {children}
            </div>
        </div>
    );
};
