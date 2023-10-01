import { guestAxios } from '.'

export type LoginResponseType = {
  accessToken: string
  refreshToken: string
}
type LoginRequestType = {
  username: string
  password: string
}

const mutationFn = async (body: LoginRequestType) => {
  const res = await guestAxios.post<LoginResponseType>('/api/auth/login', body)
  return res.data
}
const useLoginApi: IUseMutationDetail<LoginRequestType, LoginResponseType> = () => {
  return {
    mutationKey: ['login'],
    mutationFn
  }
}

export default useLoginApi
