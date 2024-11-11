import API from './api'
import { ApiResponse } from '../types/ApiResponseType'
import { planInfo } from '../types/CalendarTypes'

export const createPlan = async (data: planInfo): Promise<ApiResponse | void> => {
    try {
      const res = await API.post<ApiResponse>('/calendar/plan', data)
      return res.data
    } catch (err) {
      console.error('일정 등록 오류:', err)
    }
}

export const updatePlan = async (planId: number, data: planInfo): Promise<ApiResponse | void> => {
    try {
      const res = await API.patch<ApiResponse>(`/calendar/plan/${planId}`, data)
      return res.data
    } catch (err) {
      console.error('일정 수정 오류:', err)
    }
}

export const deletePlan = async (planId: number): Promise<ApiResponse | void> => {
    try {
      const res = await API.delete<ApiResponse>(`/calendar/plan/${planId}`)
      return res.data
    } catch (err) {
      console.error('일정 삭제 오류:', err)
    }
}

export const getPlan = async (planId: number): Promise<ApiResponse | void> => {
  try {
    const res = await API.get<ApiResponse>(`/calendar/plan/${planId}`)
    return res.data
  } catch (err) {
    console.error('일정 조회 오류:', err)
  }
}

export const getGroupCalendar = async (groupId: number, month: number): Promise<ApiResponse | void> => {
  try {
    const res = await API.get<ApiResponse>(`/calendar/${month}/${groupId}`)
    return res.data
  } catch (err) {
    console.error('캘린더 조회 오류:', err)
  }
}
