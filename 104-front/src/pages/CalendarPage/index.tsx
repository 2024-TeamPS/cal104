import Footer from '../../components/Footer'
import Header from '../../components/header'
import Navbar from '../../components/navbar'
import Calendar from './Calendar'

const CalendarPage = () => {

  return (
    <>
      <Header />
      <main className="flex flex-row">
        <Navbar />
        <Calendar />
      </main>
      <Footer>푸터</Footer>
    </>
  )
}

export default CalendarPage
