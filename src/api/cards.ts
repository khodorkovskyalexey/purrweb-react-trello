import { IdExistsInterface } from "../common/interfaces";

export interface CardModel extends IdExistsInterface {
    title: string;
    description: string;
    columnId: number;
    author: string;
}

export const CardsArray: CardModel[] = [
    { id: 0, title: 'Card1', description: 'Card number 1', columnId: 0, author: "author1" },
    { id: 1, title: 'Card2', description: 'Card number 2', columnId: 1, author: "author2" },
    { id: 2, title: 'Card3', description: 'Card number 3', columnId: 2, author: "author1" },
    { id: 3, title: 'Card4', description: 'Card number 4', columnId: 3, author: "author2" },
    { id: 4, title: 'Card5', description: 'Card number 5', columnId: 0, author: "author1" },
    { id: 5, title: 'Card6', description: 'Card number 6', columnId: 1, author: "author1" },
    { id: 6, title: 'Card7', description: 'Card number 7', columnId: 2, author: "author2" },
    { id: 7, title: 'Card8', description: 'Card number 8', columnId: 3, author: "author1" },
]

