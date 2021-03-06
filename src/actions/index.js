import axios from 'axios';

const API_KEY = "6f3b40c906ff44dca916211c6368a9d6";

// Construct the root URL fot wweather api using template strings
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  // Construct the final URL fot weather api using template strings
  const url = `${ROOT_URL}&q=${city},il`;
  const request = axios.get(url);

  //console.log('Request', request);  // For debug

  return{
    type: FETCH_WEATHER,
    payload: request
  };
}
