import React from "react"
import { ArrowDropDownCircleOutlinedIcon } from "@mui/icons-material"

const Hero = ({ title, image }) => {
  return (
    <>
      <section className="hero">
        <h1 className="title">{title}</h1>
        <img src={image} alt={title} />
        <button>
          <a href="/">
            <ArrowDropDownCircleOutlinedIcon className="icon" />
          </a>
        </button>
      </section>
    </>
  )
}

export default Hero
