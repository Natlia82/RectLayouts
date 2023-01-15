import React, { useState } from "react";
import ShopCard from "./ShopCard"
function CardsView(props) {
    const {cards} = props;
     console.log(cards);
    return <div className="contenerCart">
                {cards.map(card => <ShopCard card={card} />)}
             
           </div>;
}

export default CardsView;