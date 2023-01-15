import { useState } from "react";
import React, { Component } from "react";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";


function Store(contener) {
    const [iconName, seticonName] = useState("view_list");

    const products = [{
      name: "Nike Metcon 2",
      price: "130",
      color: "red",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "blue",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, {
      name: "Nike free run",
      price: "170",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, {
      name: "Nike Metcon 3",
      price: "150",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }];

    function contenerIcon() {
     // console.log(sost);
      if (iconName == "view_list") {
        seticonName("view_module");
      } else seticonName("view_list");
      
    }

  /*  return <div className="contener">
              <IconSwitch icon={"view_list"} onSwitch={contenerIcon} />
           </div>*/

    return <div className="contener"> 
              <div className="contenerIcon">
                <span onClick={contenerIcon} class="material-icons">{iconName}</span>
              </div>
              <div>
                {iconName == "view_module"? <CardsView cards={products} />:<ListView items={products}/> }
                
              </div>
          </div>


}

export default Store;