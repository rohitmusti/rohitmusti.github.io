import { Marker, Popup } from "react-leaflet";

function marker(currentSpot) {
  return (
    <Marker position={[currentSpot.lat, currentSpot.lng]}>
      <Popup>{currentSpot.description}</Popup>
    </Marker>
  );
}

export default marker;
