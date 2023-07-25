import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = () => {
  const position = [42.4258332, -71.0729507];
  const accessToken =
    "pk.eyJ1IjoibWNsb2xvZSIsImEiOiJjbGtocXVpZjYwN3kzM3Bta3gxbWJrNGI2In0.4fdLHukESssR8gKHe7iUFg";

  return (
    <div
      className="h-400px w-full"
      style={{ width: "500px", height: "500px" }}
      id="map"
    >
      <MapContainer center={position} zoom={13} className="w-full h-full">
        <TileLayer
          attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> contributors'
          url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
          id="mapbox/streets-v11"
          accessToken={accessToken}
        />
        <Marker position={position}>
          <Popup>Mengchen here, come over for a cup of coffee :)</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
