import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import TodayInfo from '../components/todayInfo';
import Day from '../components/day';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse/Collapse';
import classnames from 'classnames';
import Grow from '@material-ui/core/Grow/Grow';


const styles = theme => ({
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
})

class CityCard extends Component {

  state = {
    showDays: false
  }

  getDayFromDate(milliseconds) {
    const dayLookup = {
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednessday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday',
      0: 'Sunday',
    }
    const date = new Date(milliseconds);
    return dayLookup[date.getDay()]
  }

  getDateFromMS(milliseconds) {
    const date = new Date(milliseconds);
    const monthsLookup = {0:'Jan', 1: 'Feb', 2: 'Mar', 3: 'Apr', 4: 'May', 5: 'Jun', 6: 'Jul', 7:'Aug', 8: 'Sep', 9: 'Oct', 10: 'Nov', 11: 'Dec'};
    return `${date.getDate()} ${monthsLookup[date.getMonth()]}`
  }

  getWeatherDescription(id) {
    const { weather_ids } = this.props.weather;
    return weather_ids[id].name;
  }

  renderDays() {
    const { data } = this.props;

    return Object.keys(data.list).map( (day, i) => {
      if(i > 0){
        return <Day day={this.getDayFromDate(data.list[day].date)} data={data.list[day]} show={this.state.showDays} key={i}/>
      }else{
        return null;
      }
    })
  }

  toggleDays = () => {
    this.setState({ showDays: !this.state.showDays });
  }

  render() {
    const { classes, data } = this.props;

    return (
      <Grow in={true}>
        <Card className={classes.card}>
          <CardContent>
            <TodayInfo day={this.getDayFromDate(data.list[0].date)} date={this.getDateFromMS(data.list[0].date)} city={data.name} temp={data.list[0].temp} weather={this.getWeatherDescription(data.list[0].weather)} data={data.list[0]}/>
          </CardContent>
          <CardActions>
            <IconButton
              className={classnames(classes.expand, {[classes.expandOpen]: this.state.showDays})}
              onClick={this.toggleDays}
              aria-expanded={this.state.showDays}
              aria-label="Show days"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.showDays} timeout="auto" unmountOnExit>
            <CardContent>
              {this.renderDays()}
            </CardContent>
          </Collapse>
        </Card>
      </Grow>
    )
  }
}

const mapStateToProps = state => ({
  weather: state.weather
})


export default connect(mapStateToProps)(withStyles(styles)(CityCard));
