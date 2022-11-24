import React from "react";
import '../style/style.scss'

function Card({card, picked, handleClick}) {
 return (
    
    <div className="Card">{card}
    <button onClick={()=> handleClick(card)}>pick</button>
    </div>
    
 )   
}

export default Card;