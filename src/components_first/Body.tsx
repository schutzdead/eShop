import { useState } from "react"
import "./styles/body.css"
import { textMain } from "./dataBase/mainPage"
import { Link } from 'react-router-dom'

export const Main = () => {

    const [activeFirst, setActiveFirst] = useState(false)

    return(
        <div className="experience">
            <div className="butcherName">
                <span >Boucherie</span>
                <span><u>Tail</u>landier</span>
                <span>Laissez nous vous présenter les meilleures viandes de notre terroir.</span>
            </div>
            
            <div className="slide">
                <FirstCard cardImg={textMain[0].id} name={textMain[0].name} description={textMain[0].description} activeFirst={activeFirst}/>
                <Card cardImg={textMain[1].id} name={textMain[1].name} description={textMain[1].description} setActiveFirst={setActiveFirst} />
                <Card cardImg={textMain[2].id} name={textMain[2].name} description={textMain[2].description} setActiveFirst={setActiveFirst}/>
            </div>
        </div>   
    )
}

const Card = (props:{
            cardImg:string, 
            name:string, 
            description:string,
            setActiveFirst:any }) => {

    const {cardImg, name, description, setActiveFirst} = props
    const [active, setActive] = useState(false)

    const handleMouseOver = () => {
        setActive(true)
        setActiveFirst(true)    
    }
   
    const handleMouseLeave = () => {
        setActive(false)
        setActiveFirst(false) 
    }

    const divStyle = {
        backgroundImage: `url(src/assets/assets_accueil/${cardImg})`,
    };

    return (
        <Link to="/shop" className='linkBody'>
            <div className="forBorder"
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}>
                <div className={active ? "card" :"waitingCard"} style={divStyle}>
                    <div className={active ? "text" : "waitingText"}>
                        <div className="nameImg">{name}</div>
                        <div className="description">{description}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

const FirstCard = (props:{
    cardImg:string, 
    name:string, 
    description:string,
    activeFirst:boolean}) => {

    const {cardImg, name, description, activeFirst} = props

    const divStyle = {
    backgroundImage: `url(src/assets/assets_accueil/${cardImg})`,
    };

    return (
    <Link to="/shop" className='linkBody'>
        <div className="forBorder">
            <div
                className={activeFirst ? "waitingCard" : "card"}
                style={divStyle}
            >
                <div className={activeFirst ? "waitingText" : "text"}>
                    <div className="nameImg">{name}</div>
                    <div className="description">{description}</div>
                </div>
            </div>
        </div>
    </Link>
    )
}