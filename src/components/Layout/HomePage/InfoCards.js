import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import TimelapseOutlinedIcon from "@material-ui/icons/TimelapseOutlined";
import CastForEducationOutlinedIcon from "@material-ui/icons/CastForEducationOutlined";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

const useStyles = makeStyles(() => ({
  root: { padding: "5% 0" },
  card: {
    maxWidth: 275,
    "&:hover": {
      backgroundColor: "#E0E0E0"
    },
    boxShadow: "none"
  },
  icon: {
    fontSize: "5rem",
    color: "#253a52"
  }
}));

const InfoCards = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={12} lg={4}>
            <Card className={classes.card}>
              <Box
                border={0.5}
                textAlign="center"
                borderColor="grey.300"
                p={1}
                m={2}
              >
                <SchoolOutlinedIcon className={classes.icon} />
                <h3>Qualified Teachers</h3>
                <p>
                  Arabic FootSteps tutor's who know how to help adult's children
                  learn Arabic.
                </p>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Card className={classes.card}>
              <Box
                border={0.5}
                textAlign="center"
                borderColor="grey.300"
                p={1}
                m={2}
              >
                <AccountBalanceWalletOutlinedIcon className={classes.icon} />
                <h3>How much does it cost?</h3>
                <p>
                  £60 payment just once every 12 weeks
                  {" (based upon 1 class per week)"}.
                </p>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Card className={classes.card}>
              <Box
                border={0.5}
                textAlign="center"
                borderColor="grey.300"
                p={1}
                m={2}
              >
                <PeopleAltOutlinedIcon className={classes.icon} />
                <h3>Who we teach?</h3>
                <p>
                  Experienced in teaching Arabic to both english speaking
                  children and Adults.
                </p>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Card className={classes.card}>
              <Box
                border={0.5}
                textAlign="center"
                borderColor="grey.300"
                p={1}
                m={2}
              >
                <TimelapseOutlinedIcon className={classes.icon} />
                <h3>60 minute sessions</h3>
                <p>
                  Student's will learn a lesson per week according to the
                  Madinah University Arabic book's.
                </p>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Card className={classes.card}>
              <Box
                border={0.5}
                textAlign="center"
                borderColor="grey.300"
                p={1}
                m={2}
              >
                <CastForEducationOutlinedIcon className={classes.icon} />
                <h3>Study arabic online</h3>
                <p>
                  We will be now teaching online via Skype and Zoom to make
                  classes available to everyone.
                </p>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Card className={classes.card}>
              <Box
                border={0.5}
                textAlign="center"
                borderColor="grey.300"
                p={1}
                m={2}
              >
                <TrendingUpIcon className={classes.icon} />
                <h3>Progress Level</h3>
                <p>
                  By lesson 5, the student will be taught the skills to form
                  basic sentences {"&"} phrases.
                </p>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default InfoCards;
