import "./App.css";
import { Map, TileLayer } from "react-leaflet";
import { Component } from "react";
import marker from "./components/marker";

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
      <Map
        className="map"
        center={position}
        zoom={this.state.landingLocation.zoom}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
        />
        {Object.keys(this.state.places).map((key, index) => {
          return marker(this.state.places[key]);
        })}
      </Map>
    );
  }
}

export default App;
