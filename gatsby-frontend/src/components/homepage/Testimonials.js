import React from "react"
import { Link } from "gatsby"

import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Icon from "@material-ui/core/Icon"
import Button from "@material-ui/core/Button"

const Testimonials = () => {
  return (
    <div
      style={{ backgroundColor: "#e0e0e0", fontSize: "2rem", padding: "3rem" }}
    >
      <Container maxWidth="sm">
        <Grid container justify="center" alignItems="center">
          <Box>
            <Icon style={{ fontSize: "5rem", color: "#253a52" }}>
              format_quote
            </Icon>
          </Box>
          <Box textAlign="center" style={{ marginBottom: "1.5rem" }}>
            Since going to ArabicFootSteps, I now have the confidence to read
            and speak the Arabic language.
          </Box>
          <Box>
            <Link to="/testimonials">
              <Button variant="outlined" color="primary">
                read more
              </Button>
            </Link>
          </Box>
        </Grid>
      </Container>
    </div>
  )
}

export default Testimonials
