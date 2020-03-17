import React from "react"
import MainMenu from './MainMenu'
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <div>
      <MainMenu />
      {children}
    </div>
  )
}


export default Layout
