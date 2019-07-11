import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { selectFlat } from '../actions';

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

class ActiveCity extends Component {
  render () {
    const style = {
      width: "100%"
    };
    let cityName = "";
    let cityAdress = "";
    let cityImage = "";
    if (this.props.selectedCity) {
      cityName = this.props.selectedCity.name;
      cityAdress = this.props.selectedCity.address;
      cityImage = `https://kitt.lewagon.com/placeholder/cities/${this.props.selectedCity.slug}`;
    }

    return (
      <div className="active-city">
        <h1>{cityName}</h1>
        <h2>{cityAdress}</h2>
        <img src={cityImage} style={style} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(ActiveCity);
