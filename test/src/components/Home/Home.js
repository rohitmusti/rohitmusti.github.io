import "./Home.css";
import { Map, TileLayer } from "react-leaflet";
import { Fragment, Component } from "react";
import { Mymarker } from "../Marker/marker";
import { Card, Button } from "antd";

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

  onMoveHandler(event) {
    console.log(`current center: ${event.target.getCenter()}`);
    console.log(`current zoom: ${event.target.getZoom()}`);
    // this.setState(zoom: event.target.getZoom)
    return event.target.getCenter();
  }

  capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  getNextPlace = (position) => {
    this.onIconClickHandler(Object.keys(this.state.places)[position + 1]);
  };

  getPrevPlace = (position) => {
    this.onIconClickHandler(Object.keys(this.state.places)[position - 1]);
  };

  startHereHandler = () => {
    const oldLandingLocation = this.state.landingLocation;
    const pointOfInterest = {
      key: "Cincinnati",
      ...this.state.places["Cincinnati"],
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
    const position = [
      this.state.landingLocation.lat,
      this.state.landingLocation.lng,
    ];

    return (
      <Fragment>
        <Card
          className="navTile"
          title="Hi, my name is Rohit!"
          extra={
            <Button type="primary" href="/portfolio">
              My Portfolio
            </Button>
          }
        >
          <p>
            Click on the various pop ups to learn a little bit more about my
            life. Try{" "}
            <a onClick={() => this.onIconClickHandler("Cincinnati")}>
              starting here
            </a>
            .
          </p>
          <p>
            Check out my resume{" "}
            <a href="https://rohitmusti.github.io/resume/rmusti_resume.pdf">
              here
            </a>
            .
          </p>
          <p>
            Check out my LinkedIn{" "}
            <a href="https://linkedin.com/in/rohitmusti" target="_blank">
              here
            </a>
            .
          </p>
        </Card>
        {this.state.currentPointOfInterest && (
          <Card
            className="interestTile"
            title={`${this.capitalize(this.state.currentPointOfInterest.key)}`}
          >
            <p>{this.state.currentPointOfInterest.description} </p>
            {
              <Button
                disabled={
                  this.state.currentPointOfInterest.order === 0 ? true : false
                }
                onClick={() =>
                  this.getPrevPlace(this.state.currentPointOfInterest.order)
                }
              >
                Previous
              </Button>
            }
            {
              <Button
                disabled={
                  this.state.currentPointOfInterest.order ===
                  Object.keys(this.state.places).length - 1
                    ? true
                    : false
                }
                onClick={() =>
                  this.getNextPlace(this.state.currentPointOfInterest.order)
                }
              >
                Next
              </Button>
            }
          </Card>
        )}

        <Map
          className="map"
          center={position}
          zoom={this.state.landingLocation.zoom}
          animate={true}
          onmoveend={this.onMoveHandler.bind(this)}
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
                id={String(currentSpot.order)}
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
