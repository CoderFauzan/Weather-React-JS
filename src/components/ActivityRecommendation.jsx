import PropTypes from 'prop-types';

const ActivityRecommendation = ({ weather, temp }) => {
  
  const getActivityDetails = (weather, temp) => {
    let details = { message: '', bgColor: '' };

    switch (weather) {
      case 'Clear':
        details.message = "It's a great day for outdoor activities like hiking or a picnic.";
        details.bgColor = 'bg-green-300';
        break;
      case 'Rain':
        details.message = "Consider indoor activities like visiting a museum or reading a book.";
        details.bgColor = 'bg-blue-200';
        break;
      case 'Snow':
        details.message = "Perfect weather for building a snowman or enjoying a warm drink by the fire.";
        details.bgColor = 'bg-white';
        break;
      case 'Clouds':
        details.message = "A good day for a walk or exploring the city.";
        details.bgColor = 'bg-gray-300';
        break;
      case 'Thunderstorm':
        details.message = "Stay safe indoors and maybe catch up on your favorite shows.";
        details.bgColor = 'bg-yellow-300';
        break;
      case 'Fog':
        details.message = "Drive safely if you need to travel and take it easy.";
        details.bgColor = 'bg-gray-400';
        break;
      default:
        details.message = "Enjoy your day!";
        details.bgColor = 'bg-gray-200';
    }

    
    if (temp >= 40) {
      details.message = "It's really hot outside. Stay hydrated and consider staying indoors.";
      details.bgColor = 'bg-red-300';
    }

    return details;
  };

  const { message, bgColor } = getActivityDetails(weather, temp);

  return (
    <div className={`mt-4 p-4 rounded-lg shadow-md ${bgColor}`}>
      <h3 className="text-lg font-bold">Activity Recommendation</h3>
      <p>{message}</p>
    </div>
  );
};
ActivityRecommendation.propTypes = {
  weather: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired
};
export default ActivityRecommendation;
