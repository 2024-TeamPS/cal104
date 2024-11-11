import { useState } from 'react'
import Button from '../Button'
import { GoogleLogin } from '@react-oauth/google'
import userStore from '../../store/userStore'
import { jwtDecode } from 'jwt-decode'
import Notify from './Notify'
// import { signIn } from '../../api/userApi'
// import axios from 'axios'

interface GoogleUser {
  name: string
  given_name: string
  email: string
  picture: string
}

const LoginButton = () => {
  const [loginClicked, setLoginClicked] = useState(false)
  const [isLogined, setIsLogined] = useState(false)
  const [imagePath, setImagePath] = useState('')
  const { setGoogleCredential, setNickname, setEmail } = userStore()

 // 로그인 버튼을 누르면
 // 구글 로그인 api 호출
 // 결과 받아서 nickname, email 등 zustand 에 저장
 // 백엔드 서버에 로그인 요청
 // 데이터에 없으면 회원가입
 // 있으면
 // response 받아서 access, refresh 토큰 저장 
 
  return (
    <div className="mr-10">
      {!isLogined && !loginClicked && (
        <Button onClick={() => setLoginClicked(!loginClicked)}>로그인</Button>
      )}
      {!isLogined && loginClicked && (
        <GoogleLogin
          onSuccess={async (credentialResponse) => {
            // console.log(credentialResponse)
            if (credentialResponse.credential) {
              setGoogleCredential(credentialResponse.credential)
              try {
                const decodedToken = jwtDecode<GoogleUser>(
                  credentialResponse.credential
                )
                console.log('Decoded JWT:', decodedToken)
                setEmail(decodedToken.email)
                setNickname(decodedToken.given_name)
                setImagePath(decodedToken.picture)
                
                // const response = await signIn({provider: "google", code: credentialResponse.credential})
                // axios.defaults.headers.common['Authorization'] = `Bearer ${response.accessToken}`


                setIsLogined(true)
              } catch (error) {
                console.log(error)
              }
            }
          }}
          onError={() => {
            console.log('Login Failed')
          }}
        />
      )}
      {isLogined && (
        <div className="flex flex-row items-center">
          <Notify />
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={imagePath}
          />
          {/* <p>{nickname}</p> */}
        </div>
      )}
    </div>
  )
}

export default LoginButton
