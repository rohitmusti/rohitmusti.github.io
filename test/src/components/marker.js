import { Marker, Popup } from "react-leaflet";
import { Component } from "react";
import L from "leaflet";
import locationPin from "../assets/icons8-map-pin-100.png";

const myIcon = L.icon({
  iconUrl: locationPin,
  iconSize: [50, 42],
});

export class Mymarker extends Component {
  state = {};

  render() {
    return (
      <Marker
        onclick={() => this.props.onClick(this.props.currentSpot.key)}
        position={[this.props.currentSpot.lat, this.props.currentSpot.lng]}
        icon={myIcon}
      />
    );
  }
}
