import React from 'react';
import './column.css';

export interface ColumnProps {
    name: string;
}

export const Column: React.FC<ColumnProps> = ({ name, children }) => {
    return (
        <div className='column'>
            <div className='column-name'>{name}</div>
            {children}
        </div>
    );
};
