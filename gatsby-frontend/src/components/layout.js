import React from "react"
import MainMenu from "./menu/MainMenu"
import FooterMenu from "./menu/FooterMenu"
import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
`

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <MainMenu />
    {children}
    <FooterMenu />
  </div>
)

export default Layout
