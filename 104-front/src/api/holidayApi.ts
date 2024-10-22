import axios from 'axios'
import fs from 'fs/promises'

const fetchData = async (solYear: string, URL: string, serviceKey: string) => {
  
  try {
    const response = await axios.get(URL, {
      params: {
        serviceKey: serviceKey,
        solYear: solYear,
        numOfRows: 100,
      },
    })

    const holidays = response.data.response.body.items
    const filePath = `src/assets/holidayData/holidays_${solYear}.json`

    await fs.writeFile(filePath, JSON.stringify(holidays, null, 2), 'utf-8')
    // console.log('Status:', response.status)
    // console.log('Headers:', response.headers)
    // console.log('Body:', response.data.response.body.items)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

export default fetchData
