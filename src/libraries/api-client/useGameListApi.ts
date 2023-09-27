import type { AxiosError } from 'axios'
import { extractError, guestAxios } from '.'

export type GameCodeType = 'TIC_TAC_TOE'
type BaseGameType = {
  name: string
  descriptionHTML: string
  gameImagePath: string
  code: GameCodeType
}

type GameSinglePlayerType = BaseGameType & {
  playerCount: 1
}

type GameTwoPlayerType = BaseGameType & {
  playerCount: 2
}
type GameFourPlayerType = BaseGameType & {
  playerCount: 4
}
export type GameResponseType = GameSinglePlayerType | GameTwoPlayerType | GameFourPlayerType

const queryFn = async () => {
  const res = await guestAxios.get<GameResponseType[]>('/api/game')
  return res.data
}
const useGameListApi: IUseQueryDetail<GameResponseType[]> = () => {
  return {
    queryKey: ['game-list'],
    queryFn
  }
}

export default useGameListApi
