import "./styles/footer.css"
import { Facebook, Instagram, Linkedin, FooterImg } from "../assets/importAccueil"

export const Footer = () => {

    const divStyle = {
        backgroundImage: `linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0) 60%, rgba(0,0,0,0.8) 100%), url(${FooterImg})`
    };

    return(
    <div className="footer" style={divStyle}>
        <div className="leftSide">
            <div className="rights">Copyright 2023 TAILLANDIER</div>
        </div>
        <div className="rightSide">
                <div className="terms">Terms & Conditions</div>
                <div className="privacy">Privacy Policy</div>
            <div className="icons">
                <img src={Facebook} alt="" className="icon" />
                <img src={Instagram} alt="" className="icon" />
                <img src={Linkedin} alt="" className="icon" />
            </div>
        </div> 
    </div>
    )
}