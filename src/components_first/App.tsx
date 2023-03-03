import './styles/App.css'
import { Header } from './Header'
import { Main } from './Body'
import { Footer } from './footer'

function App(props:{yourCard:any, setYourCard:any}) {

  const {yourCard, setYourCard} = props

  return (
    <div className="container">
        <Header yourCard={yourCard} setYourCard={setYourCard} actualisation={""} setActualisation={""}/>
        <Main />
        <Footer />
    </div>
  )
}

export default App
