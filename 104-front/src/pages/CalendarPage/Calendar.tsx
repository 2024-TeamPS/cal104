import { useState } from 'react'
import generateCalendar from './generate_calendar'

const Calendar = () => {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())

  const calendar = generateCalendar(currentYear, currentMonth)

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1))
    if (currentMonth === 0) setCurrentYear((prev) => prev - 1)
  }

  const handleNextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1))
    if (currentMonth === 11) setCurrentYear((prev) => prev + 1)
  }

  return (
    <div className="w-full h-screen bg-slate-400">
      <div className="p-4">
        <header className="flex justify-between mb-4">
          <button onClick={handlePrevMonth}>이전</button>
          <h2>
            {currentYear}년 {currentMonth + 1}월
          </h2>
          <button onClick={handleNextMonth}>다음</button>
        </header>
        <table className="w-full text-center">
          <thead>
            <tr>
              {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
                <th key={day} className="p-2 border">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {calendar.map((week, index) => (
              <tr key={index}>
                {week.map((date, idx) => (
                  <td key={idx} className="p-2 border">
                    {date.getMonth() === currentMonth ? date.getDate() : ''}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Calendar
