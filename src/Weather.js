import "./Weather.css";
import "./index.css";

export default function Weather() {
  let weatherData = {
    city: "Edmonton",
    date: "Tuesday, April, 18",
    description: "Partly sunny",
    temperature: "13",
  };

  return (
    <div className="Weather">
      <div className="weather-app shadow mb-3">
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
          <span className="material-symbols-outlined">partly_cloudy_day</span>
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
        <div className="week-weather">
          <div className="row">
            <div className="col-sm-2">
              <div className="forecast-day">
                <h5>Wed</h5>
              </div>
              <div className="material-symbols-outlined">partly_cloudy_day</div>
              <div className="forecast-temperature">
                <h5>7°C</h5>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="forecast-day">
                <h5>Thu</h5>
              </div>
              <div className="material-symbols-outlined">cloudy</div>
              <div className="forecast-temperature">
                <h5>6°C</h5>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="forecast-day">
                <h5>Fri</h5>
              </div>
              <div className="material-symbols-outlined">partly_cloudy_day</div>
              <div className="forecast-temperature">
                <h5>8°C</h5>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="forecast-day">
                <h5>Sat</h5>
              </div>
              <div className="material-symbols-outlined">partly_cloudy_day</div>
              <div className="forecast-temperature">
                <h5>12°C</h5>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="forecast-day">
                <h5>Sun</h5>
              </div>
              <div className="material-symbols-outlined">cloudy</div>
              <div className="forecast-temperature">
                <h5>15°C</h5>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="forecast-day">
                <h5>Mon</h5>
              </div>
              <div className="material-symbols-outlined">rainy</div>
              <div className="forecast-temperature">
                <h5>12°C</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="https://github.com/camabo/weather-app-react-caitlin-bolanos">
        Open-source code{" "}
      </a>
      by Caitlin Bolanos
    </div>
  );
}
