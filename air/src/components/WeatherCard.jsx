// src/components/WeatherCard.jsx
import './WeatherCard.css';

const WeatherCard = ({ data }) => {
  const { name, main, weather } = data;
  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>{main.temp}°C</p>
      <p>{weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;