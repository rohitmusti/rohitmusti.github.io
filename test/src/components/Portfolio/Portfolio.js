import "./Portfolio.css";
import { Fragment, Component } from "react";
import { Card } from "antd";

class Portfolio extends Component {
  constructor(props) {
    super(props);
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
