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
export type GameType = GameSinglePlayerType | GameTwoPlayerType | GameFourPlayerType
