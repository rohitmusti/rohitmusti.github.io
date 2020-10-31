import "./Home.css";
import { Map, TileLayer } from "react-leaflet";
import { Fragment, Component } from "react";
import { Mymarker } from "../Marker/marker";
import { Card } from "antd";

class Home extends Component {
  constructor(props) {
    super(props);
    let placesData = require("../../assets/places.json");
    this.state = {
      landingLocation: {
        lat: 41.850033,
        lng: -87.6500523,
        zoom: 4,
      },
      currentPointOfInterest: null,
      places: placesData,
    };
  }

  onIconClickHandler = (positionTagKey) => {
    const oldLandingLocation = this.state.landingLocation;
    const pointOfInterest = {
      key: positionTagKey,
      ...this.state.places[positionTagKey],
    };
    const newLandingLocation = {
      lat: pointOfInterest.lat,
      lng: pointOfInterest.lng,
      zoom: 13,
    };
    this.setState({
      landingLocation: newLandingLocation,
      currentPointOfInterest: pointOfInterest,
    });
  };

  capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  render() {
    const position = [
      this.state.landingLocation.lat,
      this.state.landingLocation.lng,
    ];

    return (
      <Fragment>
        <Card
          className="navTile"
          title="Hi, My name is Rohit! This is a new check"
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
        {this.state.currentPointOfInterest && (
          <Card
            className="interestTile"
            title={`${this.capitalize(this.state.currentPointOfInterest.key)}`}
          >
            <p>{this.state.currentPointOfInterest.description}</p>
          </Card>
        )}

        <Map
          className="map"
          center={position}
          zoom={this.state.landingLocation.zoom}
        >
          <TileLayer
            attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>; Map data;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
          />
          {Object.keys(this.state.places).map((key, index) => {
            let currentSpot = {
              key: key,
              ...this.state.places[key],
            };
            return (
              <Mymarker
                key={key}
                onClick={this.onIconClickHandler}
                currentSpot={currentSpot}
              />
            );
          })}
        </Map>
      </Fragment>
    );
  }
}

export default Home;
