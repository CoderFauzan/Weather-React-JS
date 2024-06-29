import  { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import WeatherCard from './WeatherCard';
import Forecast from './Forecast';
import ActivityRecommendation from './ActivityRecommendation';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async (city) => {
    setLoading(true);
    setError('');
    try {
     
      const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
      console.log(response.data);
    } catch (error) {
      setError('City not found. Please try again.');
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (city) {
      fetchWeather(city);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
      <Header 
        city={city} 
        setCity={setCity} 
        handleSearch={handleSearch} 
      />
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        weatherData && (
          <>
            <WeatherCard data={weatherData} />
            <Forecast city={city} />
            <ActivityRecommendation weather={weatherData.weather[0].main} temp={weatherData.main.temp} />
          </>
        )
      )}
    </div>
  );
};

export default WeatherApp;
