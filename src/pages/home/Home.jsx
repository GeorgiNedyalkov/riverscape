import React from "react"
import "./Home.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import Section from "../../components/section/Section"
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined"
import Footer from "../../components/footer/Footer"

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="home">
        <Header />
        <Section />
        <AparmtentSection />
        <Footer />
      </main>
    </>
  )
}

const AparmtentSection = () => {
  return (
    <div className="as-section">
      <h1 className="as-title">New Riverside Apartments</h1>
      <p className="as-text">
        One, two and three bedroom apartments, all with expansive picture
        windows, panoramic river, park and city views and flexible layouts with
        a choice of balconies, day rooms or enclosed balconies.
      </p>
      <div className="as-button">
        <a href="#apartments">View apartments</a>
        <ArrowDropDownCircleOutlinedIcon className="icon" />
      </div>
    </div>
  )
}

export default Home
