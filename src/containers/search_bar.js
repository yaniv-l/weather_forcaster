import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = { term: '' };
    // Since onInputChange is a callback that uses this inside, than we must bind its context into the app this context.
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    //console.log(event.target.value);  // For debug
    this.setState({term : event.target.value});
  }

  onFormSubmit(event) {
    // In order to prevent the form to submit and post whenever the user click enter while inside of a form input or presses the submit button.
    event.preventDefault();

    // Go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({term : ''});
  }

  render(){
    return(
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          className="form-control"
          placeholder="Get a 5 days forcast in your favorite cities"
          //<!-- Since we use a callback that uses this inside, than we must bind its context in the constructor -->
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
