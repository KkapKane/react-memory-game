import React, {useState} from "react";
import Card from "./component/Card";
import { v4 as uuidv4 } from 'uuid';




function App() {

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  
 

  




  const [card,setCard] = useState([1,2,3,4,5,6,7,8,9,10,11,12])
  const [picked,setPicked] = useState([])
  
  const handleClick = (s) => {
    if(picked.includes(s)){
      alert('you lose')
      setPicked([])
    }
    else
    setPicked(current => [...picked, s])
    shuffle(card);
 
    console.log(picked)
  }

  return (
    
    <div className="App">
      <div className="scoreBoard">score: {picked.length}</div>
      <div className="cardContainer">
      {card.map((c)=> {
        return (<Card key={uuidv4()} picked={picked} card={c} handleClick={handleClick}/> )
      })}
      </div>
     
    </div>
  );
}

export default App;
