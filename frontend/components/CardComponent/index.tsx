import React from 'react';

interface Card {
    id: number;
    name: string;
    email: string;

}

const CardComponent: React.FC<{ card: Card }> = ({ card }) => {
    return (
        <div>
            <p>{card.id}</p>
            <h1>{card.name}</h1>
            <p>{card.email}</p>
        </div>
    )
}

export default CardComponent