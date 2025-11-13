import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import PicZen from './pages/Piczen'
import PicZenSendondPage from './pages/piczenSecond/PiczenSecondPage'
import ImageDropFile from './components/imageDrop/ImageDrop'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<PicZen />} />
        <Route path='/second' element={<PicZenSendondPage />} />
        <Route path='/imageDrop' element={<ImageDropFile />} />
      </Routes>

    </>
  )
}

export default App;
