import { useState } from 'react'
import App from './components_first/App'
import Shop from './components_shop/Shop'
import './index.css'
import { Routes, Route } from "react-router-dom"

export function RegroupAll () {
    
    const [yourCard, setYourCard] = useState([])

    return(
    <Routes>
      <Route path="/" element={<App yourCard={yourCard} setYourCard={setYourCard}/>} />
      <Route path="/shop" element={<Shop yourCard={yourCard} setYourCard={setYourCard}/>} />
    </Routes>
    )
}