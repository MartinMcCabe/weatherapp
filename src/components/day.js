import React, { Component } from 'react';
import WeatherIcon from './weatherIcon';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import classnames from 'classnames'

const styles = theme => ({
  day: {
    height: 45,
    display: 'flex',
  },
  icon: {
    transform: 'scale(0.3)',
    transformOrigin: 'top left',
    position: 'absolute',
    opacity: 0,
    transition: 'all 0.1s',
  },
  temps:{
    margin: '0 0 0 65px',
  },
  show:{
    opacity: 1,
    transition: 'all 0.8s',
  },
})

// const Day = props => {
  class Day extends Component{

    state = {
      show: false
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({show: true})
      }, 200);
    }

    componentDidUpdate(pp) {
        if(pp.show !== this.props.show) {
          this.setState({show: false})
        }
    }

    render(){

    const { classes } = this.props;
    return (
      <div className={classes.day}>

        <Grid container spacing={0} alignItems={'center'}>
          <Grid item xs={9}>
            <Typography variant="subheading">{this.props.day}</Typography>
          </Grid>
          <Grid item xs={3}>
            <div className={classnames(classes.icon, {[classes.show]:this.state.show})} >
                <WeatherIcon show={this.state.show} weatherId={this.props.data.weather} />
            </div>
            <div className={classes.temps}>
              <Typography variant="subheading">{this.props.data.temp_max}&deg;/{this.props.data.temp_min}&deg;</Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }

}

export default withStyles(styles)(Day);
