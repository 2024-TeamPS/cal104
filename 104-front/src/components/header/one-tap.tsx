import { useGoogleOneTapLogin } from '@react-oauth/google';

export default useGoogleOneTapLogin({
  onSuccess: credentialResponse => {
    console.log(credentialResponse);
  },
  onError: () => {
    console.log('Login Failed');
  },
});