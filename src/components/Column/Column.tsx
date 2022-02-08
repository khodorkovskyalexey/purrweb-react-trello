import React from 'react';
import './column.css';

export interface ColumnProps {
    id: number;
    name: string;
    setRenameModalActive: (active: boolean) => void;
    setRenamedColumn: (id: number) => void;
    setAddingCardModalActive: (active: boolean) => void;
    setAddingCardColumn: (id: number) => void;
}

export const Column: React.FC<ColumnProps> = ({
    id,
    name, 
    children, 
    setRenameModalActive, 
    setRenamedColumn, 
    setAddingCardModalActive,
    setAddingCardColumn,
}) => {
    return (
        <div className='column'>
            <div className='column-name'>
                {name}
                <input type="button" value="Rename" onClick={() => {
                    setRenameModalActive(true);
                    setRenamedColumn(id);
                } }/>
                <input type="button" value="Add card" onClick={() => {
                    setAddingCardModalActive(true);
                    setAddingCardColumn(id);
                } }/>
            </div>
            {children}
        </div>
    );
};
