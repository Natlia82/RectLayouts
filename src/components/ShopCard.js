import React, { useState } from "react";
import { Component } from "react";

function ShopCard(props) {
    const {card} = props;
    return  <article className="card">
                <header className="card-header">
                    <h3 className="card-name">{card.name}</h3>
                    <p>{card.color}</p>
                </header>
                <div className="card-content">
                    <img src={card.img}/>
                </div>
                <footer>
                     <span>${card.price}</span>
                     <button>add to card</button>
                </footer>
            </article>
}
export default ShopCard;