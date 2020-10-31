import "./App.css";
import { Map, TileLayer } from "react-leaflet";
import { Fragment, Component } from "react";
import { Mymarker } from "./components/marker";
import { Card } from "antd";

class App extends Component {
  constructor(props) {
    super(props);
    let placesData = require("./data/places.json");
    this.state = {
      landingLocation: {
        lat: 41.850033,
        lng: -87.6500523,
        zoom: 4,
      },
      places: placesData,
    };
  }

  render() {
    const position = [
      this.state.landingLocation.lat,
      this.state.landingLocation.lng,
    ];

    return (
      <Fragment>
        <Card
          className="tile"
          title="Hi, My name is Rohit!"
          extra={
            <a href="https://rohitmusti.github.io/resume/rmusti_resume.pdf">
              My Resume
            </a>
          }
        >
          <p>
            Click on the various pop ups to learn a little bit more about my
            life!
          </p>
          <p>
            Check out my portfolio of projects{" "}
            <a href="https://rohitmusti.github.io/portfolio">here</a>{" "}
          </p>
        </Card>
        <Map
          className="map"
          center={position}
          zoom={this.state.landingLocation.zoom}
        >
          <TileLayer
            // attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            // url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
            attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>; Map data;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
          />
          {Object.keys(this.state.places).map((key, index) => {
            return <Mymarker key={key} currentSpot={this.state.places[key]} />;
          })}
        </Map>
      </Fragment>
    );
  }
}

export default App;
