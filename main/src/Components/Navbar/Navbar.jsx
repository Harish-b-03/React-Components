import "./Navbar.css"
function Navbar() {
  return (
    <nav className="navBar">
      <div className="navLogo">
        Logo
      </div>
      <ul className="nav">
        <li className="nav_link">
          <a href="/about" className="nav_link_item">
            About
          </a>
        </li>
        <li className="nav_link">
          <a href="/docs" className="nav_link_item">
            Docs
          </a>
        </li>
        <li className="nav_link">
          <a href="/contact" className="nav_link_item">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar