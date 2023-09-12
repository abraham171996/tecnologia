import LogoSvg from "../../assets/images/Logo.svg" 

const Logo = () => {
  return (
    <figure className="logo">
        <img  src={LogoSvg} alt="Logo" />
    </figure>
  )
}

export default Logo