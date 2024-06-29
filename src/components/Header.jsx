import PropTypes from "prop-types";

const Header = ({ city, setCity, handleSearch }) => {
  return (
    <header className="flex flex-col items-center mb-4 sm:flex-row sm:justify-between">
      <h1 className="text-2xl font-bold mb-2 sm:mb-0">Skye🌦️</h1>
      <form onSubmit={handleSearch} className="flex w-full sm:w-auto">
        <input
          type="text"
          className="p-2 rounded-l-lg border border-gray-300 flex-grow sm:flex-grow-0"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-r-lg"
        >
          Search
        </button>
      </form>
    </header>
  );
};
Header.propTypes = {
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
export default Header;
