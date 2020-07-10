import React from 'react'
import { useRecoilState } from 'recoil'

import { gameScore } from './Atom'

export const Game = () => {

  const [score, setScore] = useRecoilState(gameScore)

  const paperClick = () => {
    setScore(score+1)
  }

  return (
    <div>
      Score: {score}
      <button
        style={{
          background: 'transparent',
          border: 0,
          cursor: 'pointer',
          fontSize: 100,
        }}
        onClick={paperClick}
      >
        <span
          role="img"
          aria-label="donut"
          >
          🧻
        </span>
      </button>
    </div>
  )
}
