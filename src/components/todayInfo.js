import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import WeatherIcon from './weatherIcon';

const TodayInfo = props => {
  return (

    <React.Fragment>
      <Typography variant="display1">{props.city}</Typography>
      <Typography variant="subheading">{props.day}, {props.date} - {props.weather}</Typography>
      <Grid container spacing={16}>
        <Grid item xs={6}>
          <Typography variant="display4">{props.temp}&deg;C</Typography>
        </Grid>
        <Grid item xs={6}>
          <WeatherIcon weatherId={props.data.weather} />
        </Grid>
      </Grid>
      <Grid container spacing={16}>
        <Grid item xs={6}>
          <Typography variant="body1">Hi: {props.data.temp_max}&deg;C</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">Lo: {props.data.temp_min}&deg;C</Typography>
        </Grid>
      </Grid>

    </React.Fragment>

  )
}

const styles = theme => ({

})

export default withStyles(styles)(TodayInfo);
