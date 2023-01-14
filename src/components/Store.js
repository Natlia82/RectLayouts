import { useState } from "react";
import React, { Component } from "react";



function Store(contener) {
    const [iconName, seticonName] = useState("view_list");
   
    const contenerIcon = evt => {
      if (iconName == "view_list") {
        seticonName("view_module");
      } else seticonName("view_list");
      
    }

    return <div className="contener"> 
              <div className="contenerIcon">
                <span onClick={contenerIcon} class="material-icons">{iconName}</span>
              </div>
              <div></div>
          </div>


}

export default Store;