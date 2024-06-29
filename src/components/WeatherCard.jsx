
import { WiDaySunny, WiRain, WiSnow, WiCloudy, WiThunderstorm, WiFog } from 'react-icons/wi';
import PropTypes from 'prop-types';

const getWeatherIcon = (weather) => {
  switch (weather) {
    case 'Clear':
      return <WiDaySunny className="text-yellow-500" size={48} />;
    case 'Rain':
      return <WiRain className="text-blue-500" size={48} />;
    case 'Snow':
      return <WiSnow className="text-gray-500" size={48} />;
    case 'Clouds':
      return <WiCloudy className="text-gray-500" size={48} />;
    case 'Thunderstorm':
      return <WiThunderstorm className="text-purple-500" size={48} />;
    case 'Fog':
      return <WiFog className="text-gray-500" size={48} />;
    default:
      return <WiDaySunny className="text-yellow-500" size={48} />;
  }
};

const WeatherCard = ({ data }) => {
  const { name, main, weather } = data;
  const icon = getWeatherIcon(weather[0].main);

  return (
    <div className="flex flex-col items-center bg-blue-100 p-4 rounded-lg shadow-md w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <h2 className="text-3xl font-bold">{name}</h2>
      {icon}
      <p className="text-xl">{weather[0].description}</p>
      <p className="text-4xl font-bold">{main.temp}°C</p>
      <div className="flex justify-between w-full mt-2">
        <p>Humidity: {main.humidity}%</p>
        <p>Wind: {data.wind.speed} m/s</p>
      </div>
    </div>
  );
};
WeatherCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired
    }).isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        main: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
      })
    ).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
};
export default WeatherCard;
