import { Link } from "react-router-dom"

//Reusable button component
const Button = (link, children) => {
  return (
    <Link to={link}><button className="button">{children}</button></Link>
  )
}

export default Button