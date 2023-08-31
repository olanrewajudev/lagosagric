import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AgricPage from './Pages/General/AgricPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AgricPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
