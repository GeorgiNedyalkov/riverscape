import React from "react"
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined"
import "./Section.css"

const Section = () => {
  return (
    <>
      <section className="section">
        <h3 className="copy-title">
          Surrounded by verdant parks & gardens with panoramic views towards
          Canary Wharf, the City & beyond.
        </h3>
        <p className="copy-text">
          Part of the thriving Royal Wharf neighbourhood with its own high
          street, regular farmers market, primary school, gym and Riverscape
          residents’ only Sky Lounge. Moments from Crossrail & the DLR with
          direct access to the Thames Clippers service from Royal Wharf Pier.
        </p>
        <button className="btn">Watch the film</button>
        <ArrowDropDownCircleOutlinedIcon className="icon" />
      </section>
    </>
  )
}

export default Section
