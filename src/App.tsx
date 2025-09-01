import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './widgets/header/Header'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import SignUp from './pages/signup/SignUp'
import Slidermain from './shared/slidermain/Slidermain'


function App() {

  return (
    <>
    <Header/>

    <Slidermain/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    </>
      
  )
}

export default App