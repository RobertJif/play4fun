declare global {
  // API Client
  type QueryCodeType = 'game-list'
  type HttpSuccessCodeType = 200 | 201
  type HttpErrorCodeType = 500 | 400

  type IUseQueryDetail<TRes> = () => {
    queryFn: () => Promise<TRes>
    queryKey: [QueryCodeType, ...args]
  }
}

export {}
