// 특정 월의 날짜 데이터를 반환하는 함수
const generateCalendar = (year: number, month: number) => {
  const startDate = new Date(year, month, 1) // 해당 월의 1일
  const endDate = new Date(year, month + 1, 0) // 해당 월의 마지막 날

  const calendar: Date[][] = []
  let week: Date[] = []

  for (let i = 1 - startDate.getDay(); i <= endDate.getDate(); i++) {
    const date = new Date(year, month, i)
    week.push(date)

    // 한 주가 완성되면 배열에 추가
    if (week.length === 7) {
      calendar.push(week)
      week = []
    }
  }

  // 마지막 주 처리
  if (week.length > 0) calendar.push(week)

  return calendar
}

export default generateCalendar
