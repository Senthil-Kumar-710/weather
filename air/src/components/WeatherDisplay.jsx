// src/components/WeatherDisplay.jsx
import WeatherCard from './WeatherCard';
import './WeatherDisplay.css';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData.length) return <p className="no-data">No data available. Please search for a city.</p>;

  return (
    <div className="weather-display">
      {weatherData.map(data => (
        <WeatherCard key={data.id} data={data} />
      ))}
    </div>
  );
};

export default WeatherDisplay;