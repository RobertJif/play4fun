declare global {
  // API Client
  type QueryCodeType = 'game-list'
  type MutationCodeType = 'login'
  type HttpSuccessCodeType = 200 | 201
  type HttpErrorCodeType = 500 | 400

  type IUseQueryDetail<TRes> = () => {
    queryFn: () => Promise<TRes>
    queryKey: [QueryCodeType, ...args]
  }

  type IUseMutationDetail<TReq, TRes> = () => {
    mutationFn: (param: TReq) => Promise<TRes>
    mutationKey: [MutationCodeType, ...args]
  }
}

export {}
