import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import City from './containers/city';

class App extends Component {

  renderCities() {
    const { data } = this.props.weather;
    return Object.keys(data).map( c => {
      return <City data={data[c]} key={data[c].id} />
    })
  }

  render() {
    return (
      <div className="App">
        <div className="content">
          {this.renderCities()}
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  weather: state.weather
})

export default connect(mapStateToProps)(App);
