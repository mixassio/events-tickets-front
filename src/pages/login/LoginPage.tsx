import React  from "react";
import { useHeight } from "../../hooks";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FillHalfScreen from "./FillHalfScreen";
import LoginForm from "../../components/LoginForm";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  description: {
    fontWeight: 300,
    fontSize: "0.9rem"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

export default () => {
  const classes = useStyles();
  const height = useHeight();

  return (
    <Container fixed>
      <Grid container alignItems="center" style={{ height }}>
        <Grid item sm={6}>
          <Typography component="h1" variant="h5">
            Login to our amazing web services
          </Typography>
          <Typography className={classes.description} component="p">
            Once you have logged you can access any of our web-services.
          </Typography>
          <LoginForm />
        </Grid>
        <Grid item sm={6} />
        <FillHalfScreen />
      </Grid>
    </Container>
  );
};
