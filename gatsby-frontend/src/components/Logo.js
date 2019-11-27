import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  logo: {
    padding: "1rem 0",
    [theme.breakpoints.down("md")]: {
      display: "block !important",
      width: "100% !important",
      height: "auto !important",
      marginLeft: "auto !important",
    },
  },
}))

const Logo = () => {
  const classes = useStyles()
  return (
    <StaticQuery
      query={graphql`
        {
          wordpressWpLogo {
            url {
              source_url
            }
          }
        }
      `}
      render={data => (
        <img
          src={data.wordpressWpLogo.url.source_url}
          alt="logo"
          className={classes.logo}
        />
      )}
    />
  )
}

export default Logo
