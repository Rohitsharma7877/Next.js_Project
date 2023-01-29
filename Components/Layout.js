import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
import Chat from "./chat"
import Askdoubt from "./askdoubt"

const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
    <Askdoubt/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout