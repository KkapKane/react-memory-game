import React, { useState } from "react";
import Card from "./component/Card";
import { v4 as uuidv4 } from 'uuid';
import Confetti from 'react-confetti'



function App() {

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }




  const mob1 = "https://cdn.wikimg.net/en/strategywiki/images/7/73/MS_Monster_Big_Boulder_Muncher.png"
  const mob2 = "https://cdn.wikimg.net/en/strategywiki/images/6/6e/MS_Monster_Squirrelnon.png"
  const mob3 = "https://cdn.wikimg.net/en/strategywiki/images/f/f7/MS_Monster_Blue_Mushmom.png"
  const mob4 = "https://cdn.wikimg.net/en/strategywiki/images/c/ca/MS_Monster_Buffoon.png"
  const mob5 = "https://cdn.wikimg.net/en/strategywiki/images/6/69/MS_Monster_Chimera.png"
  const mob6 = "https://cdn.wikimg.net/en/strategywiki/images/7/74/MS_Monster_Furious_Scarlion_Boss.png"
  const mob7 = "https://cdn.wikimg.net/en/strategywiki/images/1/1c/MS_Monster_Heretic_Monk_Initiate.png"
  const mob8 = "https://cdn.wikimg.net/en/strategywiki/images/c/cc/MS_Monster_Mossy_Snail.png"
  const mob9 = "https://cdn.wikimg.net/en/strategywiki/images/d/d6/MS_Monster_Mutant_Ribbon_Pig.png"
  const mob10 = "https://cdn.wikimg.net/en/strategywiki/images/a/a8/MS_Monster_Prison_Guard_Ani.png"
  const mob11 = "https://cdn.wikimg.net/en/strategywiki/images/2/20/MS_Monster_Sinister_Wooden_Mask.png"
  const mob12 = "https://cdn.wikimg.net/en/strategywiki/images/e/e4/MS_Monster_Snowman.png"

  const [card, setCard] = useState([mob2, mob1, mob3, mob4, mob5, mob6, mob7, mob8, mob9, mob10, mob11, mob12])
  
  const [picked, setPicked] = useState([])

  const [highscore, setHighscore] = useState(0)

  const [win, setWin] = useState(false)

  const handleClick = (s) => {
    if (picked.length >= 12) {
      alert("you won!")
      setWin(true)
    }
    if (picked.includes(s)) {
      alert('you lose')

      if (picked.length > highscore) {
        setHighscore(picked.length)
      }

      setPicked([])
    }
    else
      setPicked(current => [...picked, s])
    shuffle(card);

  }

  return (

    <div className="App">
      {win ? <Confetti /> : null}

      <div className="header">

        <img src="https://upload.wikimedia.org/wikipedia/en/3/37/MapleStory.SVG" alt="" className="logo" />
        <div className="scoreContainer">
          <div className="scoreBoard">score: {picked.length}</div>
          <div className="highScore">high score: {highscore}</div>
        </div>
      </div>

      <div className="cardContainer">
        {card.map((c) => {
          return (<Card key={uuidv4()} picked={picked} card={c} handleClick={handleClick} />)
        })}
      </div>



    </div>
  );
}

export default App;
