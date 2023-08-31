import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AgricPage from './Pages/General/AgricPage'
import Medical from './Pages/General/Medical'
import Travel from './Pages/General/Travel'
import Education from './Pages/General/Education'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AgricPage />} />
        <Route path='/medical' element={<Medical />} />
        <Route path='/travel' element={<Travel />} />
        <Route path='/education' element={<Education />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
