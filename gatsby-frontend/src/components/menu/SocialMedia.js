import React from "react"

import Box from "@material-ui/core/Box"
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import InstagramIcon from "@material-ui/icons/Instagram"

const SocialMedia = () => {
  return (
    <div>
      <Box display="flex" className="socialMedia">
        <h3>Follow us on social media</h3>
      </Box>

      <Box display="flex" className="socialMedia">
        <FacebookIcon style={{ fontSize: "3rem" }} />
        <TwitterIcon style={{ fontSize: "3rem" }} />
        <InstagramIcon style={{ fontSize: "3rem" }} />
      </Box>
    </div>
  )
}

export default SocialMedia
