import React, { useState } from "react";
import "./home.css";

function Home() {
  const [game, setGame] = useState(1);

  const [p1wins, setP1wins] = useState(0);
  const [p2wins, setP2wins] = useState(0);

  const gaming = (e) => {
    e.preventDefault();
    let n1 = Math.random();
    let n2 = Math.random();
    n1 = n1 * 6;
    n2 = n2 * 6;

    if (p1wins === 3 || p2wins === 3) {
      setP2wins(0);
      setP1wins(0);
      setGame(1);
    } else {
      if (n1 - n2 > 0) {
        setP1wins(p1wins + 1);
      } else {
        setP2wins(p2wins + 1);
      }
      setGame(game+1);
    }
    
  };

  return (
    <div className="container">
      <h1>Game {game}</h1>
      <button className="btn" onClick={gaming}>Start Game</button>

      <h2>Player 1 - Won: {p1wins}</h2>
      <h2>Player 2 - Won: {p2wins}</h2>
      {p1wins === 3 ? <h2>Player 1 won the match</h2> : <h2></h2>}
      {p2wins === 3 ? <h2>Player 2 won the match</h2> : <h2></h2>}
    </div>
  );
}

export default Home;
