import './styles/Header.css'
import { Link } from 'react-router-dom'
import { Card } from './card'
import { useEffect, useState } from 'react'
import test from './assets/shoppingBag.svg'
import test2 from './assets/mainIcon.png'



export const Header = (props:{yourCard:any, setYourCard:any, setActualisation:any, actualisation:any}) => {

    const {yourCard, setYourCard, setActualisation, actualisation} = props

    const [cardDisplay, setCardDisplay] = useState(false)
    const [articleNumber, setArticleNumber] = useState(0)

    function turnOnOff () {
        setCardDisplay(true)
    }

    useEffect(() => {
        setArticleNumber(yourCard.length)
    }, [yourCard])

    return (
        <div className="header">
            <Link to="/">
            <div className="logoHeader">
                <img src={test2} alt="" />
            </div>
            </Link>
            <div className="navBar">
                <Link to="/" className='link'>
                    <div className="accueil">Accueil</div>
                </Link>
                <Link to="/shop" className='link'>
                    <div className="boutique">Boutique</div>
                </Link>
                <div className="shoppingBag">
                    <img src={test} alt="" onClick={()=>{turnOnOff();HTMLScroll()}}/>
                    <img className='leftArrow' src="src/assets/assets_accueil/left.svg" alt="" />
                    <div className="count">{articleNumber}</div>
                </div>
            </div>
            <Card OnOrOff={cardDisplay} 
                  setCardDisplay={setCardDisplay} 
                  yourCard={yourCard} 
                  setYourCard={setYourCard} 
                  setActualisation={setActualisation} 
                  actualisation={actualisation}/>
        </div>
        
    )
}

export function HTMLScroll () {
    const html:any = document.querySelector('html');
    if (html.style.overflow == 'hidden') return html.style.overflow = 'auto'
    html.style.overflow = 'hidden'
}