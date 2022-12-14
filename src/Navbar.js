import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">about</Link>
        </li>
        <li>
            <Link to="/work">work</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
