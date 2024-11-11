import API from './api'
import { ApiResponse } from '../types/ApiResponseType'

// export const createAlert = async (data: 알림정보): Promise<ApiResponse | void> => {
//     try {
//       const res = await API.post<ApiResponse>('/alert', data)
//       return res.data
//     } catch (err) {
//       console.error('알림 생성 오류:', err)
//     }
// }

export const getAlert = async (): Promise<ApiResponse | void> => {
    try {
      const res = await API.get<ApiResponse>('/alert')
      return res.data
    } catch (err) {
      console.error('알림 조회 오류:', err)
    }
}

export const checkAlert = async (alertId: number): Promise<ApiResponse | void> => {
    try {
      const res = await API.patch<ApiResponse>(`/alert/${alertId}`)
      return res.data
    } catch (err) {
      console.error('알림 조회 오류:', err)
    }
}

export const deleteAlert = async (alertId: number): Promise<ApiResponse | void> => {
    try {
      const res = await API.delete<ApiResponse>(`/alert/${alertId}`)
      return res.data
    } catch (err) {
      console.error('알림 조회 오류:', err)
    }
}