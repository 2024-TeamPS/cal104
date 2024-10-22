import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface UserState {
  googleCredential: string
  nickname: string
  email: string
  setGoogleCredential: (newGoogleCredential: string) => void
  setNickname: (newNickname: string) => void
  setEmail: (newEmail: string) => void
}

const userStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        googleCredential: '',
        nickname: '',
        email: '',
        setGoogleCredential: (newGoogleCredential) =>
          set({ googleCredential: newGoogleCredential }),
        setNickname: (newNickname) => set({ nickname: newNickname }),
        setEmail: (newEmail) => set({ email: newEmail }),
      }),
      {
        name: 'user-storage',
      }
    )
  )
)

export default userStore
