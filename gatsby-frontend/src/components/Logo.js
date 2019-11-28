import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Logo = () => {
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
          className="logo"
          style={{ padding: "1rem 0" }}
        />
      )}
    />
  )
}

export default Logo
