import { useState } from 'react'
import generateCalendar from './generate_calendar'
import Modal from '../../components/Modal'
import YearMonthSelector from './YearMonthSelectorProps'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const Calendar = () => {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [isModalOpen, setIsModalOpen] = useState(false)

  const calendar = generateCalendar(currentYear, currentMonth)

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1))
    if (currentMonth === 0) setCurrentYear((prev) => prev - 1)
  }

  const handleNextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1))
    if (currentMonth === 11) setCurrentYear((prev) => prev + 1)
  }

  const isToday = (date: Date) => {
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    )
  }

  const handleYearMonthSelect = (year: number, month: number) => {
    setCurrentYear(year)
    setCurrentMonth(month)
    setIsModalOpen(false) // 선택 후 모달 닫기
  }

  return (
    <div className="min-w-60 w-full h-screen bg-white border-l-2">
      <div className="flex mt-1 ml-4">
        <div className="h-10 grid place-items-center">
          <span
            className="cursor-pointer font-bold text-lg"
            onClick={() => setIsModalOpen(true)}
          >
            {currentYear}.{String(currentMonth + 1).padStart(2, '0')}
          </span>
        </div>
        <div className="ml-2 flex items-center">
          <ArrowBackIosNewIcon
            className="!w-6 p-1 cursor-pointer border rounded-sm rounded-r-none"
            onClick={handlePrevMonth}
          />
          <ArrowForwardIosIcon
            className="!w-6 p-1 cursor-pointer border border-l-0 rounded-sm rounded-l-none"
            onClick={handleNextMonth}
          />
        </div>
      </div>
      <table className="w-full text-center table-fixed">
        <thead>
          <tr>
            {['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT'].map(
              (day, idx) => (
                <th key={day} className="text-left">
                  <p
                    className={`text-sm font-medium ml-1 ${idx === 0 ? 'text-red-500' : idx === 6 ? 'text-blue-500' : 'text-slate-800'}`}
                  >
                    {day}
                  </p>
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {calendar.map((week, index) => (
            <tr key={index}>
              {week.map((date, idx) => (
                <td
                  key={idx}
                  className="border h-40 relative hover:bg-slate-50"
                >
                  {date.getMonth() === currentMonth ? (
                    <span
                      className={`text-sm absolute left-3 top-3 ${
                        isToday(date)
                          ? 'bg-slate-600 text-white rounded-full w-6 h-6'
                          : idx === 0
                            ? 'text-red-500'
                            : idx === 6
                              ? 'text-blue-500'
                              : 'text-slate-800'
                      }`}
                    >
                      {date.getDate()}
                    </span>
                  ) : (
                    <span
                      className={`text-sm ${idx === 0 ? 'text-red-200' : idx === 6 ? 'text-blue-200' : 'text-slate-300'} absolute left-3 top-3`}
                    >
                      {date.getDate()}
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <YearMonthSelector onSelect={handleYearMonthSelect} />
        </Modal>
      )}
    </div>
  )
}

export default Calendar
