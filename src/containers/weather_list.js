import React, { Component } from 'react';
import { connect } from 'react-redux';
import Charts from '../components/charts';
import GoogleMap from '../components/google_map';



class WeatherList extends Component{
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    // The folowing line is an ES6 Syntax for destructuring - this will poll the properties {lon, lat } under the cityData.city.coord;
    const { lon, lat } = cityData.city.coord;
    /* The following two lines are identical to the above one line which is based on ES6 sytax sugar.
    const lat = cityData.city.coord.lat;
    const lon = cityData.city.coord.lon;*/
    //console.log(temps); // For Debug
    return(
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Charts color="orange" data={temps} height={120} width={180} units="°C" /></td>
        <td><Charts color="green" data={pressures} height={120} width={180} units="hPa" /></td>
        <td><Charts color="blue" data={humidities} height={120} width={180} units="%" /></td>
      </tr>
    );
  }

  render(){
    return(
      <table className="table table-hover table-responsive">
        <thead>
          <tr>
            <th style={{width:'25%'}}>City</th>
            <th style={{width:'25%'}}>Temperature (°C)</th>
            <th style={{width:'25%'}}>Pressure (hPa)</th>
            <th style={{width:'25%'}}>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
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
