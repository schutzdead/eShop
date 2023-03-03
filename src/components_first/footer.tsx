import "./styles/footer.css"

export const Footer = () => {

    return(
    <div className="footer">
        <div className="leftSide">
            <div className="rights">Copyright 2023 TAILLANDIER</div>
        </div>
        <div className="rightSide">
                <div className="terms">Terms & Conditions</div>
                <div className="privacy">Privacy Policy</div>
            <div className="icons">
                <img src="/src/components_first/assets/facebook.svg" alt="" className="icon" />
                <img src="/src/components_first/assets/instagram.svg" alt="" className="icon" />
                <img src="/src/components_first/assets/linkedin.svg" alt="" className="icon" />
            </div>
        </div> 
    </div>
    )
}