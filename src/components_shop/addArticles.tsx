import { useEffect, useRef, useState } from 'react'
import { articles } from './dataBase/products'
import './styles/addArticles.css'
import { upQuantityToArticles, eraseArticle } from '../components_first/card'

export function RemoveOrAdd (props:{article_number:number,
                                    setYourCard:any, 
                                    yourCard:any,
                                    actualisation:any}) {

    const {article_number, setYourCard, yourCard, actualisation} = props
    
    const onlyArticle = articles[article_number].title;
    const articlesIndex:number = articles.findIndex((element:any) => element.title == onlyArticle);
    const articleQuantity = articles[articlesIndex];

    const [quantity, setQuantity] = useState(articleQuantity.quantity)
    const addButton:any = useRef(null);  
    const noArticleColor:string =  "rgb(173, 222, 201)"
    const articleColor:string =  "rgb(61, 201, 173)"    

    useEffect(() => {
        if(quantity>0) addButton.current.style.backgroundColor = articleColor
        if(quantity === articleQuantity.quantity){ 
            return
        }
        setQuantity(articleQuantity.quantity);        
        if(quantity-1 == 0) addButton.current.style.backgroundColor = noArticleColor;
    }, [actualisation])

    
    function updateColor () {
        if(articleQuantity.quantity>0) return addButton.current.style.backgroundColor = articleColor;
        addButton.current.style.backgroundColor = noArticleColor;
    }

    function addArticle () {
        upQuantityToArticles(1, onlyArticle)
        setQuantity(articleQuantity.quantity)
        updateColor()
        
        const eachArticle:any = { //crée un nouvel article avec cette quantité
            title:articles[article_number].title,
            description:articles[article_number].description,
            price:articles[article_number].price,
            id:articles[article_number].id,
        }
        
        if(articleQuantity.quantity>1) return
        setYourCard(yourCard.concat([eachArticle])) //sinon ça l'ajoute au panier
    }

    function suppArticle () {
        if(yourCard.length === 0) return 
        upQuantityToArticles(-1, onlyArticle)
        setQuantity(articleQuantity.quantity)
        eraseArticle(yourCard, setYourCard, onlyArticle, quantity)
        updateColor()
    }

    return(
        <div className="rightProps" ref={addButton}>
            <div className="forAbsolute">
                <div className="less">-</div>
                <div className="absolLess" onClick={suppArticle}></div>
            </div>
            <div className="number">{quantity}</div>
            <div className="forAbsolute">
                <div className="plus">+</div>
                <div className="absolPlus" onClick={addArticle}></div>
            </div>
        </div>
    )
}