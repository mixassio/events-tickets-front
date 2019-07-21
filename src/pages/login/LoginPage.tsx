import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LoginForm from '../../components/LoginForm';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  myColor: {
    backgroundColor: theme.palette.secondary.light,
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={6} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h4">
            Login to our amazing web services
          </Typography>
          <Typography component="h3" variant="h6">
            Once you have logged you can access any of our web-services.
          </Typography>
          <LoginForm />
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={6} className={classes.myColor} />
    </Grid>
  );
}