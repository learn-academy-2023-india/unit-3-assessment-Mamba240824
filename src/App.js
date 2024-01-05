import React, { useState } from "react"
import Card from "./components/Card"
import "./App.css"

const App = () => {
  const suit = ["❤️", "♦️", "♠️", "♣️"]
  const rank = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ]
  const [hand, setHand] = useState([])

  const drawCard = () => {
    // 1) is going to make each card randomize by using the arrays "suit" and "rank". so each card drawn will have a different suit and rank every time.
    const draw = `${rank[Math.floor(Math.random() * rank.length)]} ${
      suit[Math.floor(Math.random() * suit.length)]
    }`
    // 2) it's saying that the condition required is that "draw" is not an index in "hand".
    if (hand.indexOf(draw) === -1) {
      // 3) "setHand" is the behavior of the state hook, so the behavior it's expecting is to take the arrays from "hand" and use the logic from "draw" to make a card.
      setHand([...hand, draw])
      // 4) else if the length of the hand array does not equal 52
    } else if (hand.length !== 52) {
      // 5) return the drawCard function, which will randomize each card from the hand aray.
      drawCard()
      // 6) else, any other situation that happens outside of the above conditions
    } else {
      // 7)return a pop up alert stating that "all cards have been delt."
      alert("All cards have been dealt.")
    }
  }
  // No need to change anything ABOVE this line ^

  const shuffle = () => {
    setHand([])
  }

  return (
    <div>
    <h1>Draw a Card</h1>
    <button onClick={drawCard}>Click to Draw a Card</button>
    <button onClick={shuffle}>Return Cards and Shuffle Deck</button>
    <Card hand={hand} />
    </div>
  )
}

export default App
