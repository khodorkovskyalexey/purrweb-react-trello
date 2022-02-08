import React from 'react';
import './card.css';

export interface CardProps {
    title: string;
    description?: string;
    author?: string;
    column?: string;
}

export const Card: React.FC<CardProps> = ({ title, description, author, column }) => {
    return (
        <div className='card_content'>
            <h3>{title}</h3>
            {description || column || author ? <br /> : null}

            {description ? <p>{description}</p> : null}
            {column ? <p>Column: {column}</p> : null}
            {author ? <p>Author: {author}</p> : null}
        </div>
        
    );
};
