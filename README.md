

<h1 align="center">:maple_leaf: React-Memory-Game :maple_leaf:</h1>  


<h2> <h2>

Click [here](https://kkapkane.github.io/react-memory-game) for live demo.
# Made with

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
<br>
<br>



# Description

<h4> A game that test your memorization skills! </h4>

<h2> </h2>

# Instructions
<p>Start the game by picking any card. Continue picking cards that hasn't been clicked yet. Getting a score of 12 means you won the game!</p>


# Features
- Shuffles card after each pick
- Clicking the same card twice will invoke the 'you lose' alert
- Beating the game will reward you with confetti



# Previews



<img src="https://s9.gifyu.com/images/memoryGame.png" alt="preview" width="900">



# Things I learned from this Project

* There's probably a library out there that does exactly what you need
```bash
npm install react-confetti
```
* Discovered what ternary operators are on this project
```js
win ? <Confetti /> : null
```
* Dabbled more with useEffect and used it to check if player won
```js
useEffect(() => {
    if (picked.length >= 12) {
      alert("you won!");
      setWin(true);
    }
  }, [picked]);
```