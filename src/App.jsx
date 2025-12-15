import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import PicZen from './pages/Piczen'
import PicZenSendondPage from './pages/piczenSecond/PiczenSecondPage'
import ImageDropFile from './components/imageDrop/ImageDrop'
import AddText from './pages/edits/AddText'
import AiModal from './pages/edits/addBackground/aiModal/AiModal'
import BackgroundOnly from './FaltuKaCodeJoKrkeDekhRahiHu/BackgroundRemoveNew'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<PicZen />} />
        <Route path='/second' element={<PicZenSendondPage />} />
        <Route path='/imageDrop' element={<ImageDropFile />} />
        <Route path='/aiModal' element={<AiModal />} />
      </Routes>

      {/* <BackgroundOnly /> */}
    </>
  )
}

export default App;
