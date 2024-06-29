import { useState, useEffect } from 'react';
import axios from 'axios';
import { WiDaySunny, WiRain, WiSnow, WiCloudy, WiThunderstorm, WiFog } from 'react-icons/wi';
import PropTypes from 'prop-types';

const getWeatherIcon = (weather) => {
  switch (weather) {
    case 'Clear':
      return <WiDaySunny className="text-yellow-500" size={24} />;
    case 'Rain':
      return <WiRain className="text-blue-500" size={24} />;
    case 'Snow':
      return <WiSnow className="text-gray-500" size={24} />;
    case 'Clouds':
      return <WiCloudy className="text-gray-500" size={24} />;
    case 'Thunderstorm':
      return <WiThunderstorm className="text-purple-500" size={24} />;
    case 'Fog':
      return <WiFog className="text-gray-500" size={24} />;
    default:
      return <WiDaySunny className="text-yellow-500" size={24} />;
  }
};

const Forecast = ({ city }) => {
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchForecast = async () => {
      try {
       
        const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
        );
        setForecast(response.data.list.slice(0, 5)); // Get next 5 forecasts (for simplification)
      } catch (error) {
        setError('Failed to fetch forecast.');
      }
      setLoading(false);
    };
    if (city) {
      fetchForecast();
    }
  }, [city]);

  return (
    <div className="mt-4">
      <h3 className="text-xl font-bold mb-2">Hourly Forecast</h3>
      {loading ? (
        <p>Loading forecast...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
          {forecast.map((item, index) => (
            <div 
              key={index} 
              className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center space-y-2 border border-gray-200"
            >
              <p className="text-sm text-gray-600">
                {new Date(item.dt_txt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
              {getWeatherIcon(item.weather[0].main)}
              <p className="text-lg font-bold">{item.main.temp}°C</p>
              <p className="text-gray-600 capitalize">{item.weather[0].description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
Forecast.propTypes = {
  city: PropTypes.string.isRequired
};

export default Forecast;
