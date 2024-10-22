import { useState } from 'react'
import Button from '../Button'
import { GoogleLogin, useGoogleOneTapLogin } from '@react-oauth/google'
import userStore from '../../store/userStore'
import { jwtDecode, JwtPayload } from 'jwt-decode'
import Notify from './Notify'

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
  const { nickname, setGoogleCredential, setNickname, setEmail } = userStore()

  return (
    <div className="mr-10">
      {!isLogined && !loginClicked && (
        <Button onClick={() => setLoginClicked(!loginClicked)}>로그인</Button>
      )}
      {!isLogined && loginClicked && (
        <GoogleLogin
          onSuccess={(credentialResponse) => {
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
