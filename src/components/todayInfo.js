import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import WeatherIcon from './weatherIcon';
import blueGrey from '@material-ui/core/colors/blueGrey'

const TodayInfo = props => {
  const { classes } = props;
  return (

    <React.Fragment>
      <Typography variant="display1">{props.city}</Typography>
      <Typography variant="subheading">{props.day}, {props.date} - {props.weather}</Typography>
      <Grid container spacing={16}>
        <Grid item xs={6}>
          <Typography variant="display4" className={classes.tempDisplay}>{props.temp}&deg;C</Typography>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.weatherIconHolder}>
            <WeatherIcon weatherId={props.data.weather} />
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={16}>
        <Grid item xs={6}>
          <Typography variant="subheading" className={classes.hilo}>Hi: {props.data.temp_max}&deg;C</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subheading" className={classes.hilo}>Lo: {props.data.temp_min}&deg;C</Typography>
        </Grid>
      </Grid>

    </React.Fragment>

  )
}

const styles = theme => ({
 hilo: {
   fontSize: '2em',
   color: blueGrey[400],
 },
  tempDisplay: {
    fontSize: '5em',
    transition: 'all 0.4s',
    [theme.breakpoints.up('sm')]: {
      fontSize: '7em',
    }
  },
  weatherIconHolder: {
    transition: 'all 0.4s',
    transform: 'scale(0.6)',
    [theme.breakpoints.up('sm')]: {
      transform: 'scale(1)',
    }
  }
})

export default withStyles(styles)(TodayInfo);
