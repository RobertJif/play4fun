import type { IUseQueryDetail } from '.'

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

const fetcher = async (): Promise<GameResponseType[]> => {
  return await fetch('/api/game').then((res) => res.json())
}

const useGameListApi: IUseQueryDetail<undefined, GameResponseType[]> = () => {
  return { queryCode: 'game-list', fetcher: fetcher }
}

export default useGameListApi
