import './styles/shop.css'
import { Header } from '../components_first/Header'
import { Footer } from '../components_first/footer'
import { Body } from './body'
import { useState } from 'react'

function Shop(props:{yourCard:any, setYourCard:any}) {

  const {yourCard, setYourCard} = props  

  const [actualisation, setActualisation] = useState(false)

    return (
      <div className="container">
          <Header yourCard={yourCard} setYourCard={setYourCard} actualisation={actualisation} setActualisation={setActualisation}/>
          <Body yourCard={yourCard} setYourCard={setYourCard} actualisation={actualisation}/>
          <Footer />
      </div>
    )
  }

  export default Shop