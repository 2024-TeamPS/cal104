import { useEffect } from "react"

const GroupList = () => {
  useEffect(() => {
    // 마운트 시 그룹 정보 들고오기
    // getGroupList 
  }, [])

  return (
    <ul>
      <li>그룹 1</li>
      <li>그룹 2</li>
      <li>그룹 3</li>
    </ul>
  )
}

export default GroupList
