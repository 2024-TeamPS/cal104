import { useState } from 'react'
import { GoogleLogin } from '@react-oauth/google'
import userStore from '../../store/userStore'
import { jwtDecode } from 'jwt-decode'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()
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
        <Button className='bg-[#01579B] text-white px-10 mt-5' onClick={() => setLoginClicked(!loginClicked)}>구글 계정으로 계속하기</Button>
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
                navigate('calendar')
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
    </div>
  )
}

export default LoginButton
