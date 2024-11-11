import API from './api'
import { ApiResponse } from '../types/ApiResponseType'
import { groupInfo } from '../types/GroupTypes'

export const createGroup = async (data: groupInfo): Promise<ApiResponse | void> => {
    try {
      const res = await API.post<ApiResponse>('/group', data)
      return res.data
    } catch (err) {
      console.error('그룹 생성 오류:', err)
    }
}

export const getGroupList = async (): Promise<ApiResponse | void> => {
    try {
      const res = await API.get<ApiResponse>('/group')
      return res.data
    } catch (err) {
      console.error('그룹 목록 조회 오류:', err)
    }
}

export const inviteGroup = async (groupId: number): Promise<ApiResponse | void> => {
    try {
      const res = await API.post<ApiResponse>(`/group/${groupId}`)
      return res.data
    } catch (err) {
      console.error('그룹 목록 조회 오류:', err)
    }
}

export const findUser = async (): Promise<ApiResponse | void> => {
    try {
      const res = await API.get<ApiResponse>('/group/invite')
      return res.data
    } catch (err) {
      console.error('유저 조회 오류:', err)
    }
}

export const acceptGroupInvitation = async (alertId: number): Promise<ApiResponse | void> => {
    try {
      const res = await API.post<ApiResponse>(`/group/accept/${alertId}`)
      return res.data
    } catch (err) {
      console.error('그룹 초대 수락 오류:', err)
    }
}

export const denyGroupInvitation = async (alertId: number): Promise<ApiResponse | void> => {
    try {
      const res = await API.post<ApiResponse>(`/group/deny/${alertId}`)
      return res.data
    } catch (err) {
      console.error('그룹 초대 수락 오류:', err)
    }
}

export const leaveGroup = async (groupId: number): Promise<ApiResponse | void> => {
    try {
      const res = await API.delete<ApiResponse>(`/group/withdraw/${groupId}`)
      return res.data
    } catch (err) {
      console.error('그룹 탈퇴 오류:', err)
    }
}

export const deleteGroup = async (groupId: number): Promise<ApiResponse | void> => {
    try {
      const res = await API.delete<ApiResponse>(`/group/${groupId}`)
      return res.data
    } catch (err) {
      console.error('그룹 삭제 오류:', err)
    }
}

export const updateGroupLeader = async (groupId: number, data: {userId: string}): Promise<ApiResponse | void> => {
    try {
      const res = await API.patch<ApiResponse>(`/group/${groupId}`, data)
      return res.data
    } catch (err) {
      console.error('그룹장 변경 오류:', err)
    }
}