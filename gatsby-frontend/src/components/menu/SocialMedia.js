import React from "react"

import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/core/styles"
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import InstagramIcon from "@material-ui/icons/Instagram"

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
  icon: {
    fontSize: "3rem",
  },
}))

const SocialMedia = () => {
  const classes = useStyles()
  return (
    <div>
      <Box display="flex" className={classes.root}>
        <h3>Follow us on social media</h3>
      </Box>

      <Box display="flex" className={classes.root}>
        <FacebookIcon className={classes.icon} />
        <TwitterIcon className={classes.icon} />
        <InstagramIcon className={classes.icon} />
      </Box>
    </div>
  )
}

export default SocialMedia
