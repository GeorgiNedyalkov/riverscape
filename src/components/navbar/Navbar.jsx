import React from "react"
import MenuIcon from "@mui/icons-material/Menu"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Riverscape</div>
      <div className="nav-links">
        <ul className="nav-links">
          <li className="nav-link">Vision</li>
          <li className="nav-link">Apartments</li>
          <li className="nav-link">Neighborhood</li>
          <li className="nav-link">Amenities</li>
          <li className="nav-link">Location</li>
          <li className="nav-link">News</li>
        </ul>
      </div>
      <div className="nav-menu">
        <a href="#" className="nav-button">
          Register
        </a>
        <MenuIcon />
      </div>
    </div>
  )
}

export default Navbar
