import { Link } from "react-router-dom"
import AboutPage from "../pages/AboutPage"

const Button = (children) => {
  return (
    <Link to="/about"><button className="button">{children}</button></Link>
  )
}

export default Button