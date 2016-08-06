import React, { Component } from 'react';
import { connect } from 'react-redux';


class WeatherList extends Component{
  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    )
  }
}

/*//The following function is identical the function below which is more syntax efficient based on ES6 syntax
function mapStateToProps(state){
  return { weather: state.weather};
}*/

// This is an ES6 syntax efficieny - we can pull directly the weather from within state in the parameter using {weather}. Than since the since the JSON object name is like its value, weather, we can just use return {weather} this is identical to return {weather: weather}
function mapStateToProps({ weather }){
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
