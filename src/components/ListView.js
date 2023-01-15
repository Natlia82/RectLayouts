import React, { useState } from "react";
import ShopItem from "./ShopItem";

function ListView(props) {
    const {items} = props;
    return <div className="contenerProduct">
           {items.map(item => <ShopItem item={item}/> )}
            
   
          </div>;

}
export default ListView;