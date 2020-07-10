import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

import { gameScore } from './atoms'
import { paperSize } from './selector'

export const Game = () => {

  const [score, setScore] = useRecoilState(gameScore)
  const size = useRecoilValue(paperSize)

  const paperClick = () => {
    setScore(score+1)
  }

  return (
    <div>
      <button
        style={{
          background: 'transparent',
          border: 0,
          cursor: 'pointer',
          fontSize: size,
        }}
        onClick={paperClick}
      >
        <span
          role="img"
          aria-label="toiled paper"
          >
          🧻
        </span>
      </button>
    </div>
  )
}
