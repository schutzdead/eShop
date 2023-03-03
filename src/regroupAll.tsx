import { useState } from 'react'
import App from './components_first/App'
import Shop from './components_shop/Shop'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

export function RegroupAll () {
    
    const [yourCard, setYourCard] = useState([])

    return(
    <BrowserRouter basename='/'>
    <Routes>
      <Route path="/" element={<App yourCard={yourCard} setYourCard={setYourCard}/>} />
      <Route path="/shop" element={<Shop yourCard={yourCard} setYourCard={setYourCard}/>} />
    </Routes>
  </BrowserRouter>
    )
}