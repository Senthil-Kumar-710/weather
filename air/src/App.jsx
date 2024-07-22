// src/App.jsx
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import { fetchWeather } from './api';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [initialData, setInitialData] = useState([]);
  const topCities = [
    'New York', 'London', 'Paris', 'Tokyo', 'Sydney', 'Mumbai', 
    'Berlin', 'Moscow', 'Beijing', 'São Paulo', 'Cairo', 
    'Los Angeles', 'Mexico City', 'Buenos Aires', 'Rome', 'Madrid', 
    'Toronto', 'Dubai', 'Istanbul', 'Seoul', 'Jakarta', 'Delhi', 
    'Lagos', 'Rio de Janeiro', 'Johannesburg', 'Chicago', 'Hong Kong', 
    'Singapore', 'Kuala Lumpur', 'Tehran', 'Baghdad', 
    'Santiago', 'Riyadh', 'Caracas', 'Lima', 'Manila', 'Karachi'
  ];

  useEffect(() => {
    const fetchTopCitiesWeather = async () => {
      try {
        const promises = topCities.map(city => fetchWeather(city));
        const responses = await Promise.all(promises);
        const data = responses.map(response => response.data);
        setWeatherData(data);
        setInitialData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchTopCitiesWeather();
  }, []);

  const handleSearch = async (city) => {
    try {
      const response = await fetchWeather(city);
      setWeatherData([response.data]); // Clear the previous data and set the new search result
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData([]);
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      <WeatherDisplay weatherData={weatherData.length ? weatherData : initialData} />
    </div>
  );
};

export default App;