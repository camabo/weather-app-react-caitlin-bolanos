import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Madrid",
    date: "Tuesday, April 4",
    description: "Sunny",
    temperature: "4",
  };

  return (
    <div className="Weather">
      <div className="weather-app shadow">
        <form className="search-form p-3" id="search-form">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                className="form-control"
                placeholder="Search for city . . ."
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                className="form-control btn btn-primary shadow-sm w-100"
              />
            </div>
            <div className="col-3">
              <button className="btn btn-success w-100">
                Current Location
              </button>
            </div>
          </div>
        </form>
        <div className="today-weather">
          <i className="bi bi-cloud-snow today-icon"></i>
          <h1>{weatherData.city}</h1>
          <h2>{weatherData.date}</h2>
          <h3>{weatherData.description}</h3>
          <h3>
            <span className="temperature">{weatherData.temperature}</span>
            <span className="units"></span>
            °C
          </h3>
        </div>
        <hr />
      </div>
    </div>
  );
}
