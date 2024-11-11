// import { describe, expect, it, vi } from 'vitest'
// import axios from 'axios'
// import { signIn } from '../userApi'

// vi.mock('axios')
// // const mockedAxios = axios as vi.Mocked<typeof axios>

// describe('SignIn API 테스트', () => {
//   it('singIn 함수는 토큰을 반환한다', async () => {
//     const mockData = { accessToken: 'test-token', refreshToken: 'test-refresh' }
//     mockedAxios.post.mockResolvedValue({ data: mockData })

//     const response = await signIn({
//       provider: 'google',
//       code: 'test credential',
//     })
//     expect(response).toBe(mockData)
//   })
// })
