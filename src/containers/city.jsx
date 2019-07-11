import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity: selectCity },
    dispatch
  );
}

class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.city);
  }

  render () {
    const style = {
      listStyleType: "none"
    };
    return (
      <div>
        <ul className="list-group-item">
          <li style={style}>
            <div onClick={this.handleClick}>
              {this.props.city.name}
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(City);
