import "./Portfolio.css";
import { Map, TileLayer } from "react-leaflet";
import { Fragment, Component } from "react";
import { Mymarker } from "../Marker/marker";
import { Card } from "antd";

class Portfolio extends Component {
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

  render() {
    return (
      <Fragment>
        <h1>Hey</h1>
        <p>This is some text</p>
      </Fragment>
    );
  }
}

export default Portfolio;
