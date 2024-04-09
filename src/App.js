import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("red");

  return (
    <div className="App">
      <body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
        <div>
          <h1>Couleur choisie : </h1>
          <button
            type="button"
            onClick={() => setColor("blue")}
          >Bleu</button>
          <button
            type="button"
            onClick={() => setColor("red")}
          >Rouge</button>
          <button
            type="button"
            onClick={() => setColor("pink")}
          >Rose</button>
          <button
            type="button"
            onClick={() => setColor("green")}
          >Vert</button>
        </div><br/>
        <div style={{ width: '100px', height: '100px', backgroundColor: color }}></div>
      </body>
    </div>
  );
}

export default App;
