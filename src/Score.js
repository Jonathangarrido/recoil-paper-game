import React from 'react'
import { useRecoilValue } from 'recoil'

import { gameScore } from './atoms'

export const Score = () => {

  const score = useRecoilValue(gameScore)

  return (
    <div>
      <h3>Score: { score }</h3>
    </div>
  )
}
