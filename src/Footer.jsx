import './Footer.css'
import insta from "./assets/instagram_icon.png"
import linkedin from "./assets/linkedin_icon.png"

function Footer(){
    return(
        <footer className="footer">
            <div className="flex gap-4 justify-center items-center">
                <a href="https://www.instagram.com/billy_at25/" target="_blank" rel="noopener noreferrer">
                    <img src={insta} alt="Instagram Icon" width="31" height="31" className="hover:opacity-80 transition-opacity cursor-pointer"/>
                </a>
                <a href="https://linkedin.com/in/william-tang-5417262ba" target="_blank" rel="noopener noreferrer"> 
                    <img src={linkedin} alt="LinkedIn Icon" width="35" height="35" className="hover:opacity-80 transition-opacity cursor-pointer"/>
                </a>
            </div>
        </footer>
    )
}

export default Footer