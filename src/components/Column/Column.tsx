import React, { useState } from 'react';
import './column.css';

export interface ColumnProps {
    id: number;
    name: string;
    setRenameModalActive: (active: boolean) => void;
    setRenamedColumn: (id: number) => void;
}

export const Column: React.FC<ColumnProps> = ({ id, name, children, setRenameModalActive, setRenamedColumn }) => {
    return (
        <div className='column'>
            <div className='column-name'>
                {name}
                <input type="button" value="Rename" onClick={() => {
                    setRenameModalActive(true);
                    setRenamedColumn(id);
                } }/>
            </div>
            {children}
        </div>
    );
};
