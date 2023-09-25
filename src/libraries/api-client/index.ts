import axios from 'axios'

type QueryCodeType = 'game-list'
export type IUseQueryDetail<Req, Res> = () => {
  fetcher: (params: Req) => Promise<Res>
  queryCode: QueryCodeType
}

const guestAxios = axios.create({
  // baseURL:
})
