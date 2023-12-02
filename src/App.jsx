import { useState } from 'react'
import './App.css'
import ShoeList from './Components/Shoe'
import Navbar from './Components/Navbar'
import ShoeCarousel from './Components/ShoeCarousel'
import Data from './Components/Data'
import Discount from './Components/Discount'
import Footer from './Components/Footer'
function App() {
  const shoes=Discount.shoes;

  return (
    <>

    <Navbar/>
    <ShoeCarousel shoes={shoes} />
<ShoeList/>
<Footer/>
    
     </>
  )
}

export default App
