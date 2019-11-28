import React from "react"
import MainMenu from "./menu/MainMenu"
import FooterMenu from "./menu/FooterMenu"
import { createGlobalStyle } from "styled-components"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap');
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
  .featureCards {
    box-shadow: "none !important";
  }
  .featureCards:hover {
    background-color: "#E0E0E0 !important";
  }
  @media only screen and (max-width: 400px) {
    .navMob {
      flex-wrap: wrap !important;
    }
    .socialMedia {
      justify-content: center !important;
    }
    .logo {
      display: "block !important";
      width: "70% !important";
      height: "auto !important";
      margin-left: "auto !important";
    }
  }
  @media only screen and (min-width: 400px) {
    .headerLogo {
      width: "50% !important";
      height: "auto";
    }
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      {
        wordpressWpFavicon {
          url {
            source_url
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <link
            rel="icon"
            href={data.wordpressWpFavicon.url.source_url}
            type="image/x-icon"
          />
        </Helmet>
        <GlobalStyles />
        <MainMenu />
        {children}
        <FooterMenu />
      </div>
    )}
  />
)

export default Layout
