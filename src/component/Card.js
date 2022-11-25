import React from "react";
import '../style/style.scss'

function Card({card, handleClick}) {
 return (
    
    <div className="Card" onClick={()=> handleClick(card)}>
    <img src={card} alt="maplestory Monsters"/>
    </div>
    
 )   
}

export default Card;