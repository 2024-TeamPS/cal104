import { useState } from 'react'
import generateCalendar from './generate_calendar'

const Calendar = () => {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())

  const calendar = generateCalendar(currentYear, currentMonth)
  console.log(calendar)
  const handlePrevMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1))
    if (currentMonth === 0) setCurrentYear((prev) => prev - 1)
  }

  const handleNextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1))
    if (currentMonth === 11) setCurrentYear((prev) => prev + 1)
  }

  return (
    <div className="w-full h-screen bg-white border-l-2">
      <div>
        <header className="flex justify-between mb-4">
          <button onClick={handlePrevMonth}>이전</button>
          <h2>
            {currentYear}년 {currentMonth + 1}월
          </h2>
          <button onClick={handleNextMonth}>다음</button>
        </header>
        <table className="w-full text-center table-fixed">
          <thead>
            <tr>
              {['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT'].map((day, idx) => (
                <th key={day} className="text-left">
                  <p className={`text-sm font-medium ml-1 ${idx === 0 ? "text-red-500": idx === 6? "text-blue-500" :"text-slate-800"}`}>{day}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {calendar.map((week, index) => (
              <tr key={index}>
                {week.map((date, idx) => (
                  <td key={idx} className="p-2 border h-36 relative">
                    {date.getMonth() === currentMonth ? (
                      <p className={`text-sm ${idx === 0 ? "text-red-500": idx === 6? "text-blue-500" :"text-slate-800"} absolute left-3 top-3`}>
                        {date.getDate()}
                      </p>
                    ) : (
                      <p className={`text-sm ${idx === 0 ? "text-red-200": idx === 6? "text-blue-200" :"text-slate-300"} absolute left-3 top-3`}>
                        {date.getDate()}
                      </p>
                    )}
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
