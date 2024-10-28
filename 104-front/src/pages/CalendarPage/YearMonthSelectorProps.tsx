import { useState } from 'react'

interface YearMonthSelectorProps {
  onSelect: (year: number, month: number) => void
}

const YearMonthSelector = ({ onSelect }: YearMonthSelectorProps) => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const [isMonthSelection, setIsMonthSelection] = useState(false)

  const years = Array.from({ length: selectedYear-2019+3 }, (_, i) => i + 2019) 
  const months = Array.from({ length: 12 }, (_, i) => i)

  return (
    <div className="p-4">
      {!isMonthSelection ? (
        <div>
          <h3>년도 선택</h3>
          <div className="grid grid-cols-4 gap-2">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => {
                  setSelectedYear(year)
                  setIsMonthSelection(true) // 월 선택 모드로 전환
                }}
                className="p-2 border rounded"
              >
                {year}년
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h3>월 선택</h3>
          <div className="grid grid-cols-3 gap-2">
            {months.map((month) => (
              <button
                key={month}
                onClick={() => onSelect(selectedYear, month)}
                className="p-2 border rounded"
              >
                {month + 1}월
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default YearMonthSelector
