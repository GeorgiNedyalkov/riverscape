import React from "react"
import "./Home.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import Section from "../../components/section/Section"

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="home">
        <Header />
        <Section />
      </main>
    </>
  )
}

export default Home
