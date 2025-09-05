import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './widgets/header/Header'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import SignUp from './pages/signup/SignUp'
import Slidermain from './shared/slidermain/Slidermain'
import iphone14 from './images/iphone14.jpg'
import iphone14_2 from './images/ipone14_2.png'
import iphone14_3 from './images/iphone14_3.png'


function App() {

  return (
    <>
    <Header/>

    <Slidermain images={[iphone14, iphone14_2, iphone14_3]}
      width="60%"
      imageWidth={600}
      imgClassName="slide-rounded"/>
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