import { atom, useRecoilState } from 'recoil'

export const gameScore = atom({
  key: 'gameScore',
  default: 0
})

export const useResetScore = () => {
  const [, setScore] = useRecoilState(gameScore)
  return () => {
    setScore(0)
  }
}
