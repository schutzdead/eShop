import './styles/shop.css'
import { articles } from './dataBase/products'
import { useEffect, useState } from 'react';
import { categoriesData } from './dataBase/categories';
import { RemoveOrAdd } from './addArticles';

export function Body(props:{yourCard:any, setYourCard:any, actualisation:any}) {

    const {yourCard, setYourCard, actualisation} = props;

    const allCategories = categoriesData; 
    const [articleData,setArticleData] = useState(articles)
    const [currentCategory, setCurrentCategory] = useState("Tous les produits")

    return (
      <div className="containerArticles">
        <div className="categories">
            <div className="titleCategories">Catégories </div>
            {allCategories.map((element:any) => {  
                return(
                    <div className="forTheKeyBis" key={element.id}>
                        <Category name={element.category} text={element.text} setArticleData={setArticleData} setCurrentCategory={setCurrentCategory}/>
                    </div>
                )
            })}   
        </div>

        <div className="globalArticles"> 
            <div className="titleArticles">{currentCategory}</div>
            <div className="articles">
                {articleData.map((element:any) => {
                    return(
                    <div className="forTheKey" key={element.id}>
                        <Article article_number={element.id-358} setYourCard={setYourCard} yourCard={yourCard} actualisation={actualisation}/>
                    </div>
                    )
                })}
            </div>
        </div>
      </div>
    )
  }


function Category(props:{name:string, text:string, setArticleData:any, setCurrentCategory:any}){
    const {name, text, setArticleData, setCurrentCategory} = props

    useEffect(() =>{
        const firstOne = document.querySelector(`.allImg`) as HTMLImageElement
        firstOne.src = "src/assets/assets_shop/select.svg"

        return()=>{
            firstOne.src = ""
        }
    }, [])

    function dataChange (categoryNum:string) {
        setArticleData(articles.filter(e => e.category_id == categoryNum))
    }

    function resetColor () {
        const arrayOfImg = Array.from(document.querySelectorAll(".toContain>img")) as HTMLImageElement[];
        arrayOfImg.forEach(element => {
            element.src = ""
        });
    }

    function changeTitle (element:any) {
        const stockName = element.target.textContent;
        setCurrentCategory(stockName)
    }

    function addStyleToCategory (element:any) {
        const stockName = element.target.className;
        const currentImg:any = document.querySelector(`.${stockName}Img`)        
        currentImg.src = "src/assets/assets_shop/select.svg"
    }

    function whichCategory (e:any) {
        switch(e.target.className){
            case "all": setArticleData(articles)
                        addStyleToCategory(e)
                        break;
            case "beef": dataChange("52")
                         addStyleToCategory(e)
                         break;
            case "chicken": dataChange("53")
                            addStyleToCategory(e)
                            break;
            case "calf": dataChange("54")
                         addStyleToCategory(e)
                         break;
            case "lamb": dataChange("55")
                         addStyleToCategory(e)
                         break;
            case "pork": dataChange("56")
                         addStyleToCategory(e)
                         break;
            case "takeAway": dataChange("57")
                             addStyleToCategory(e)
                             break;
        }
    }

    return (<div className="toContain">
                <img className={`${name}Img`} src=""/>
                <div
                    className={name}
                    onClick={(e) => {
                        resetColor();
                        whichCategory(e);
                        changeTitle(e);
                    }}>
                    {text}
                </div>
            </div>
            )

}

function Article(props:{article_number:number, setYourCard:any, yourCard:any, actualisation:any}) {

    const {article_number, setYourCard, yourCard, actualisation} = props 
    const img_number = `src/assets/assets_shop/productsWebpResize/${article_number+358}.webp`

    return (
        <div className="eachCard">
            <img src={img_number} alt="" />
            <div className="descriptionArt">
                <div className="name">{articles[article_number].title}</div>
                <div className="bottomProps">
                    <div className="leftProps">
                        <div className="price">{articles[article_number].price} €</div>
                    </div>
                    <RemoveOrAdd 
                        article_number={article_number}
                        setYourCard={setYourCard}
                        yourCard={yourCard}
                        actualisation={actualisation}
                        />
                </div>
                <div className="productDescription">
                    <div className="quantity">{articles[article_number].description}</div>
                    <div className="kilo_price">{articles[article_number].kilo_price}</div>
                </div>
            </div>
        </div>
    )
}