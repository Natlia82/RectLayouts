import React, { useState } from "react";
function ShopItem(props) {
    const {item} = props;
    return  <article className="articleProduct" >
                <div >
                     <img className="img" src={item.img} />
                </div>
                <div>
                    <h3 className="card-name">{item.name}</h3>
                </div>
                <div>
                      <p>{item.color}</p>
                </div>
                <div>
                    <span>${item.price}</span>
                </div>
                <div>
                    <button>add to card</button>
                </div>
    
            </article>
}
export default ShopItem;