import { Marker, Popup } from "react-leaflet";
import { Component } from "react";

export class Mymarker extends Component {
  state = {};
  render() {
    return (
      <Marker
        key={this.props.currentSpot.order}
        position={[this.props.currentSpot.lat, this.props.currentSpot.lng]}
      >
        <Popup>{this.props.currentSpot.description}</Popup>
      </Marker>
    );
  }
}
