import Header from '../../components/header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import LoginButton from './MainLoginButton'

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full h-screen items-center justify-center">
        <div className='flex justify-end w-full pt-2 pr-10'>
          <Link to="notice"><span className='mr-5'>공지사항</span></Link>
          <Link to="qna"><span className='mr-3'>문의하기</span></Link>
        </div>
        <div className='flex flex-col items-center justify-center mb-60 h-full'>
          <p className='font-extrabold text-[100px]'>월별 일정 관리를 완벽하게</p>
          <LoginButton />
        </div>
      </main>
      <Footer>이곳은 푸터</Footer>
    </>
  )
}

export default HomePage
