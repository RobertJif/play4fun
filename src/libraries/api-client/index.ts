import { appConfig } from '@/libraries/configs/app'
import axios, { isAxiosError } from 'axios'

export function extractError(error: unknown): ApiResponseErrorType {
  let errObj: ApiResponseErrorType = {
    data: 'Error Parsing Fail',
    status: 500
  }
  if (isAxiosError(error))
    errObj = {
      data: error.response?.data,
      status: (error.response?.status ?? 500) as HttpErrorCodeType
    }

  return errObj
}

export const guestAxios = axios.create({
  baseURL: appConfig.API_BASE_URL
})
