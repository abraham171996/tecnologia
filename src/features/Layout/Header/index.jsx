import Button from "../../../atoms/Button"
import Lists from "../../../component/Lists"
import Logo from "../../../component/Logo"
import "./header.css"

const Header = () => {
  return (
    <header>
      <div className="container">
        <Logo/>
        <Lists/>
       <div className="header-right">
        <div className="content">
          <a href="#">Client Support</a>
          <span>1-800-356-8933</span>
        </div>
       <Button>Contact Us</Button>
       </div>
      </div>
    </header>
  )
}

export default Header