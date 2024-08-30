import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Container from './Container'
import Home from './pages/Home'
import Place from './pages/Place'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Container Content={<Home />}/>} />
          <Route path='/place' element={<Container Content={<Place />}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
