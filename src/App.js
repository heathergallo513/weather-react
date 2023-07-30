import "./App.css";

export default function App() {
  return (
    <div className="App">
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
          />

          <title>Weather App</title>
        </head>
        <body>
          <div className="container">
            <div className="weather-app">
              <form id="search-form" className="mb-3">
                <div className="row">
                  <div className="col-6">
                    <input
                      type="search"
                      placeholder="Search City or Zip Code"
                      className="form-control"
                      id="city-input"
                      autocomplete="off"
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="submit"
                      value="Search"
                      className="btn btn-primary"
                    />
                  </div>
                </div>
              </form>
              <div className="overview">
                <h1 id="city">New York</h1>
                <ul>
                  <li>Last updated: Tues 10:00</li>
                  <li id="description">Cloudy</li>
                </ul>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="d-flex weather-temperature">
                    <img
                      src="	https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                      width="50"
                      height="50"
                      alt="clear"
                      id="icon"
                    />

                    <strong id="temperature">71</strong>
                    <small>
                      <a href="/#" id="fahrenheit-link">
                        °F
                      </a>{" "}
                      |
                      <a href="/#" id="celcius-link">
                        °C
                      </a>
                    </small>
                    <span />
                  </div>
                </div>
                <div className="col-6">
                  <ul>
                    <li>
                      Humidity: <span id="humidity">80</span>%
                    </li>
                    <li>
                      Wind: <span id="wind">10 </span>km/h
                    </li>
                  </ul>
                </div>
              </div>

              <div className="weather-forecast" id="forecast"></div>
            </div>
            <footer>
              <small>
                <a
                  href="https://github.com/heathergallo513/weather-react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open-source code
                </a>
                by Heather Gallo
              </small>
            </footer>
            <script src="src/index.js"></script>
          </div>
        </body>
      </html>
    </div>
  );
}
