import React, { Component } from 'react';
import { connect } from 'react-redux'
import CityCard from './containers/cityCard';
import withRoot from './withRoot';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    position: 'absolute',
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
    width: '100%',
  },
  content: {
    maxWidth: 800,
  }
})

class App extends Component {

  renderCities() {
    const { data } = this.props.weather;
    return Object.keys(data).map( c => {
      return (
        <Grid item xs={12} key={data[c].id}>
          <CityCard data={data[c]} />
        </Grid>
      )
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <Grid container spacing={16}>
              {this.renderCities()}
          </Grid>
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  weather: state.weather
})

export default connect(mapStateToProps)(withStyles(styles)(withRoot(App)));
