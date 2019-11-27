import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"

const useStyles = makeStyles(theme => ({
  root: {
    background: 'url("/img/main.jpeg") no-repeat center center ',
    backgroundSize: "cover",
    padding: "3% 0",
    boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.7)",
    color: "white",
    fontSize: "1.2rem",
    borderBottomLeftRadius: "50% 20%",
    borderBottomRightRadius: "50% 20%",
  },
  img: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "auto",
    },
  },
}))

const Header = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container maxWidth="md" className="header-text">
        <Box textAlign="center">
          <img className={classes.img} src="./img/welcome.png" alt="welcome" />
        </Box>
        <Box textAlign="center" mb={4}>
          <Button size="large" variant="contained">
            <a href="#cards">Discover more</a>
          </Button>
        </Box>
      </Container>
    </div>
  )
}

export default Header
