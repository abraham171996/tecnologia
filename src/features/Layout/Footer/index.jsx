import footerLogo from "../../../assets/images/footerLogo.png"

import Linkedin from "../../../assets/images/linkedin.svg"
import Github from "../../../assets/images/github.svg"
import Twitter from "../../../assets/images/twitter.svg"
import Facebook from "../../../assets/images/facebook.svg"
import Youtube from "../../../assets/images/youtube.svg"
import "./footer.css"
const Footer = () => {
  return (
    <footer >
      <div className="container">
        <figure>
          <img src={footerLogo} alt="" />
        </figure>
        <div className="middle">
          <div className="text">
            <div className="elementor-spacer-inner"></div>
            <p>
              Seventh Ave, 20th Floor 
            </p>
            <p>
            New York, NY 10018
            </p>
          </div>
          <div className="text">
            <div className="elementor-spacer-inner"></div>
            <p>
                T: 1-800-356-8933
            </p>
            <p>
               E: office@tecnologia.com
            </p>
          </div>
        </div>
        <div className="media">
        <div className="media-icon">
        <img src={Linkedin} alt="" />
        <p style={{color:"black"}}>LinkedIn</p>
        </div>
        <div className="media-icon">
        <img src={Github} alt="" />
        <p style={{color:"black"}}>Github</p>
        </div>
        <div className="media-icon">
        <img src={Twitter} alt="" />
        <p style={{color:"black"}}>Twitter</p>
        </div>
        <div className="media-icon">
        <img src={Facebook} alt="" />
        <p style={{color:"black"}}>Facebook</p>
        </div>
        <div className="media-icon">
        <img src={Youtube} alt="" />
        <p style={{color:"black"}}>Youtube</p>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer