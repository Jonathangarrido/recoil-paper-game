import React from 'react'
import { useRecoilValue } from 'recoil'

import { highScores } from './selector'

export const HighScore = () => {
  const score = useRecoilValue(highScores)
  return (
    <div>
      High Score: { score }
    </div>
  )
}
