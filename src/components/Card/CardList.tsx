import React from 'react';
import './card.css';
import { CardModel } from '../../api';
import { Card } from './';

export interface CardsListProps {
    cards: CardModel[];
    openCardModel: (cardId: number) => void;
}

export const CardsList: React.FC<CardsListProps> = ({ cards, openCardModel }) => {
    return (
        <div>
            {cards.map(card => {
                return (
                    <div className='card-in-column'>
                        <Card title={card.title} key={card.id} />
                        <input type="button" value="Open" onClick={() => openCardModel(card.id)} key={card.id} />
                    </div>
                )
            })}
        </div>
    );
};