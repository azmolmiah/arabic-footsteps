import React from "react";
import { Link } from "react-router-dom";

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

  const cards = [
    {
      icon: <SchoolOutlinedIcon className={classes.icon} />,
      header: "Qualified Teachers",
      text:
        "Arabic FootSteps tutor's who know how to help adult's children learn Arabic.",
      link: "teachers"
    },
    {
      icon: <AccountBalanceWalletOutlinedIcon className={classes.icon} />,
      header: "How much does it cost?",
      text:
        "£60 payment just once every 12 weeks (based upon 1 class per week).",
      link: "pricing"
    },
    {
      icon: <PeopleAltOutlinedIcon className={classes.icon} />,
      header: "Who we teach?",
      text:
        "Experienced in teaching Arabic to both english speaking children and Adults.",
      link: "whoweteach"
    },
    {
      icon: <TimelapseOutlinedIcon className={classes.icon} />,
      header: "60 minute sessions",
      text:
        "Student's will learn a lesson per week according to the Madinah University Arabic book's.",
      link: "sessions"
    },
    {
      icon: <CastForEducationOutlinedIcon className={classes.icon} />,
      header: "Study arabic online",
      text:
        "We will be now teaching online via Skype and Zoom to make classes available to everyone.",
      link: "studyonline"
    },
    {
      icon: <TrendingUpIcon className={classes.icon} />,
      header: "Progress Level",
      text:
        "By lesson 5, the student will be taught the skills to form basic sentences & phrases.",
      link: "progress"
    }
  ];

  return (
    <div id="cards" className={classes.root}>
      <Container maxWidth="md">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          {cards.map((card, index) => {
            return (
              <Grid item lg={4} key={index}>
                <Card className={classes.card}>
                  <Box
                    border={0.5}
                    textAlign="center"
                    borderColor="grey.300"
                    m={2}
                  >
                    <Link to={`/${card.link}`}>
                      {card.icon}
                      <h3>{card.header}</h3>
                      <p>{card.text}</p>
                    </Link>
                  </Box>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default InfoCards;
