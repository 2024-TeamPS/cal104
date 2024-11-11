export interface User {
  name: string
  email: string
  picture: string
}

export interface SignInData {
  provider: string
  code: string
}

export interface authToken {
  accessToken: string
  refreshToken: string
}

export interface UserInfo {
  nickname: string,
  profileImg?: string,
}