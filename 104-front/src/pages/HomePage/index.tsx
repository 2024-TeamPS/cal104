import Header from '../../components/header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="w-full h-screen items-center justify-center">
        <Link to="calendar">
          <button>캘린더 페이지로</button>
        </Link>
      </main>
      <Footer>이곳은 푸터</Footer>
    </>
  )
}

export default HomePage
