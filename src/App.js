import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // Créer les Hooks d'états
  const [marioPoint, setMarioPoint] = useState(0);
  const [emoji, setEmoji] = useState("");

  useEffect(() => {
    // Mettre à jour l'emoji
    if (marioPoint < 5) {
      setEmoji("😭");
    } else if (marioPoint < 10) {
      setEmoji("😢");
    } else if (marioPoint < 15) {
      setEmoji("😄");
    } else if (marioPoint < 19) {
      setEmoji("🥳");
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => setMarioPoint(marioPoint + 1)}>
          Give Mario some points on his presentation
        </button>
        <h2>For the moment I have {marioPoint}/20</h2>
        <h2>{emoji}</h2>
      </header>
    </div>
  );
}

export default App;
