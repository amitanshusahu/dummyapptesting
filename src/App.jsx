import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Container from './Container'
import Home from './pages/Home'
import Place from './pages/Place'
import Go from './pages/Go'
import Search from './pages/Search'
import User from './pages/User'
import Assistance from './pages/Assistance'
import Notifications from './pages/Notification'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Container Content={<Home />}/>} />
          <Route path='/place' element={<Container Content={<Place />}/>} />
          <Route path='/go' element={<Container Content={<Go />}/>} />
          <Route path='/search' element={<Container Content={<Search />}/>} />
          <Route path='/assistance' element={<Container Content={<Assistance />}/>} />
          <Route path='/user' element={<Container Content={<User />}/>} />
          <Route path='/notification' element={<Container Content={<Notifications />}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
