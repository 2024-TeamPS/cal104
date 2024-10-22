import ErrorPage from './error-page'
import CalendarPage from './pages/CalendarPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/calendar',
    element: <CalendarPage />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
