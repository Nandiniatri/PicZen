import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import PicZen from './pages/Piczen'
import PicZenSendondPage from './pages/piczenSecond/PiczenSecondPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<PicZen />} />
        <Route path='/second' element={<PicZenSendondPage />} />
      </Routes>

    </>
  )
}

export default App;
