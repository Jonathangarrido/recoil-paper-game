import React from 'react'
import { RecoilRoot } from 'recoil'

import { Game } from './Game'
import './App.css'

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <h1>Paper Click</h1>
        <Game />
      </RecoilRoot>
    </div>
  );
}

export default App
