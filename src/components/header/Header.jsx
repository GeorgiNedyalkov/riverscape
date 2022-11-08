import React from "react"
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined"
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <h1 className="header-title">Riverscape</h1>
      <hr className="white-line" />
      <p>Just launched</p>
      <h3>ON THE ENDGE OF THAMES</h3>
      <div className="header-icon">
        <ArrowDropDownCircleOutlinedIcon className="icon" />
      </div>
    </div>
  )
}

export default Header
