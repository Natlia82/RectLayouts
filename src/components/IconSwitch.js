import React, { useState } from "react";

function IconSwitch(props) {
    const {icon, onSwitch} = props;
    console.log(onSwitch);
    return <div className="contenerIcon">
             <span onClick={onSwitch.bind(icon)} class="material-icons">{icon}</span>
           </div>;
}

export default IconSwitch;

