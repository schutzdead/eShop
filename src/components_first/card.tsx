import { useState, useEffect } from 'react'
import './styles/card.css'
import { articles } from '../components_shop/dataBase/products';
import { HTMLScroll } from './Header';

export function Card (props:{OnOrOff:boolean, setCardDisplay:any, yourCard:any, setYourCard:any, setActualisation:any, actualisation:any}) {

    const {OnOrOff, setCardDisplay, yourCard, setYourCard, setActualisation, actualisation} = props

    const [checkOut, setCheckOut] = useState(false)
    const [total, setTotal] = useState(0)
    
    useEffect(()=> {
        if(yourCard.length==0) return setCheckOut(false)
        setCheckOut(true)
    }, [yourCard])

    useEffect(() =>{
        subTotal ()
    },[actualisation, OnOrOff])

    const turnOff = () => {
        setCardDisplay(false)
    }

    const newdivStyle = {
        fontSize:"30px",
        fontWeight:"500"
    }

    if(OnOrOff == false) return null

    function randomFuckingKey () {
        return Math.random()*1000
    }

    function subTotal () {
        const divTotal = document.querySelectorAll(".priceBag");
        let totalFirst:number = 0
        divTotal.forEach((element:any) => {
            let test = parseFloat(element.textContent.slice(0,element.textContent.length-2))
            totalFirst += test
        });
        totalFirst = Math.round(totalFirst * 100) / 100
        setTotal(totalFirst)
    }

    return (
        <div className="containerCard">
            <div className='mainContainer'>
                <div className="crossDiv"><img src="src/assets/assets_accueil/close.svg" alt="" className="cross" onClick={()=>{turnOff();HTMLScroll()}}/></div>
                <div className="titleCard"><span style={newdivStyle}>Votre</span> Panier</div>
                <div className={checkOut ? "center" : "noCenter"}>
                    {yourCard.map((element:any)=>{
                        return(
                            <div className="forTheKeyCard" key={randomFuckingKey()}>
                                <EachArticleOnCard
                                    idForPicture = {element.id}
                                    titleCard={element.title}
                                    descriptionCard={element.description}
                                    priceCard = {element.price}
                                    setYourCard = {setYourCard}
                                    yourCard={yourCard}
                                    setActualisation={setActualisation}
                                    actualisation={actualisation}
                                />
                            </div>
                        )
                    })}
                </div>
                <div className="buttonDiv">
                    <button className={checkOut ? "checkOut" : "noCheckOut"}>
                        {checkOut ? `Passer au paiement (${total} €)` : "Aucun article dans votre panier"}
                    </button>
                </div>
            </div>
            <div className='sail' onClick={()=>{turnOff();HTMLScroll()}} ></div>
        </div>
    )
}

function EachArticleOnCard (props:{actualisation:any, 
                                   setActualisation:any, 
                                   idForPicture:number, 
                                   titleCard:string, 
                                   descriptionCard:string, 
                                   priceCard:number, 
                                   setYourCard:any, 
                                   yourCard:any}) {

    const {idForPicture, titleCard, descriptionCard, priceCard, setYourCard, yourCard, setActualisation, actualisation} = props
    
    const imgCard = `src/assets/assets_shop/productsWebpResize/${idForPicture}.webp`
    const articlesIndex:number = articles.findIndex((element:any) => element.title == titleCard);
    const articleQuantity = articles[articlesIndex];

    const [quantityForMove, setquantityForMove] = useState(articleQuantity.quantity)

    function upQuantity () {
        upQuantityToArticles(1, titleCard)
        setquantityForMove(articleQuantity.quantity)
        setActualisation(!actualisation)
    }

    function lessQuantity () {
        eraseArticle(yourCard, setYourCard, titleCard, quantityForMove)
        upQuantityToArticles(-1, titleCard)
        setquantityForMove(articleQuantity.quantity)
        setActualisation(!actualisation)
    }

    return(
        <div className="bag">
            <img src={imgCard} alt="" className="pictureBag" />
            <div className="principalBag">
                <div className="titleBag">{titleCard}</div>
                <div className="descriptionBag">{descriptionCard}</div>
                <div className="quantityItem">
                    <div className="forAbsolute">
                        <div className="less">-</div>
                        <div className="absolLess" onClick={lessQuantity}></div>
                    </div>
                    <div className="number">{quantityForMove}</div>
                    <div className="forAbsolute">
                        <div className="plus" >+</div>
                        <div className="absolPlus" onClick={upQuantity}></div>
                    </div>
                </div>
            </div>
            <div className="priceBag">{Math.round((priceCard*quantityForMove) * 100) / 100} €</div>
        </div>
    )
}

export function upQuantityToArticles (sign:number, currentTitle:string) {
    const articlesIndex:number = articles.findIndex((element:any) => element.title == currentTitle);
    const articleQuantity = articles[articlesIndex];
    if(sign==-1 && articleQuantity.quantity==0) return
    articleQuantity.quantity += sign
}

export function eraseArticle (yourCard:any, setYourCard:any, title:string, quantity:number) {
    const articleIndex = yourCard.findIndex((element:any) => element.title == title);
    if(quantity-1 == 0) {
        const sliceBefore = yourCard.slice(0, articleIndex);
        const sliceAfter = yourCard.slice(articleIndex+1, yourCard.lenght)
        setYourCard(sliceBefore.concat(sliceAfter))
    }
}