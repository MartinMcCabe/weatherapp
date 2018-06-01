import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Day from '../components/day';

class City extends Component {

  renderDays() {
    const { current_day } = this.props.weather;
    const { data: {list} } = this.props;
    return Object.keys(list).map( (day, i) => {
      return <Day data={list[day]} key={i} isActive={current_day === i}/>
    })
  }

  render(){

    return (
      <div>
        {this.renderDays()}
      </div>
    )
  }
}

City.propTypes = {
  data: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  weather: state.weather
})
export default connect(mapStateToProps)(City);
