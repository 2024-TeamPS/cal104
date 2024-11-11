import API from './api'
import { authToken, SignInData, UserInfo } from '../types/userTypes'
import { ApiResponse } from '../types/ApiResponseType'

export const signIn = async (data: SignInData): Promise<ApiResponse | void> => {
  try {
    const res = await API.post<ApiResponse>('/oauth/login', data)
    return res.data
  } catch (err) {
    console.error('로그인 오류:', err)
  }
}

export const signOut = async (data: authToken): Promise<ApiResponse | void> => {
  try {
    const res = await API.post<ApiResponse>('/auth/logout', data)
    return res.data
  } catch (err) {
    console.error('로그아웃 오류', err)
  }
}

export const singUp = async (data: UserInfo): Promise<ApiResponse | void> => {
  try {
    const res = await API.post<ApiResponse>('/user/signup', data)
    return res.data
  } catch (err) {
    console.error('회원가입 오류', err)
  }
}

export const getUserInfo = async (): Promise<ApiResponse | void> => {
  try {
    const res = await API.get<ApiResponse>('/user')
    return res.data
  } catch (err) {
    console.error('회원정보 조회 오류', err)
  }
}

export const updateUserInfo = async (
  data: UserInfo
): Promise<ApiResponse | void> => {
  try {
    const res = await API.patch<ApiResponse>('/user', data)
    return res.data
  } catch (err) {
    console.error('회원정보 수정 오류', err)
  }
}

export const cancelAccount = async (): Promise<ApiResponse | void> => {
  try {
    const res = await API.delete<ApiResponse>('/user')
    return res.data
  } catch (err) {
    console.error('회원 탈퇴 오류', err)
  }
}