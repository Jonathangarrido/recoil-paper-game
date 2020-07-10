import React from 'react'
import { useRecoilValue } from 'recoil'

import { gameScore } from './Atom'

export const Gems = () => {

  const score = useRecoilValue(gameScore)

  return (
    <div>
      {
        [...Array(score)].map((item, key)=>(
          <span
            key={key}
            role="img"
            aria-label="gem"
            >💎</span>
        ))
      }
    </div>
  )
}
