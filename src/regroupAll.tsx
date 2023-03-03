import { useState } from 'react'
import App from './components_first/App'
import Shop from './components_shop/Shop'
import './index.css'
import { HashRouter, Routes, Route } from "react-router-dom"

export function RegroupAll () {
    
    const [yourCard, setYourCard] = useState([])

    return(
    <HashRouter basename='/eShop'>
    <Routes>
      <Route path="/" element={<App yourCard={yourCard} setYourCard={setYourCard}/>} />
      <Route path="/shop" element={<Shop yourCard={yourCard} setYourCard={setYourCard}/>} />
    </Routes>
  </HashRouter>
    )
}